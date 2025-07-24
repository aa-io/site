import { Metadata } from 'next';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { getWorkBySlug } from '@/data/work';
import CatchContent from './content.mdx';

const title = 'Catch';
const description = 'Catch';
const workData = getWorkBySlug('catch');

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function CatchPage() {
  return (
    <WorkPageWrapper title={title} description={description} parent="Work" roles={workData?.roles}>
      <CatchContent />
    </WorkPageWrapper>
  );
}
