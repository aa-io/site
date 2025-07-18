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
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
      <div className="relative mx-auto h-full w-full max-w-3xl">
        <div className="absolute top-0 bottom-0 w-full flex-1 scroll-m-30 space-y-1 overflow-y-auto p-4 pt-30 pb-30">
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

        <div className="absolute right-0 bottom-0 left-0 h-30 p-4">
          <ChatInput
            handleSubmit={(text) => sendMessage({ text: text })}
            isLoading={status === 'streaming'}
            stop={stop}
          />
        </div>
      </div>
    </div>
  );
}
