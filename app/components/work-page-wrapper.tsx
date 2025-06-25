'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';
import { IconChevronLeft } from '@tabler/icons-react';
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
      <div className="p-pageMargin align-stretch from-background/100 via-background/90 hover:to-background/90 hover:via-background/100 group/nav top-pageMargin sticky top-0 z-50 mx-auto grid max-w-5xl translate-z-0 grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b transition-colors duration-1000 hover:duration-250 md:pt-[max(var(--padding-pageMargin),5vh)]">
        <div className=" ">
          <LinkButton
            href="/"
            className="rounded-full backdrop-blur-sm"
            icon={<IconChevronLeft size={20} />}
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
      </div>

      <article className="z-0 flex flex-col items-center p-[var(--padding-pageMargin)] text-[16px]">
        <div className="mx-auto flex max-w-4xl flex-col items-center pt-[5vh] pb-[10vh]">
          <h1 className="text-center text-5xl leading-tight font-medium tracking-tight text-balance">{description}</h1>
        </div>
        <div className="mx-auto max-w-2xl justify-center">{children}</div>
      </article>
    </>
  );
}
