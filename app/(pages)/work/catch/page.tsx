import path from 'path';
import { Metadata } from 'next';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { getMDXPost } from '@/app/lib/mdx';
import CatchContent from './content.mdx';

// Get the post data at build time
const post = getMDXPost(path.join(process.cwd(), 'app/(pages)/work/catch/content.mdx'));

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
