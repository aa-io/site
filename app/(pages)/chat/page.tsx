'use client';

import React from 'react';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { Chat } from '../../components/chat/chat';

export default function ChatPage() {
  return (
    <WorkPageWrapper title="Chat with AI">
      <div className="mx-auto w-full max-w-4xl">
        <Chat />
      </div>
    </WorkPageWrapper>
  );
}
