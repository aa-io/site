import { FloatingToc } from '@/components/floating-toc';
import { IntegratedScrollHeader } from '@/components/integrated-scroll-header';
import Content from './content.mdx';

export default function About() {
  return (
    <>
      <div className="min-h-screen">
        <IntegratedScrollHeader
          title="About Andrew"
          subtitle="Software engineer, designer, and builder of digital experiences"
          className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/20"
        />

        {/* About Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-16">
            <Content />
          </div>
        </div>
      </div>

      {/* Floating Table of Contents */}
      <FloatingToc />
    </>
  );
}
