import '../globals.css';

import { WorkRow } from '@/app/components/work-row';
import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandOpenai,
  IconBrandX,
  IconFileTypePdf,
} from '@tabler/icons-react';
import { Section } from '../components/section';
import { SocialLink } from '../components/social-link';

export const metadata = {
  title: 'Andrew',
  description: 'Founder, Design Engineer, Product Leader',
};

type SocialLinkType = {
  href: string;
  icon: any;
  label?: string;
  text?: string;
};

const primaryLinks: Array<SocialLinkType> = [
  {
    label: 'GPT',
    text: 'Custom GPT',
    icon: IconBrandOpenai,
    href: 'https://chatgpt.com/g/g-684c1fb423ec819196a438a140ccc3bf-andrew-ambrosino',
  },
  {
    text: 'Download resume',
    label: 'Download',
    icon: IconFileTypePdf,
    href: '/resume.pdf',
  },
];

const socialLinks: Array<SocialLinkType> = [
  {
    href: 'https://www.linkedin.com/in/ajambrosino/',
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/aa-io',
    icon: IconBrandGithub,
    text: 'GitHub',
  },
  {
    href: 'https://x.com/ajambrosino',
    icon: IconBrandX,
    text: 'X fka Twitter',
  },

  {
    text: 'Dribbble',
    icon: IconBrandDribbble,
    href: 'https://dribbble.com/aa-io',
  },
  //   {
  //     label: 'Figma',
  //     icon: IconBrandFigma,
  //     href: 'https://figma.com/@aa',
  //   },
];

export default function HomePage() {
  return (
    <div className="px-pageMargin container mx-auto max-w-2xl py-24">
      <h1 className="text-2xl font-semibold">Andrew Ambrosino</h1>
      <h2 className="text-muted-foreground text-lg">Founder, Design Engineer, Product Leader</h2>

      <div className="flex flex-col gap-12 py-12">
        <Section title="Recent">
          <WorkRow
            company="Noyo"
            logo="/img/logos/noyo.png"
            roles={[
              {
                title: 'Head of Product',
                startDate: '2025',
              },
              {
                title: 'Head of Frontend & Design',
                startDate: '2023',
              },
            ]}
          />
          <WorkRow
            company="Catch"
            logo="/img/logos/catch.png"
            roles={[
              {
                title: 'Founder & CTO/CPO',
                subtitle: 'YC W19',
                startDate: '2017',
                endDate: '2023',
              },
            ]}
          />
        </Section>
        <Section title="Earlier" faded>
          <WorkRow
            company="MITRE"
            logo="/img/logos/mitre.png"
            roles={[
              {
                title: 'Senior Design Engineer',
                startDate: '2011',
                endDate: '2015',
              },
            ]}
          />
          <WorkRow
            company="Upthere"
            logo="/img/logos/upthere.png"
            roles={[
              {
                title: 'Product Design',
                subtitle: 'KPCB Design Fellow',
                startDate: '2014',
                endDate: '2014',
              },
            ]}
          />
          <WorkRow
            company="Microsoft"
            logo="/img/logos/microsoft.png"
            roles={[
              {
                title: 'Software Engineer',
                subtitle: 'Intern',
                startDate: '2013',
                endDate: '2013',
              },
            ]}
          />
        </Section>
        {/* <Section title="Registrations">
          <WorkRow
            company="FINRA/SEC"
            roles={[
              {
                title: 'Investment Advisor/Representative',
                subtitle: 'CRD 6984304',
                startDate: '2019',
                endDate: '2023',
              },
            ]}
          />
          <WorkRow
            company="MA"
            logo="/img/logos/mitre.png"
            roles={[
              {
                title: 'Insurance Agent (Health, Property, Casualty)',
                startDate: '2018',
                endDate: '2023',
              },
            ]}
          />
        </Section> */}

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
