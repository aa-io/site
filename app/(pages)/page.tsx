import '../globals.css';

import { WorkRow } from '@/app/components/work-row';
import { licenses } from '@/data/licenses';
import { primaryLinks, socialLinks } from '@/data/links';
import { mentions } from '@/data/mentions';
import { workItems } from '@/data/work';
import AnimateIn from '../components/animate-in';
import { LicenseRow } from '../components/license-row';
import { MentionRow } from '../components/mention-row';
import { Section } from '../components/section';
import { SocialLink } from '../components/social-link';

const CUTOFF_YEAR = 2016;
const recentWorkItems = workItems.filter((work) => work.roles.some((role) => parseInt(role.startDate) >= CUTOFF_YEAR));
const earlierWorkItems = workItems.filter((work) => work.roles.some((role) => parseInt(role.startDate) < CUTOFF_YEAR));

export default function HomePage() {
  return (
    <div className="px-pageMargin container mx-auto max-w-2xl pt-24">
      <AnimateIn idx={0}>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-medium">Andrew Ambrosino</h1>
          <div className="text-muted-foreground text-base font-normal text-pretty">
            Founder, Design Engineer, Product Leader
          </div>
        </div>
      </AnimateIn>

      <div className="flex flex-col gap-12 pt-12">
        <AnimateIn idx={1}>
          <Section title="Latest">
            {recentWorkItems.map((work) => (
              <WorkRow key={work.company} {...work} />
            ))}
          </Section>
        </AnimateIn>
        <AnimateIn idx={2}>
          <Section title="Earlier">
            {earlierWorkItems.map((work, idx) => (
              <div key={idx} className="text-foreground/65">
                <WorkRow {...work} />
              </div>
            ))}
          </Section>
        </AnimateIn>
        <AnimateIn idx={3}>
          <Section title="Licenses">
            {licenses.map((license) => (
              <LicenseRow
                key={license.credential.number}
                entity={license.entity}
                name={license.name}
                credential={license.credential.type}
                number={license.credential.number}
              />
            ))}
          </Section>
        </AnimateIn>
        <AnimateIn idx={4}>
          <Section title="Misc">
            {mentions.map((mention) => (
              <MentionRow
                key={mention.title}
                link={mention.url}
                title={mention.title}
                date={mention.year}
                description={mention.description}
              />
            ))}
          </Section>
        </AnimateIn>

        <AnimateIn
          idx={3}
          className="from-background/0 to-background/100 via-background/75 pt-pageMargin sticky bottom-0 -mx-1.5 flex items-center justify-around gap-6 bg-gradient-to-b pb-[calc(var(--padding-pageMargin)/2)] md:justify-start md:gap-12"
        >
          <div className="flex items-center justify-between gap-3">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.text}
                href={link.href}
                icon={<link.icon className="iconSize" strokeWidth={1.85} />}
                text={link.text}
                label={link.label}
              />
            ))}
          </div>
          <div className="flex items-center justify-between gap-3">
            {primaryLinks.map((link) => (
              <SocialLink
                key={link.text}
                href={link.href}
                icon={<link.icon className="iconSize" strokeWidth={1.85} />}
                text={link.text}
                label={link.label}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
