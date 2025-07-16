'use client';

import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';
import { IconChevronLeft } from '@tabler/icons-react';
import AnimateIn from './animate-in';
import { LinkButton } from './social-link';

interface WorkPageWrapperProps {
  title?: string;
  children: React.ReactNode;
  description?: string;
  parent?: string;
}

export function WorkPageWrapper({ title, children, description, parent }: WorkPageWrapperProps) {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <div className="p-pageMargin align-stretch from-background/100 via-background/75 group/nav top-pageMargin sticky top-0 z-50 mx-auto grid translate-z-0 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b transition-colors duration-1000 hover:duration-250 md:p-[max(var(--padding-pageMargin),5vh)]">
        <div className="sm:-ml-1.5">
          <LinkButton href="/" className="rounded-full" icon={<IconChevronLeft className="iconSize" />} label="Home" />
        </div>
        <AnimateIn idx={0} className="col-span-1 flex justify-center">
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
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </AnimateIn>
        <div className="col-span-1"> </div>
      </div>

      <article className="z-0 flex flex-col items-center px-[var(--padding-pageMargin)] pb-[calc(var(--padding-pageMargin)*2)] text-[16px]">
        {description && (
          <AnimateIn idx={0} className="mx-auto flex max-w-4xl flex-col items-center pt-[5vh] pb-[5vh]">
            <h1 className="text-center leading-tight font-medium tracking-tight text-balance">{description}</h1>
          </AnimateIn>
        )}
        <AnimateIn idx={1} className="mx-auto w-full max-w-2xl justify-center">
          {children}
        </AnimateIn>
      </article>
    </>
  );
}
