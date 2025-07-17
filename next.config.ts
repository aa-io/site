import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  devIndicators: {
    position: 'top-right',
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
