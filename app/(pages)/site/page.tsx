import '../../globals.css';

import AnimateIn from '@/app/components/animate-in';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { inspiration } from '@/data/inspiration';
import { Section } from '../../components/section';

export default function SiteInfoPage() {
  return (
    <WorkPageWrapper title="Inspiration">
      <div className="flex flex-col gap-12 py-12">
        {Object.entries(inspiration).map(([key, value], idx) => (
          <AnimateIn key={key} idx={idx}>
            <Section title={key}>
              <div className="grid grid-cols-1 space-y-0.5 space-x-3 sm:grid-cols-2 md:grid-cols-3 pointer-coarse:space-y-1.5">
                {value.map((item, idx) => (
                  <div key={item} className="max-w-full truncate">
                    <a
                      href={`https://${item}`}
                      target="_blank"
                      className="uline text-foreground/75 hover:text-primary text-sm"
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </Section>
          </AnimateIn>
        ))}
      </div>
    </WorkPageWrapper>
  );
}
