'use client';

import React from 'react';
import { Chat } from '../../components/chat/chat';
import { WorkPageWrapper } from '../../components/work-page-wrapper';

export default function ChatPage() {
  return (
    <WorkPageWrapper title="Chat">
      <Chat />
    </WorkPageWrapper>
  );
}
