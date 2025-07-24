export type WorkExperienceRole = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate?: string;
};

export type WorkExperience = {
  company: string;
  logo: string;
  slug?: string;
  roles: Array<WorkExperienceRole>;
  invertDark?: boolean;
};

export const workItems: Array<WorkExperience> = [
  {
    company: 'OpenAI',
    logo: '/img/logos/openai.png',
    invertDark: true,
    roles: [
      {
        title: 'Member of Technical Staff',
        startDate: '2025',
      },
    ],
  },
  {
    company: 'Noyo',
    logo: '/img/logos/noyo.png',
    slug: 'noyo',
    roles: [
      {
        title: 'Head of Product',
        startDate: '2025',
        endDate: '2025',
      },
      {
        title: 'Head of Frontend & Design',
        startDate: '2023',
        endDate: '2025',
      },
    ],
  },
  {
    company: 'Catch',
    logo: '/img/logos/catch.png',
    slug: 'catch',
    roles: [
      {
        title: 'Founder & CTO/CPO',
        subtitle: 'YC W19',
        startDate: '2016',
        endDate: '2023',
      },
    ],
  },
  {
    company: 'MITRE',
    logo: '/img/logos/mitre.png',
    roles: [
      {
        title: 'Senior Design Engineer',
        startDate: '2011',
        endDate: '2015',
      },
    ],
  },
  {
    company: 'Upthere',
    logo: '/img/logos/upthere.png',
    roles: [
      {
        title: 'Product Design',
        subtitle: 'KPCB Design Fellow',
        startDate: '2014',
        endDate: '2014',
      },
    ],
  },
  {
    company: 'Microsoft',
    logo: '/img/logos/microsoft.png',
    roles: [
      {
        title: 'Software Engineer',
        subtitle: 'Intern',
        startDate: '2013',
        endDate: '2013',
      },
    ],
  },
];

/**
 * Get work experience data by slug
 */
export function getWorkBySlug(slug: string): WorkExperience | undefined {
  return workItems.find((item) => item.slug === slug);
}
