import '@testing-library/jest-dom';

import React from 'react';
import { beforeAll, vi } from 'vitest';

// Mock environment variables for testing
process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'test-api-key';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn(),
})) as any;

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
})) as any;

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => {
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Mock Motion
vi.mock('motion/react-client', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      return React.createElement('div', props, children);
    },
  },
}));

// Mock Tooltip components
vi.mock('@/app/components/ui/tooltip', () => ({
  Tooltip: ({ children }: any) => React.createElement('div', { 'data-testid': 'tooltip' }, children),
  TooltipTrigger: ({ children, asChild, ...props }: any) => {
    if (asChild) {
      return React.cloneElement(children, props);
    }
    return React.createElement('div', { 'data-testid': 'tooltip-trigger', ...props }, children);
  },
  TooltipContent: ({ children }: any) => React.createElement('div', { 'data-testid': 'tooltip-content' }, children),
}));

// Mock Hdr component
vi.mock('@/app/components/hdr', () => ({
  Hdr: ({ children }: any) => React.createElement('div', { 'data-testid': 'hdr' }, children),
}));

beforeAll(() => {
  // Add any global test setup here
});
