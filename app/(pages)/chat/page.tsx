'use client';

import React from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import { Chat } from '../../components/chat/chat';
import { LinkButton } from '../../components/social-link';

export default function ChatPage() {
  return (
    <>
      <div className="p-pageMargin align-stretch from-background/100 via-background/75 group/nav top-pageMargin fixed sticky top-0 z-50 mx-auto grid translate-z-0 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b transition-colors duration-1000 hover:duration-250 md:p-[max(var(--padding-pageMargin),5vh)]">
        <div className="sm:-ml-1.5">
          <LinkButton href="/" className="rounded-full" icon={<IconChevronLeft className="iconSize" />} label="Home" />
        </div>
      </div>

      <Chat />
    </>
  );
}
