'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage } from '@/app/api/chat/route';
import { cn } from '@/app/components/ui/utils';
import { chatMdxComponents } from '@/mdx-components';

interface MessageProps {
  message: ChatMessage;
}

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
                /** @ts-expect-error */
                const output = typeof part.output === 'string' ? part.output : JSON.stringify(part.output, null, 2);

                return (
                  /** @ts-expect-error */
                  <div key={part.toolCallId}>
                    <div key={idx} className={cn('text-muted-foreground text-xs font-medium')}>
                      Using {toolName}
                    </div>
                    {/* <div>{output}</div> */}
                  </div>
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
