import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLine,
  IconBrandLinkedin,
  IconInfoCircle,
  IconBrandOpenai,
  IconBrandX,
  IconFileTypePdf,
} from '@tabler/icons-react';

export type SocialLinkKey = 'Chat' | 'About' | 'Resume' | 'LinkedIn' | 'GitHub' | 'X' | 'Dribbble';

export type SocialLinkType = {
  key: SocialLinkKey;
  href: string;
  icon: any;
  label?: string;
  text?: string;
  target?: string;
};

export const primaryLinks: Array<SocialLinkType> = [
  {
    key: 'Resume',
    text: 'Download resume',
    label: 'PDF',
    icon: IconFileTypePdf,
    href: '/resume.pdf',
    target: '_blank',
  },
  {
    key: 'About',
    text: 'Site info',
    icon: IconInfoCircle,
    href: '/site',
  },
  {
    key: 'Chat',
    text: 'AI Chat',
    icon: IconBrandLine,
    href: '/chat',
  },
];

export const socialLinks: Array<SocialLinkType> = [
  {
    key: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajambrosino/',
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
  },
  {
    key: 'GitHub',
    href: 'https://github.com/aa-io/site',
    icon: IconBrandGithub,
    text: 'GitHub',
  },
  {
    key: 'X',
    href: 'https://x.com/ajambrosino',
    icon: IconBrandX,
    text: 'X fka Twitter',
  },

  {
    key: 'Dribbble',
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
