'use client';

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { IconSend, IconSquare } from '@tabler/icons-react';

interface ChatInputProps {
  handleSubmit: (text: string) => void;
  isLoading: boolean;
  stop: () => void;
}

export function ChatInput({ handleSubmit, isLoading, stop }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(input);
      setInput('');
    } else {
      setInput(e.currentTarget.value);
    }
  };

  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={_handleSubmit} className="border-t p-4">
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Andrew's experience, skills, or projects..."
          className="bg-accent ring-none placeholder:text-muted-foreground focus-visible:ring-ring max-h-[200px] min-h-[60px] flex-1 resize-none rounded-md border border-none px-3 py-3 text-sm focus-visible:ring-[1.5px] focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          rows={2}
          disabled={isLoading}
        />

        {isLoading ?
          <Button type="button" size="icon" variant="secondary" onClick={stop} className="shrink-0 rounded-full">
            <IconSquare className="h-4 w-4" />
          </Button>
        : <Button type="submit" size="icon" disabled={!input || !input.trim()} className="shrink-0 rounded-full">
            <IconSend className="h-4 w-4" />
          </Button>
        }
      </div>

      <div className="text-muted-foreground mt-2 text-xs">Press Enter to send, Shift+Enter for new line {input}</div>
    </form>
  );
}
