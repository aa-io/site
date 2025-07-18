'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage } from '@/app/api/chat/route';
import { cn } from '@/app/components/ui/utils';
import { chatMdxComponents } from '@/mdx-components';
import { IconFile } from '@tabler/icons-react';

interface MessageProps {
  message: ChatMessage;
}

// @todo extract
const ToolComponent = ({ toolName, output }: { toolName: string; output: any }) => {
  switch (toolName) {
    case 'provideLink':
      return (
        <a href={output?.url} target="_blank" className="glass relative flex gap-3 rounded-md p-3">
          <div className="bg-accent flex h-9 w-9 shrink-0 grow-0 items-center justify-center rounded-full p-1">
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
          <div>{toolName}</div>
          <div>{JSON.stringify(output, null, 2)}</div>
        </div>
      );
  }
};

/**
 * @todo memoize markdown (https://v5.ai-sdk.dev/cookbook/next/markdown-chatbot-with-memoization)
 */
export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div className={cn('flex max-w-[80%] flex-col gap-1')}>
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
                      : part.state === 'done' ? 'px-4'
                      : 'text-foreground/75 px-4',
                    )}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={chatMdxComponents}>
                      {part.text}
                    </ReactMarkdown>
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
