import { Company, WorkExperience } from './work-experience';

// Define your companies here
export const companies: Company[] = [
  {
    id: 'noyo',
    name: 'Noyo',
    description: 'Benefits infrastructure platform',
    industry: 'technology',
    size: 'medium',
    location: 'San Francisco, CA',
    website: 'https://noyo.com',
    logo: '/img/logos/noyo.png',
  },
  {
    id: 'catch',
    name: 'Catch',
    description: 'Financial platform for independent workers - banking, investing, and health insurance',
    industry: 'finance',
    size: 'startup',
    location: 'New York, NY',
    website: 'https://catch.co',
    logo: '/img/logos/catch.png',
  },

  {
    id: 'mitre',
    name: 'MITRE',
    description: 'Not-for-profit organization working in the public interest',
    industry: 'government',
    size: 'large',
    location: 'Bedford, MA',
    website: 'https://mitre.org',
    logo: '/img/logos/mitre.png',
  },

  {
    id: 'upthere',
    name: 'Upthere',
    description: 'Future of the cloud platform',
    industry: 'technology',
    size: 'startup',
    location: 'Palo Alto, CA',
    logo: '/img/logos/upthere.png',
  },
  {
    id: 'kleiner-perkins',
    name: 'Kleiner Perkins Caufield & Byers',
    description: 'Venture capital firm',
    industry: 'finance',
    size: 'medium',
    location: 'Menlo Park, CA',
    website: 'https://kleinerperkins.com',
    logo: '/img/logos/kleiner-perkins.png',
  },
  {
    id: 'salucro',
    name: 'Salucro',
    description: 'Healthcare payment platform',
    industry: 'healthcare',
    size: 'medium',
    location: 'Phoenix, AZ',
    logo: '/img/logos/salucro.png',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'Technology corporation',
    industry: 'technology',
    size: 'enterprise',
    location: 'Cambridge, MA',
    website: 'https://microsoft.com',
    logo: '/img/logos/microsoft.png',
  },
  {
    id: 'google',
    name: 'Google',
    description: 'Technology corporation',
    industry: 'technology',
    size: 'enterprise',
    location: 'Mountain View, CA',
    website: 'https://google.com',
    logo: '/img/logos/google.png',
  },
];

// Define your work experience here
export const myWorkExperience: WorkExperience = {
  stints: [
    {
      id: 'noyo-stint',
      company: companies.find((c) => c.id === 'noyo')!,
      employmentType: 'full-time',
      startDate: new Date('2023-05-01'),
      endDate: undefined, // Current position
      location: 'San Francisco, CA',
      isRemote: true,
      roles: [
        {
          id: 'noyo-head-frontend-design',
          title: 'Head of Frontend & Design',
          level: 'director',
          department: 'Engineering',
          startDate: new Date('2023-05-01'),
          endDate: new Date('2024-03-01'),
          description: 'Led frontend engineering and design for all customer-facing applications',
          responsibilities: [
            'Redesigned and rebuilt all customer-facing apps',
            'Redesigned company website and API documentation',
            'Led frontend engineering team',
            'Established design system and engineering standards',
          ],
          achievements: [
            'Complete redesign and rebuild of customer-facing applications',
            'Modernized company website and API docs',
            'Established scalable design and engineering practices',
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'Figma', 'Design Systems'],
          skills: ['Frontend Development', 'Design Leadership', 'Team Management', 'Product Design'],
        },

        {
          id: 'noyo-head-product',
          title: 'Head of Product',
          level: 'director',
          department: 'Product',
          startDate: new Date('2025-02-01'),
          endDate: undefined, // Current role
          description: 'Leading product strategy and development across all offerings',
          responsibilities: [
            'Define overall product strategy and roadmap',
            'Lead product team across all verticals',
            'Collaborate with executive team on business strategy',
            'Drive AI and automation initiatives',
          ],
          achievements: [
            'Launched BenefitsOS platform',
            'Integrated AI capabilities into product offerings',
            'Expanded role to include PM and Design Engineering functions',
          ],
          technologies: ['AI/ML Platforms', 'Product Strategy Tools', 'Design Engineering'],
          skills: ['Product Strategy', 'AI Product Management', 'Executive Leadership', 'Design Engineering'],
        },
      ],
      keyAccomplishments: [
        'Launched BenefitsOS, a comprehensive benefits platform',
        'Redesigned and rebuilt entire customer-facing product suite',
        'Established modern design and engineering practices',
        'Successfully transitioned from design/engineering to product leadership',
      ],
      wouldRecommend: true,
      notes: 'Significant growth opportunity with expansion from design/engineering to full product leadership',
    },
    {
      id: 'catch-stint',
      company: companies.find((c) => c.id === 'catch')!,
      employmentType: 'full-time',
      startDate: new Date('2016-01-01'),
      endDate: new Date('2023-05-01'),
      location: 'New York, NY',
      isRemote: false,
      roles: [
        {
          id: 'catch-founder-ceo',
          title: 'Founder & CEO',
          level: 'c-level',
          department: 'Executive',
          startDate: new Date('2016-01-01'),
          endDate: new Date('2019-11-01'),
          description: 'Founded and led the company through early stages',
          responsibilities: [
            'Founded the company and defined initial vision',
            'Built founding team and early product',
            'Established business model and go-to-market strategy',
            'Led fundraising efforts',
          ],
          achievements: [
            'Successfully founded and launched the company',
            'Built initial product and customer base',
            'Established company culture and values',
            'Completed Y Combinator W19 program',
          ],
          technologies: ['React', 'Node.js', 'Financial APIs', 'Mobile Development'],
          skills: ['Entrepreneurship', 'Fundraising', 'Team Building', 'Product Vision'],
          metrics: [
            { description: 'Company valuation growth', value: 'Seed to Series A' },
            { description: 'Y Combinator cohort', value: 'W19' },
          ],
        },
        {
          id: 'catch-founder-cto-cpo',
          title: 'Founder & CTO/CPO',
          level: 'c-level',
          department: 'Technology',
          startDate: new Date('2019-11-01'),
          endDate: new Date('2023-05-01'),
          description: 'Led product, engineering, and design as company scaled',
          responsibilities: [
            'Built and led product, engineering, and design teams',
            'Architected technology platform for banking, investing, and insurance',
            'Managed regulatory compliance and technical approvals',
            'Oversaw product strategy and development',
          ],
          achievements: [
            'Built the only B2C company with technical capability and regulatory approval in banking, investing, and health insurance',
            'Created feature set and design direction copied by major competitors (Gusto, Square, Cash App, Wealthfront, Found)',
            'Successfully sold the company',
            'Raised $20M across seed and Series A rounds',
          ],
          technologies: [
            'React',
            'Node.js',
            'Financial APIs',
            'Banking Infrastructure',
            'Insurance APIs',
            'Mobile Apps',
          ],
          skills: [
            'CTO Leadership',
            'Product Strategy',
            'Regulatory Compliance',
            'Team Scaling',
            'Technical Architecture',
          ],
          metrics: [
            { description: 'Total funding raised', value: '$20M' },
            { description: 'Company exit', value: 'Successful acquisition' },
          ],
        },
      ],
      keyAccomplishments: [
        'Founded, built, and successfully sold the company',
        'Raised $20M in venture funding',
        'Built revolutionary fintech platform spanning banking, investing, and insurance',
        'Created design and feature innovations later adopted by major fintech companies',
        'Achieved regulatory approval across multiple financial verticals',
        'Graduated from Y Combinator W19',
      ],
      reasonForLeaving: 'Company acquisition - successful exit',
      wouldRecommend: true,
      notes: 'Transformative experience building and scaling a fintech company from zero to exit',
    },

    {
      id: 'mitre-stint',
      company: companies.find((c) => c.id === 'mitre')!,
      employmentType: 'full-time',
      startDate: new Date('2011-05-01'),
      endDate: new Date('2015-12-01'),
      location: 'Bedford, MA',
      isRemote: false,
      roles: [
        {
          id: 'mitre-senior-design-engineer',
          title: 'Senior Design Engineer',
          level: 'senior',
          department: 'Engineering',
          startDate: new Date('2011-05-01'),
          endDate: new Date('2015-12-01'),
          description: 'Lead designer and frontend developer for comprehensive analysis tool for space and sea (DoD)',
          responsibilities: [],
          achievements: [],
          technologies: [],
          skills: [],
        },
      ],
      keyAccomplishments: [],
      reasonForLeaving: 'Career change to pursue entrepreneurship',
      wouldRecommend: true,
      notes: 'Valuable experience in government contracting and defense technology while pursuing side projects',
    },
  ],
  totalYearsExperience: 0, // Will be calculated automatically
  skills: {
    technical: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Next.js',
      'HTML',
      'CSS',
      'Mobile Development',
      'API Design',
      'Financial APIs',
      'Banking Infrastructure',
      'Payment Processing',
      'AI/ML Platforms',
      'Design Systems',
      'Figma',
      'iOS',
      'Android',
      'Cloud Platforms',
      'DevOps',
    ],
    soft: [
      'Entrepreneurship',
      'Fundraising',
      'Team Leadership',
      'Product Strategy',
      'Design Leadership',
      'Executive Leadership',
      'Strategic Planning',
      'Client Management',
      'Stakeholder Management',
      'Public Speaking',
      'Mentoring',
      'Cross-functional Collaboration',
      'Problem Solving',
    ],
    certifications: ['Y Combinator W19', 'Kleiner Perkins Design Fellow 2014', 'Security Clearance (Former)'],
  },
  summary:
    'Entrepreneur and product leader with 13+ years of experience spanning startups to enterprise. Founded and successfully exited fintech company Catch after raising $20M. Currently Head of Product at Noyo, leading AI-powered benefits infrastructure. Expert in product strategy, design, and engineering with deep expertise in fintech, healthcare, and defense technology.',
};

// Auto-calculate total years of experience
myWorkExperience.totalYearsExperience =
  myWorkExperience.stints.reduce((total, stint) => {
    const start = stint.startDate.getTime();
    const end = stint.endDate ? stint.endDate.getTime() : Date.now();
    return total + (end - start);
  }, 0) /
  (1000 * 60 * 60 * 24 * 365);

myWorkExperience.totalYearsExperience = Math.round(myWorkExperience.totalYearsExperience * 10) / 10;
