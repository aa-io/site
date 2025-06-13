import { SITE_CONFIG } from '@/const/site-config';

export const aboutData = {
  name: SITE_CONFIG.name,
  title: SITE_CONFIG.title,

  // Bio paragraphs
  bio: {
    intro: `I'm Andrew Ambrosino—a builder who refuses to choose between craft and scale. I've spent the last decade turning thorny problems into products that feel inevitable: co‑founding Catch (YC W19, acquired), leading product at Noyo, and shaping design systems that power billions of dollars in employee‑benefit transactions. My sweet spot is the intersection of API rigor, elegant front‑end architecture, and the kind of user experience that disappears into the background while real business happens.`,

    current: `Today I head Design & Frontend Architecture at Noyo, where we're rewriting how health‑insurance data moves across the industry. I work shoulder‑to‑shoulder with engineers and carriers to make sure the pipes are tight, the pixels are right, and the business model actually sings. I also write (sometimes loudly) about product strategy, AI agents, and why TypeScript is the lingua franca of ambitious teams.`,

    personal: `I split my time between Cambridge and a small town north of Boston, where two imaginative daughters keep me honest about what "user‑friendly" really means. If you're building something complex that ought to feel simple—or you just want to debate the proper ratio of mezcal to lime—drop me a line.`,
  },

  // Contact information
  contact: {
    email: SITE_CONFIG.contact.email,
    location: SITE_CONFIG.contact.location,
    social: {
      github: SITE_CONFIG.social.github,
      linkedin: SITE_CONFIG.social.linkedin,
      twitter: SITE_CONFIG.social.twitter,
    },
  },

  // Skills
  skills: {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Design Systems'],
    backend: ['Node.js', 'Python', 'API Design', 'Financial APIs', 'Banking Infrastructure'],
    design: ['Figma', 'Design Systems', 'UI/UX', 'Product Design'],
    product: ['Strategy', 'User Research', 'Analytics', 'AI Product Management'],
  },

  // Projects
  projects: {
    catch: {
      name: 'Catch',
      tagline: 'YC W19, Acquired',
      description:
        'Co-founded a fintech startup focused on financial tools for freelancers and gig workers. Led product and design, raised funding from Y Combinator and top-tier investors. Successfully acquired.',
      achievements: [
        'Raised $20M in venture funding',
        'Built the only B2C company with technical capability and regulatory approval in banking, investing, and health insurance',
        'Created feature set and design direction copied by major competitors (Gusto, Square, Cash App, Wealthfront, Found)',
      ],
    },
    noyo: {
      name: 'Noyo',
      tagline: 'Benefits Infrastructure Platform',
      description:
        'Leading Design & Frontend Architecture, building the infrastructure for how health insurance data moves across the industry. Creating design systems and frontend architecture that powers billions in transactions.',
      achievements: [
        'Launched BenefitsOS platform',
        'Complete redesign and rebuild of customer-facing applications',
        'Modernized company website and API documentation',
        'Integrated AI capabilities into product offerings',
      ],
    },
  },

  // Writing topics
  writingTopics: [
    'Product strategy',
    'AI agents',
    'TypeScript as the lingua franca of ambitious teams',
    'Design systems at scale',
    'Frontend architecture patterns',
  ],

  // For chatbot responses
  expertise: {
    technical: {
      react:
        "Andrew has extensive experience with React and modern frontend technologies. He's worked with React for several years, building complex applications and design systems. His expertise includes React hooks, state management, and performance optimization.",
      design:
        'Andrew follows user-centered design principles, focusing on simplicity, accessibility, and delightful interactions. He believes in the importance of thoughtful typography, consistent spacing, and subtle animations to create polished experiences.',
      architecture:
        "Andrew specializes in building scalable frontend architectures that support rapid product development while maintaining code quality. He's passionate about design systems and component libraries that empower teams.",
    },
    career: {
      entrepreneurship:
        'Andrew co-founded Catch (YC W19), a fintech startup that was successfully acquired. He led the company from inception through exit, raising $20M and building innovative financial products.',
      leadership:
        'Currently serving as Head of Product at Noyo, Andrew has transitioned from engineering and design leadership to full product ownership. He leads cross-functional teams and drives strategic initiatives.',
    },
  },

  // Website metadata
  metadata: {
    siteUrl: 'https://andrewambrosino.com',
    lastUpdated: new Date().toISOString(),
  },
};
