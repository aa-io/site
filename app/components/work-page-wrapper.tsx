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
  title: string;
  children: React.ReactNode;
  description: string;
}

export function WorkPageWrapper({ title, children, description }: WorkPageWrapperProps) {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <AnimateIn
        idx={0}
        className="p-pageMargin align-stretch from-background/100 via-background/75 group/nav top-pageMargin sticky top-0 z-50 mx-auto grid translate-z-0 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b transition-colors duration-1000 hover:duration-250 md:p-[max(var(--padding-pageMargin),5vh)]"
      >
        <div>
          <LinkButton
            href="/"
            className="rounded-full backdrop-blur-sm"
            icon={<IconChevronLeft className="iconSize" />}
            label="Back"
          />
        </div>
        <div id="work-breadcrumb-portal" className="col-span-1 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Work</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="col-span-1"> </div>
      </AnimateIn>

      <article className="z-0 flex flex-col items-center px-[var(--padding-pageMargin)] pb-[calc(var(--padding-pageMargin)*2)] text-[16px]">
        <AnimateIn idx={1} className="mx-auto flex max-w-4xl flex-col items-center pt-[5vh] pb-[5vh]">
          <h1 className="text-center leading-tight font-medium tracking-tight text-balance">{description}</h1>
        </AnimateIn>
        <AnimateIn idx={2} className="mx-auto w-full max-w-2xl justify-center">
          {children}
        </AnimateIn>
      </article>
    </>
  );
}
