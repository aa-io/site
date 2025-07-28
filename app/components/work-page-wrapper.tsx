'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';
import type { WorkExperienceRole } from '@/data/work';
import { IconChevronLeft } from '@tabler/icons-react';
import AnimateIn from './animate-in';
import { LinkButton } from './social-link';
import { cn } from './ui/utils';
import { Role } from './work-row';

interface WorkPageWrapperProps {
  title?: string;
  children: React.ReactNode;
  description?: string;
  parent?: string;
  roles?: Array<WorkExperienceRole>;
  /**
   * Disable child entrance animation. Useful when the
   * page contains fixed-position elements like the chat
   * input that should remain attached to the viewport.
   */
  animateChildren?: boolean;
}

/** @todo extract toolbar, share with chat page */
export function WorkPageWrapper({
  title,
  children,
  description,
  parent,
  roles,
  animateChildren = true,
}: WorkPageWrapperProps) {
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
      <div className="p-pageMargin align-stretch from-background/100 via-background/75 group/nav top-pageMargin sticky top-0 z-50 mx-auto grid translate-z-0 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b transition-colors duration-1000 hover:duration-250 md:p-[max(var(--padding-pageMargin),5vh)]">
        <div className="sm:-ml-1.5">
          <LinkButton href="/" className="rounded-full" icon={<IconChevronLeft className="iconSize" />} label="Home" />
        </div>
        <AnimateIn idx={0} className={`col-span-1 flex justify-center transition-opacity duration-300`}>
          <Breadcrumb>
            <BreadcrumbList>
              {parent && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">{parent}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}

              <BreadcrumbItem
                className={cn(
                  showBreadcrumb ? 'opacity-100' : 'pointer-events-none opacity-10',
                  'transition-all duration-300',
                )}
              >
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </AnimateIn>
        <div className="col-span-1"> </div>
      </div>

      <article className="z-0 flex flex-col items-center px-[var(--padding-pageMargin)] pb-[calc(var(--padding-pageMargin)*2)] text-[16px]">
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
        {animateChildren ? (
          <AnimateIn idx={1} className="mx-auto w-full max-w-2xl justify-center">
            {children}
          </AnimateIn>
        ) : (
          <div className="mx-auto w-full max-w-2xl justify-center">{children}</div>
        )}
      </article>
    </>
  );
}
