import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Newsreader } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import { ThemeProvider } from '@/app/components/theme-provider';
import { Toaster } from '@/app/components/ui/sonner';
import { LayoutInner } from './layout-inner';

const _sans = localFont({
  src: './assets/font/sohne.woff2',
});

const _serif = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Andrew Ambrosino',
    template: '%s | Andrew Ambrosino',
  },
  description: 'Founder, Design Engineer, Product Leader',
  authors: [{ name: 'Andrew Ambrosino', url: 'https://ambrosino.io' }],
  creator: 'Andrew Ambrosino',
  generator: 'Next.js',
  metadataBase: new URL('https://ambrosino.io'),
  openGraph: {
    siteName: 'Andrew Ambrosino',
    title: 'Andrew Ambrosino',
    description: 'Founder, Design Engineer, Product Leader',
    url: 'https://ambrosino.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Ambrosino',
    description: 'Founder, Design Engineer, Product Leader',
    creator: '@ajambrosino',
  },
};

export const viewport: Viewport = {
  height: '100vh',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden ${_sans.className} ${_serif.variable} ${geistMono.variable} bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LayoutInner>
            <main>{children}</main>
          </LayoutInner>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
