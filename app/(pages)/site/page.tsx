import '../../globals.css';

import AnimateIn from '@/app/components/animate-in';
import { WorkPageWrapper } from '@/app/components/work-page-wrapper';
import { inspiration } from '@/data/inspiration';
import { Section } from '../../components/section';

export default function SiteInfoPage() {
  return (
    <WorkPageWrapper title="Inspiration">
      <div className="mx-auto flex max-w-lg grid-cols-2 grid-rows-[auto_1fr] flex-col content-start items-start justify-start gap-12 sm:grid">
        {Object.entries(inspiration).map(([key, value], idx) => (
          <AnimateIn key={key} idx={idx} className={idx === 0 ? 'row-span-2' : ''}>
            <Section title={key}>
              <ul className="space-y-1">
                {value.map((item) => (
                  <li key={item}>
                    <a
                      href={`https://${item}`}
                      target="_blank"
                      className="uline text-foreground/75 hover:text-primary text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          </AnimateIn>
        ))}
      </div>
    </WorkPageWrapper>
  );
}
