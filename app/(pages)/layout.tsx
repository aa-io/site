'use client';

import '../globals.css';

import { usePathname } from 'next/navigation';
import { EnhancedToolbar } from '@/components/enhanced-toolbar';
import { useScrollHeaderState } from '@/components/integrated-scroll-header';
import { PageAnimationWrapper } from '@/components/page-animation-wrapper';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { isScrolled } = useScrollHeaderState();

  // Determine page title based on pathname (blank for non-scrolled)
  const getPageTitle = () => {
    return '';
  };

  // Determine scroll title based on pathname (use the big title from the page)
  const getScrollTitle = () => {
    if (pathname === '/about') return 'About Andrew';
    if (pathname === '/projects') return 'My Projects';
    if (pathname === '/projects/catch') return 'Catch';
    if (pathname === '/projects/noyo') return 'Noyo';
    if (pathname.startsWith('/projects/')) {
      // For other project pages, extract the project name and capitalize it
      const projectId = pathname.split('/projects/')[1];
      return projectId.charAt(0).toUpperCase() + projectId.slice(1);
    }
    return undefined;
  };

  return (
    <>
      <EnhancedToolbar title={getPageTitle()} scrollTitle={getScrollTitle()} isScrolled={isScrolled} />
      <PageAnimationWrapper>
        <div className="container mx-auto max-w-4xl px-6 py-8">{children}</div>
      </PageAnimationWrapper>
    </>
  );
}
