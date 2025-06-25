import '../globals.css';

import { WorkRow } from '@/app/components/work-row';
import { primaryLinks, socialLinks } from '@/data/links';
import { workItems } from '@/data/work';
import { Section } from '../components/section';
import { SocialLink } from '../components/social-link';

export const metadata = {
  title: 'Andrew',
  description: 'Founder, Design Engineer, Product Leader',
};

const CUTOFF_YEAR = 2016;
const recentWorkItems = workItems.filter((work) => work.roles.some((role) => parseInt(role.startDate) >= CUTOFF_YEAR));
const earlierWorkItems = workItems.filter((work) => work.roles.some((role) => parseInt(role.startDate) < CUTOFF_YEAR));

export default function HomePage() {
  return (
    <div className="px-pageMargin container mx-auto max-w-2xl py-24">
      <h1 className="text-2xl font-semibold">Andrew Ambrosino</h1>
      <h2 className="text-muted-foreground text-lg font-normal">Founder, Design Engineer, Product Leader</h2>

      <div className="flex flex-col gap-12 py-12">
        <Section title="Recent">
          {recentWorkItems.map((work) => (
            <WorkRow key={work.company} {...work} />
          ))}
        </Section>
        <Section title="Earlier" faded>
          {earlierWorkItems.map((work) => (
            <WorkRow key={work.company} {...work} />
          ))}
        </Section>

        <div className="from-background/0 to-background/100 sticky bottom-0 flex items-center justify-between gap-12 bg-gradient-to-b py-6">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.text}
                href={link.href}
                icon={<link.icon className="h-5 w-5" strokeWidth={1.85} />}
                text={link.text}
                label={link.label}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            {primaryLinks.map((link) => (
              <SocialLink
                key={link.text}
                href={link.href}
                icon={<link.icon className="h-5 w-5" strokeWidth={1.85} />}
                text={link.text}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
