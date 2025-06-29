import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandOpenai,
  IconBrandX,
  IconFileTypePdf,
} from '@tabler/icons-react';

export type SocialLinkType = {
  href: string;
  icon: any;
  label?: string;
  text?: string;
};

export const primaryLinks: Array<SocialLinkType> = [
  {
    label: 'GPT',
    text: 'Custom GPT',
    icon: IconBrandOpenai,
    href: 'https://gpt.ambrosino.io',
  },
  {
    text: 'Download resume',
    label: 'Download',
    icon: IconFileTypePdf,
    href: '/resume.pdf',
  },
];

export const socialLinks: Array<SocialLinkType> = [
  {
    href: 'https://www.linkedin.com/in/ajambrosino/',
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/aa-io/site',
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
