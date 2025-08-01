'use client';

import { DefaultChatTransport } from 'ai';
import React, { useEffect, useRef } from 'react';
import type { ChatMessage } from '@/app/api/chat/route';
import { AnimateInUp } from '@/app/components/animate-in';
import { ChatInput } from '@/app/components/chat/input';
import { Message } from '@/app/components/chat/message';
import { useChat } from '@ai-sdk/react';

export function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, error, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div
        className="mx-auto w-full max-w-2xl"
        style={{ '--chat-padding': 'max(var(--padding-pageMargin),5vh)' } as React.CSSProperties}
      >
        <div className="p-pageMargin w-full flex-1 scroll-m-30 space-y-1 py-[max(120px,20vh)] perspective-dramatic">
          <div className="flex-1 space-y-6">
            {messages.map((message, idx) => (
              <AnimateInUp key={message.id} idx={messages.length - idx}>
                <Message message={message as ChatMessage} />
              </AnimateInUp>
            ))}
          </div>
          {error && (
            <div className="text-destructive bg-destructive/5 max-h-[100px] overflow-y-auto rounded p-2 text-xs">
              Error: {error.message}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="from-background/0 to-background p-pageMargin fixed right-0 bottom-0 left-0 mx-auto h-30 max-w-2xl bg-gradient-to-b">
        <AnimateInUp idx={0}>
          <ChatInput
            handleSubmit={(text) => sendMessage({ text: text })}
            isLoading={status === 'streaming'}
            stop={stop}
          />
        </AnimateInUp>
      </div>
    </>
  );
}
