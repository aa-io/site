import { Metadata } from 'next';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import CatchContent from './content.mdx';

const title = 'Catch';
const description = "There's always been a catch.";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function CatchPage() {
  return (
    <WorkPageWrapper title={title} description={description}>
      <CatchContent />
    </WorkPageWrapper>
  );
}
