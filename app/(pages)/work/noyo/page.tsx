import { Metadata } from 'next';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { getWorkBySlug } from '@/data/work';
import NoyoContent from './content.mdx';

const title = 'Noyo';
const description = 'Noyo';
const workData = getWorkBySlug('noyo');

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function NoyoPage() {
  return (
    <WorkPageWrapper title={title} description={description} parent="Work" roles={workData?.roles}>
      <NoyoContent />
    </WorkPageWrapper>
  );
}
