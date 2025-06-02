type View =
  | string
  | {
      title: string;
      text?: string;
      link?: string;
    };

export const views: Array<View> = [
  {
    title: 'Maximize ability to change',
  },
  {
    title: 'A writing culture must be paired with brevity as a value',
  },
  'Use the right tool',
  'Use the right process',
  'Speed is a feature',
  'Keep a changelog',
  'Use good tools',
  { title: 'Browsers are terrible window managers', text: 'Dock, PWA' },
  { title: 'Dark mode is not an app-level feature' },
  { title: 'The U.S. is too car-dependent' },
];
