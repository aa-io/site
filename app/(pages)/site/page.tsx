import '../../globals.css';

import AnimateIn from '@/app/components/animate-in';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { inspiration } from '@/data/inspiration';
import { Section } from '../../components/section';

export default function SiteInfoPage() {
  return (
    <WorkPageWrapper title="Inspiration">
      <div className="flex flex-col gap-6 py-6">
        {Object.entries(inspiration).map(([key, value], idx) => (
          <AnimateIn key={key} idx={idx} className="border-border border-t py-6">
            <Section title={`${key[0].toUpperCase()}${key.slice(1)}`}>
              <div
                style={{ '--numItems': value.length } as React.CSSProperties}
                className="grid grid-flow-col-dense grid-cols-2 grid-rows-[repeat(round(up,calc(var(--numItems)/2)),1fr)] space-y-0.5 space-x-3 md:grid-cols-3 md:grid-rows-[repeat(round(up,calc(var(--numItems)/3)),1fr)] pointer-coarse:space-y-1.5"
              >
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
