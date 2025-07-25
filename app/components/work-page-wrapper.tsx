'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { WorkExperienceRole } from '@/data/work';
import AnimateIn from './animate-in';
import { Role } from './work-row';

interface WorkPageWrapperProps {
  title?: string;
  children: React.ReactNode;
  description?: string;
  parent?: string;
  roles?: Array<WorkExperienceRole>;
}

/** @todo extract toolbar, share with chat page */
export function WorkPageWrapper({ title, children, description, parent, roles }: WorkPageWrapperProps) {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !description) {
      setShowBreadcrumb(true); // Show breadcrumb if no title to track
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Show breadcrumb when title is NOT intersecting (scrolled out of view)
        setShowBreadcrumb(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px', // Trigger when title is 100px above viewport
      },
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, [description]);

  return (
    <>
      <article className="z-0 mt-10 flex flex-col items-center px-[var(--padding-pageMargin)] py-[calc(var(--padding-pageMargin)*2)] text-[16px]">
        {description && (
          <AnimateIn idx={0} className="mx-auto flex w-full max-w-xl flex-col items-center pt-[5vh] pb-[5vh]">
            <h1 ref={titleRef} className="text-center leading-tight font-medium tracking-tight text-balance">
              {description}
            </h1>
            {roles && roles.length > 0 && (
              <div className="-gap-1 text-muted-foreground flex w-full flex-col items-stretch pt-9 text-sm">
                {roles.map((role, index) => (
                  <div
                    key={role.title}
                    className="border-border flex w-full flex-col border-t-[0.5px] py-3 first:border-t-0"
                  >
                    <Role {...role} hasLink={false} />
                  </div>
                ))}
              </div>
            )}
          </AnimateIn>
        )}
        <AnimateIn idx={1} className="mx-auto w-full max-w-2xl justify-center">
          {children}
        </AnimateIn>
      </article>
    </>
  );
}
