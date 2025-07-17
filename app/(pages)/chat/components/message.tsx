'use client';

import React from 'react';
import { ChatMessage } from '@/app/api/chat/route';
import { cn } from '@/app/components/ui/utils';

interface MessageProps {
  message: ChatMessage;
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-3 py-2 text-sm',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-accent',
        )}
      >
        {/** @ts-expect-error */}
        <div className="break-words whitespace-pre-wrap">{message.content}</div>

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
                    <div key={idx} className="text-xs opacity-70">
                      🔧 Using tool: {toolName}
                    </div>
                    {/* <div>{output}</div> */}
                  </div>
                );
              }
              if (part.type === 'text') {
                return (
                  <div key={idx} className="text-sm break-words whitespace-pre-wrap">
                    {part.text}
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
