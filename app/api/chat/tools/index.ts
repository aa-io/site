import { ToolSet, tool } from 'ai';
import { z } from 'zod';
import { openai } from '@ai-sdk/openai';
import { SocialLinkKey, SocialLinkType, primaryLinks, socialLinks } from '../../../../data/links';

const allLinks: SocialLinkType[] = [...primaryLinks, ...socialLinks] as const;
const allLinkKeys: SocialLinkKey[] = allLinks.map((link) => link.key);

// Export the wrapped tools
export const tools: ToolSet = {
  web_search_preview: openai.tools.webSearchPreview({ searchContextSize: 'medium' }),
  // @todo remove this and just define custom MDX component
  provideLink: tool({
    description: "Provide a link to Andrew Ambrosino's resume",
    inputSchema: z.object({
      to: z.enum(allLinkKeys as [string, ...string[]]),
    }),
    outputSchema: z.object({
      title: z.string(),
      url: z.string(),
      type: z.string(),
    }),
    execute: async ({ to }) => {
      switch (to) {
        case 'Chat':
          return { title: 'AI Chat', url: 'https://ambrosino.io/chat', type: 'html' };
        case 'About':
          return { title: 'Site info', url: 'https://ambrosino.io/site', type: 'html' };
        case 'Resume':
          return { title: 'Resume', url: 'https://ambrosino.io/resume.pdf', type: 'pdf' };
        case 'LinkedIn':
          return { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ajambrosino/', type: 'html' };
        case 'GitHub':
          return { title: 'GitHub', url: 'https://github.com/aa-io', type: 'html' };
        case 'X':
          return { title: 'Twitter', url: 'https://x.com/ajambrosino', type: 'html' };
        case 'Dribbble':
          return { title: 'Dribbble', url: 'https://dribbble.com/ajambrosino', type: 'html' };
        case 'GPT':
          return { title: 'Custom GPT', url: 'https://gpt.ambrosino.io', type: 'html' };
      }
    },
  }),
};
