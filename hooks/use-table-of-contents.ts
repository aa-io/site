import { useCallback, useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function useTableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Generate table of contents from headings
  const generateToc = useCallback(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      let id = heading.id;

      // Generate ID if it doesn't exist
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');

        // Ensure uniqueness
        let uniqueId = id;
        let counter = 1;
        while (document.getElementById(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }

        heading.id = uniqueId;
        id = uniqueId;
      }

      tocItems.push({ id, text, level });
    });

    setToc(tocItems);
  }, []);

  // Track scroll position and update active heading
  const updateActiveId = useCallback(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    let currentActiveId = '';

    // Find the heading that's currently most visible
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      const elementTop = rect.top + scrollY;

      // Consider a heading active if it's within the top 30% of the viewport
      if (elementTop <= scrollY + windowHeight * 0.3) {
        currentActiveId = heading.id;
      }
    });

    setActiveId(currentActiveId);
  }, []);

  // Smooth scroll to heading
  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    // Generate TOC on mount and when content changes
    const observer = new MutationObserver(() => {
      generateToc();
    });

    // Initial generation
    generateToc();

    // Watch for content changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [generateToc]);

  useEffect(() => {
    // Update active heading on scroll
    const handleScroll = () => {
      updateActiveId();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveId(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveId]);

  return {
    toc,
    activeId,
    scrollToHeading,
  };
}
