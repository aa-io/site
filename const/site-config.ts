export const SITE_CONFIG = {
  // Site metadata
  name: 'Andrew Ambrosino',
  title: 'founder, design engineer, product leader',
  description: 'Personal website of Andrew Ambrosino - entrepreneur, design engineer, and product leader',
  url: 'https://andrewambrosino.com',

  // Contact information
  contact: {
    email: 'a@ambrosino.io',
    location: 'Cambridge, MA / North of Boston',
  },

  // Social links
  social: {
    linkedin: 'https://www.linkedin.com/in/ajambrosino/',
    github: 'https://github.com/aa-io',
    twitter: 'https://x.com/ajambrosino',
  },

  // Navigation items
  nav: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
    ],
  },

  // Resume
  resume: {
    filename: 'Andrew_Ambrosino_Resume.pdf',
    path: '/Andrew_Ambrosino_Resume.pdf',
  },

  // SEO
  seo: {
    keywords: [
      'Andrew Ambrosino',
      'entrepreneur',
      'design engineer',
      'product leader',
      'Catch',
      'Noyo',
      'Y Combinator',
      'fintech',
      'benefits infrastructure',
    ],
  },
} as const;
