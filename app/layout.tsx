import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import { AppSidebar } from '@/components/app-sidebar';
import { Chatbot } from '@/components/chatbot';
import { CommandPalette } from '@/components/command-palette';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

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
  description: 'founder, design engineer, product leader',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Andrew Jambrosino</title>
        <meta name="theme-color" content="var(--sidebar)" />
      </Head>
      <body className={`${geistSans.className} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider
            style={
              {
                '--sidebar-width': 'calc(var(--spacing) * 72)',
                '--header-height': 'calc(var(--spacing) * 12)',
              } as React.CSSProperties
            }
          >
            <AppSidebar />

            <main className="flex min-h-screen justify-center">
              <div className="w-full">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
        <Toaster />
        <Chatbot />
        <CommandPalette />
      </body>
    </html>
  );
}
