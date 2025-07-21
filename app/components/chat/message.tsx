'use client';

import { marked } from 'marked';
import React, { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage } from '@/app/api/chat/route';
import { cn } from '@/app/components/ui/utils';
import { chatMdxComponents } from '@/mdx-components';
import { IconFile } from '@tabler/icons-react';

interface MessageProps {
  message: ChatMessage;
}

// @todo extract, make sure it's typesafe between server tools and client tool ui
const ToolComponent = ({ toolName, output }: { toolName: string; output: any }) => {
  switch (toolName) {
    case 'provideLink':
      return (
        <a
          href={output?.url}
          target="_blank"
          className="bg-accent hover:bg-accent/75 relative my-3 inline-flex gap-3 self-start rounded-lg p-3 pr-6"
        >
          <div className="bg-background flex h-9 w-9 shrink-0 grow-0 items-center justify-center rounded-full p-1">
            <IconFile className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium">{output?.title}</div>
            <div className="text-muted-foreground text-xs">{output?.url}</div>
          </div>
        </a>
      );
    default:
      return (
        <div>
          <div className="text-muted-foreground text-xs">
            used <span className="font-medium">{toolName}</span>
          </div>
          {/* <code className="bg-accent text-xs opacity-25">{JSON.stringify(output, null, 2)}</code> */}
        </div>
      );
  }
};

function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens.map((token) => token.raw);
}

const MemoizedMarkdownBlock = memo(
  ({ content }: { content: string }) => {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={chatMdxComponents}>
        {content}
      </ReactMarkdown>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.content !== nextProps.content) return false;
    return true;
  },
);

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock';

const MemoizedMarkdown = memo(({ content, id }: { content: string; id: string }) => {
  const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

  return blocks.map((block, index) => <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />);
});

MemoizedMarkdown.displayName = 'MemoizedMarkdown';

/**
 * @todo memoize markdown (https://v5.ai-sdk.dev/cookbook/next/markdown-chatbot-with-memoization)
 */
export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div className={cn('flex flex-col gap-1 md:max-w-[80%]')}>
        {/* Show tool calls if any */}
        {message.parts && message.parts.length > 0 && (
          <div className="space-y-1">
            {message.parts.map((part, idx) => {
              if (part.type.startsWith('tool-')) {
                const toolName = part.type.replace('tool-', '');

                return (
                  /** @ts-expect-error */
                  <ToolComponent key={part.toolCallId} toolName={toolName} output={part.output} />
                );
              }
              if (part.type === 'text') {
                return (
                  <div
                    key={idx}
                    className={cn(
                      'rounded-lg text-base transition-all',
                      'prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
                      isUser ? 'bg-primary text-primary-foreground prose-invert px-3 py-2'
                      : part.state === 'done' ? ''
                      : 'text-foreground/75',
                    )}
                  >
                    <MemoizedMarkdown content={part.text} id={`${message.id}-${idx}`} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
