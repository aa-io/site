import { ToolSet, tool } from 'ai';
import { z } from 'zod';
import { executeResumeTool } from './resume';

// Export the wrapped tools
export const tools: ToolSet = {
  getResume: tool({
    name: 'Read Resume',
    description: "Read Andrew Ambrosino's resume information including work experience, education, and skills",
    inputSchema: z.object({
      section: z
        .enum(['all', 'experience', 'education', 'skills', 'summary', 'licenses'])
        .optional()
        .default('all')
        .describe('Specific section of the resume to retrieve. Defaults to all.'),
    }),
    execute: async ({ section }) => {
      return await executeResumeTool({
        section: section as 'all' | 'experience' | 'education' | 'skills' | 'summary' | 'licenses',
      });
    },
  }),
};
