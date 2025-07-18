import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandOpenai,
  IconBrandX,
  IconFileTypePdf,
} from '@tabler/icons-react';

export type SocialLinkKey = 'GPT' | 'Resume' | 'LinkedIn' | 'GitHub' | 'X' | 'Dribbble';

export type SocialLinkType = {
  key: SocialLinkKey;
  href: string;
  icon: any;
  label?: string;
  text?: string;
};

export const primaryLinks: Array<SocialLinkType> = [
  {
    key: 'GPT',
    label: 'GPT',
    text: 'Custom GPT',
    icon: IconBrandOpenai,
    href: 'https://gpt.ambrosino.io',
  },
  {
    key: 'Resume',
    text: 'Download resume',
    label: 'PDF',
    icon: IconFileTypePdf,
    href: '/resume.pdf',
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
