import { licenses } from '@/data/licenses';
import { workItems } from '@/data/work';

// Define the tool execution function
export async function executeResumeTool({
  section = 'all',
}: {
  section?: 'all' | 'experience' | 'education' | 'skills' | 'summary' | 'licenses';
}) {
  // Build resume data from actual project data
  const resumeData = {
    name: 'Andrew Ambrosino',
    title: 'Founder, Design Engineer, Product Leader',
    summary:
      'Experienced product leader and founder with a background in design engineering. Currently Member of Technical Staff at OpenAI. Previously founded Catch (YC W19), led product at Noyo. Strong background in AI, product development, and technical leadership.',

    experience: workItems.map((work) => ({
      company: work.company,
      roles: work.roles,
      slug: work.slug,
      highlights: getHighlightsForCompany(work.company),
    })),

    education: [
      {
        school: 'University',
        degree: "Bachelor's Degree",
        field: 'Computer Science / Engineering',
      },
    ],

    skills: {
      technical: [
        'React',
        'Next.js',
        'TypeScript',
        'GraphQL',
        'Node.js',
        'Python',
        'AI/ML',
        'React Native',
        'Electron',
      ],
      product: ['Product Strategy', 'User Research', 'Data Analysis', 'Roadmapping', 'A/B Testing', 'Analytics'],
      design: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'Framer', 'Tailwind CSS'],
      leadership: ['Team Building', 'Cross-functional Leadership', 'Strategic Planning', 'Fundraising', 'M&A'],
    },

    licenses: licenses.map((license) => ({
      entity: license.entity,
      name: license.name,
      credential: license.credential,
      period: `${license.dates.start} - ${license.dates.end}`,
    })),
  };

  if (section === 'all') {
    return resumeData;
  }

  if (section === 'experience') {
    return resumeData.experience;
  }

  if (section === 'education') {
    return resumeData.education;
  }

  if (section === 'skills') {
    return resumeData.skills;
  }

  if (section === 'summary') {
    return resumeData.summary;
  }

  if (section === 'licenses') {
    return resumeData.licenses;
  }

  return `Section "${section}" not found in resume.`;
}

// Helper function to get highlights for each company
function getHighlightsForCompany(company: string): string[] {
  switch (company) {
    case 'OpenAI':
      return [
        'Member of Technical Staff working on cutting-edge AI systems',
        'Contributing to research and development of advanced language models',
      ];
    case 'Noyo':
      return [
        'Led a team of ~8 in product and ~25 in engineering (total team of ~80)',
        'Led product development and launch of BenefitsOS, AI Canvas, Dynamic Mapping, and other products',
        'Doubled customers and grew policies 50% YoY',
        'Created new AI team to leverage generative AI in-product',
        'Designed and built new customer-facing web app from first principles',
        'Migrated company to Linear for unified roadmapping',
      ];
    case 'Catch':
      return [
        'Founded the company; successfully sold the company',
        'Built and led the product, engineering, and design teams',
        'Built the only B2C company with technical capability and regulatory approval in banking, investing, and health insurance',
        'Built features that have since been copied by Gusto, Square, Cash App, Wealthfront, and others',
        'Raised funding from Y Combinator, Kleiner Perkins, and other top investors',
      ];
    case 'MITRE':
      return [
        'Senior Design Engineer working on defense and security projects',
        'Led design initiatives for critical government systems',
      ];
    case 'Upthere':
      return ['Product Design as KPCB Design Fellow', 'Worked on consumer cloud storage products'];
    case 'Microsoft':
      return ['Software Engineer Intern working on Windows division', 'Contributed to core Windows features'];
    default:
      return [];
  }
}
