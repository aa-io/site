'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useChat } from '@ai-sdk/react';
import { IconRobot, IconSend, IconUser, IconX } from '@tabler/icons-react';

const PRESET_QUESTIONS = [
  "What's your experience with React?",
  'Tell me about your recent projects',
  'What are your design principles?',
  'What technologies do you work with?',
];

// Create a global function to open the chatbot
let globalSetIsOpen: ((isOpen: boolean) => void) | null = null;

export function openChatbot() {
  if (globalSetIsOpen) {
    globalSetIsOpen(true);
  }
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: "Hi! I'm here to help you learn about Andrew's experience and skills. Feel free to ask me anything!",
      },
    ],
  });

  // Register the global setter
  useEffect(() => {
    globalSetIsOpen = setIsOpen;
    return () => {
      globalSetIsOpen = null;
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // Submit the form after setting the input
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed right-6 bottom-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-105',
          isOpen && 'scale-0',
        )}
        size="icon"
      >
        <IconRobot className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      <Card
        className={cn(
          'fixed right-6 bottom-6 z-50 flex h-[600px] w-[400px] flex-col shadow-2xl transition-all duration-300',
          'max-h-[80vh] max-w-[90vw]',
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <IconRobot className="h-5 w-5" />
            <h3 className="font-semibold">Chat with AI</h3>
          </div>
          <Button onClick={() => setIsOpen(false)} size="icon" variant="ghost" className="h-8 w-8">
            <IconX className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn('flex gap-3', message.role === 'user' && 'flex-row-reverse')}>
                <div
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                    message.role === 'assistant' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                  )}
                >
                  {message.role === 'assistant' ?
                    <IconRobot className="h-4 w-4" />
                  : <IconUser className="h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm',
                    message.role === 'assistant' ? 'bg-muted' : 'bg-primary text-primary-foreground',
                    'max-w-[85%]',
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <IconRobot className="h-4 w-4" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick questions */}
        {messages.length === 1 && (
          <div className="border-t p-4">
            <p className="text-muted-foreground mb-2 text-xs">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {PRESET_QUESTIONS.map((question) => (
                <Button
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                  variant="outline"
                  size="sm"
                  className="h-auto px-2 py-1 text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form ref={formRef} onSubmit={handleSubmit} className="border-t p-4">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Andrew's experience..."
              className="min-h-[60px] resize-none"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
              <IconSend className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
