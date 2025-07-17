'use client';

import { DefaultChatTransport } from 'ai';
import React from 'react';
import { AnimateInUp } from '@/app/components/animate-in';
import { useChat } from '@ai-sdk/react';
import { ChatInput } from './input';
import { Message } from './message';

export function Chat() {
  const { messages, sendMessage, error, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    messages: [
      {
        id: '1',
        role: 'user',
        parts: [{ type: 'text', text: 'Hello, how are you?' }],
      },
      {
        id: '2',
        role: 'assistant',
        parts: [
          { type: 'text', text: 'I am good, thank you!' },
          // { type: 'tool-call', toolCallId: '1', state: 'output-available', output: { city: 'Paris' } },
          // { type: 'tool-call', toolCallId: '2', state: 'output-available', output: { city: 'Paris' } },
        ],
      },
      {
        id: '3',
        role: 'user',
        parts: [{ type: 'text', text: 'What is the capital of France?' }],
      },
    ],
  });

  return (
    <div className="border-border flex h-[70vh] w-full flex-col rounded-lg border">
      <div className="flex-1 space-y-1 overflow-y-auto p-4">
        {messages.map((message, idx) => (
          <AnimateInUp key={message.id} idx={messages.length - idx}>
            <Message message={message} />
          </AnimateInUp>
        ))}
        {error && (
          <div className="text-destructive bg-destructive/5 max-h-[100px] overflow-y-auto rounded p-2 text-xs">
            Error: {error.message}
          </div>
        )}
      </div>

      <ChatInput handleSubmit={(text) => sendMessage({ text: text })} isLoading={status === 'streaming'} stop={stop} />
    </div>
  );
}
