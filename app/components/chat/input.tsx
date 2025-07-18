'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { IconSend, IconSquare } from '@tabler/icons-react';
import { Hdr } from '../hdr';
import { cn } from '../ui/utils';

interface ChatInputProps {
  handleSubmit: (text: string) => void;
  isLoading: boolean;
  stop: () => void;
}

export function ChatInput({ handleSubmit, isLoading, stop }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Refocus textarea when streaming is done
  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

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
    <form onSubmit={_handleSubmit} className="">
      <div className="flex gap-2">
        <div className="glass focus-within:ring-ring relative flex-1 overflow-hidden rounded-lg border border-none focus-within:ring-[1.5px] focus-within:ring-offset-0">
          <Hdr className={cn('rounded-lg', isLoading && 'opacity-0 transition-all')} />
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Andrew's experience, skills, or projects..."
            className="placeholder:text-muted-foreground relative z-10 max-h-[200px] min-h-[60px] w-full resize-none bg-transparent px-3 py-3 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50"
            rows={2}
            autoFocus
            disabled={isLoading}
          />
        </div>
        {isLoading ?
          <Button type="button" size="icon" variant="secondary" onClick={stop} className="shrink-0 rounded-full">
            <IconSquare className="h-4 w-4" />
          </Button>
        : <Button type="submit" size="icon" disabled={!input || !input.trim()} className="shrink-0 rounded-full">
            <IconSend className="h-4 w-4" />
          </Button>
        }
      </div>
    </form>
  );
}
