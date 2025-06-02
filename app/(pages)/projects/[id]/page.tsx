'use client';

import { use } from 'react';
import Catch from '@/const/catch.mdx';
import Noyo from '@/const/noyo.mdx';

const MdContent = {
  catch: Catch,
  noyo: Noyo,
};

export default function Project({ params }: { params: Promise<{ id: string }> }) {
  const _id = use(params).id;
  const MdComponent = MdContent[_id as keyof typeof MdContent];

  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <MdComponent />
    </div>
  );
}
