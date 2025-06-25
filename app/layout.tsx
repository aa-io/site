import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
import { ThemeProvider } from '@/app/components/theme-provider';
import { Toaster } from '@/app/components/ui/sonner';

const _sans = localFont({
  src: './assets/font/sohne.woff2',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Andrew Ambrosino',
  description: 'Founder, Design Engineer, Product Leader',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
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
      <Head>
        <title>Andrew Ambrosino</title>
      </Head>
      <body className={`${_sans.className} ${geistMono.variable} bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex min-h-screen justify-center">
            <div className="w-full">{children}</div>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
