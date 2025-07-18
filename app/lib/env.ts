// Type-safe environment variable configuration
export const env = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
} as const;

// Validate required environment variables
export function validateEnv() {
  if (!env.openai.apiKey) {
    throw new Error('OPENAI_API_KEY is required in environment variables');
  }
} 