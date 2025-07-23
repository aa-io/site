import Link from 'next/link';
import { WorkExperience, WorkExperienceRole } from '@/data/work';
import { IconArrowRight } from '@tabler/icons-react';
import { Hdr } from './hdr';
import { cn } from './ui/utils';

export const Role = ({ title, subtitle, startDate, endDate, hasLink }: WorkExperienceRole & { hasLink: boolean }) => {
  const willShowEndDate = endDate && endDate !== startDate;
  const isCurrentRole = !endDate;
  return (
    <div key={title} className="flex justify-between gap-1 py-1 first:pt-0 last:pb-0">
      <div className="flex gap-2">
        <div className={cn('text-balance md:font-medium', hasLink && 'uline')}>{title}</div>
        {subtitle && <div className="text-muted-foreground hidden opacity-65 sm:block">{subtitle}</div>}
      </div>
      <div className="text-muted-foreground flex min-w-24 gap-0.5 tabular-nums">
        <div>{startDate}</div>
        {(isCurrentRole || willShowEndDate) && <div>–</div>}
        {willShowEndDate && <div>{endDate?.slice(2, 4)}</div>}
      </div>
    </div>
  );
};

export const WorkRow = ({ company, logo, slug, roles, invertDark }: WorkExperience) => {
  const Element = slug ? Link : 'div';
  return (
    <Element
      href={`/work/${slug}`}
      className={cn(
        'group/workitem relative flex flex-col items-start gap-3 py-4 pb-6 leading-tight shadow-[inset_0_0.5px_0_var(--color-border)] peer-hover:shadow-none md:flex-row md:pb-4',
        slug ?
          'peer hover:bg-accentTransparent/75 active:bg-accentTransparent dark:hover:bg-accentTransparent/75 dark:active:bg-accentTransparent/50 cursor-pointer bg-clip-padding hover:-mx-4 hover:rounded-md hover:border-transparent hover:px-4 hover:shadow-[inset_0_0.5px_1.5px_0px_#FFFFFF0A]'
        : 'cursor-default',
      )}
    >
      <div className="flex w-30 items-center gap-3">
        <img src={logo} alt={company} className={cn('iconSize', invertDark && 'dark:invert')} />
        <div className="font-medium">{company}</div>
      </div>
      <div className="flex grow flex-col self-stretch">
        {roles.map((role) => (
          <Role key={role.title} hasLink={!!slug} {...role} />
        ))}
      </div>
      <div className="iconSize text-muted-foreground group-hover/workitem:text-foreground -ml-1 hidden items-center justify-center md:flex">
        {slug && <IconArrowRight className="h-3.5 w-3.5" />}
      </div>
      {slug && (
        <div className="opacity-0 group-hover/workitem:opacity-100">
          <Hdr className="rounded-md" />
        </div>
      )}
    </Element>
  );
};
