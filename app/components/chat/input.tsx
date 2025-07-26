'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { IconArrowUp, IconSquare } from '@tabler/icons-react';
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
      <div className="flex gap-2 md:pb-[max(0px,5vh)]">
        <div
          className={cn(
            'glass-bg group ring-border relative flex flex-1 origin-right items-center overflow-hidden rounded-[25px] bg-clip-padding p-1.5 shadow-sm ring-[0.5px] ring-offset-0 transition-all focus-within:shadow-sm',
            isLoading && '!bg-accent/50 shadow-none ring-0',
          )}
        >
          <div className="absolute inset-0 -z-10 h-full overflow-hidden rounded-full">
            <Hdr className={cn('h-[0.25px] opacity-10 blur-[1px] transition-all', isLoading && 'opacity-0')} />
            <Hdr className={cn('top-auto bottom-0 h-[20px] blur-[20px] transition-all', isLoading && 'opacity-0')} />
          </div>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? '' : 'Ask about Andrew...'}
            className="placeholder:text-muted-foreground relative z-10 field-sizing-content w-full resize-none bg-transparent p-1.5 px-3 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50"
            autoFocus
            rows={1}
            disabled={isLoading}
          />{' '}
          {isLoading ?
            <Button type="button" size="icon" onClick={stop} className="shrink-0 self-end rounded-full">
              <IconSquare fill="currentColor" className="size-4" />
            </Button>
          : <Button
              type="submit"
              size="icon"
              variant={!input || !input.trim() ? 'secondary' : 'default'}
              disabled={!input || !input.trim()}
              className="shrink-0 self-end rounded-full transition-none"
            >
              <IconArrowUp className="size-5" />
            </Button>
          }
        </div>
      </div>
    </form>
  );
}
