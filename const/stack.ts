type StackItem = {
  name: string;
  also?: string | Array<string>;
  not?: string | Array<string>;
  context?: string;
};

export const stack: Array<{ title: string; items: Array<StackItem> }> = [
  // Design
  {
    title: 'Design',
    items: [
      { name: 'Figma' },
      { name: 'Play' },
      { name: 'Framer', also: 'Webflow' },
      { name: 'Campsite' },
      { name: 'Spline', also: 'Jitter, Rive' },
      { name: 'Frame.io' },
      { name: 'Illustrator' },
      { name: 'Figmayo', also: 'ZeroHeight' },
    ],
  },
  {
    title: 'Product',
    items: [
      { name: 'React' },
      { name: 'React Native', also: 'RNW, Expo' },
      { name: 'Next.js', also: 'App Router (13/14, RSC), NextAuth' },
      { name: 'GraphQL', also: 'Apollo' },
      { name: 'Tailwind' },
      { name: 'Typescript' },
      { name: 'Python' },
      { name: 'SwiftUI', also: 'Swift, Obj-C' },
      { name: 'Radix', also: 'shadcn/ui' },
      { name: 'OpenAPI' },
      { name: 'Node/Bun' },
      { name: 'Electron' },
      { name: 'Gatsby' },
      { name: 'D3' },
      { name: 'CI/CD', also: 'Bitrise, GH Actions, Circle, Vercel, etc' },
      { name: 'Infra', also: 'AWS, GCP, Terraform, Vercel' },
      { name: 'Compliance', also: 'Security, NIST 800-53' },
    ],
  },
  {
    title: 'Dev',
    items: [
      { name: 'Linear', also: 'Jira' },
      { name: 'Analytics', also: 'Segment, Mixpanel, Heap, Posthog, GA' },
    ],
  },
  {
    title: 'Fin',
    items: [
      { name: 'BaaS', also: 'Unit, ACH, KYC' },
      { name: 'Plaid' },
      { name: 'RIA, investing' },
      { name: 'Insurance brokerage', also: 'EDE' },
      { name: 'IRA EFTPS' },
      { name: 'Card Issuance' },
      { name: 'HSA, ICHRA' },
    ],
  },

  // Development

  // Product

  // Fintech

  // Tools
  // { name: 'Vercel' },
  // { name: 'Notion' },
  // { name: 'Safari', not: 'Chrome' },
  // { name: 'VSCode', also: 'Cursor' },
  // { name: 'Cron' },
  // { name: 'Fig' },
  // { name: 'Github' },
  // { name: 'Keynote', not: 'Google Sheets', also: ['Tome', 'iA Presenter'] },
  // { name: 'Screen Studio' },
  // { name: 'Readme' },

  // Likes
  // { name: 'Things' },
  // { name: 'Superhuman' },
  // { name: 'Flighty' },
  // { name: 'Cash App' },
  // { name: 'Copilot' },
];
