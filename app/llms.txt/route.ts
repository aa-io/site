import { NextResponse } from 'next/server';
import { aboutData } from '@/lib/about-data';
import { myWorkExperience } from '@/lib/work-experience-data';

export async function GET() {
  // Generate LLMs.txt content with information about Andrew
  const content = `# ${aboutData.name}

## About
${aboutData.bio.intro}

${aboutData.bio.current}

## Work Experience
${myWorkExperience.stints
  .flatMap((stint) =>
    stint.roles.map(
      (role) => `
### ${stint.company.name} - ${role.title}
${role.startDate.toLocaleDateString()} - ${role.endDate ? role.endDate.toLocaleDateString() : 'Present'}
${role.description}

Key Achievements:
${role.achievements.map((achievement) => `- ${achievement}`).join('\n')}
`,
    ),
  )
  .join('\n')}

## Skills
- Frontend: ${aboutData.skills.frontend.join(', ')}
- Backend: ${aboutData.skills.backend.join(', ')}
- Design: ${aboutData.skills.design.join(', ')}
- Product: ${aboutData.skills.product.join(', ')}

## Contact
- Email: ${aboutData.contact.email}
- Location: ${aboutData.contact.location}
- GitHub: ${aboutData.contact.social.github}
- LinkedIn: ${aboutData.contact.social.linkedin}

## Projects

### ${aboutData.projects.catch.name} (${aboutData.projects.catch.tagline})
${aboutData.projects.catch.description}

Achievements:
${aboutData.projects.catch.achievements.map((a) => `- ${a}`).join('\n')}

### ${aboutData.projects.noyo.name}
${aboutData.projects.noyo.description}

Achievements:
${aboutData.projects.noyo.achievements.map((a) => `- ${a}`).join('\n')}

## Writing
I write about ${aboutData.writingTopics.join(', ')}.

---

Generated from ${aboutData.metadata.siteUrl}
Last updated: ${new Date().toISOString()}
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
