import { Metadata } from 'next';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import NoyoContent from './content.mdx';

const title = 'Noyo';
const description = 'Work at Noyo - Command Center, Website & Docs, Marketing, and more';

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function NoyoPage() {
  return (
    <WorkPageWrapper title={title} description={description}>
      <NoyoContent />
    </WorkPageWrapper>
  );
}
