import Link from 'next/link';
import { WorkExperience, WorkExperienceRole } from '@/data/work';
import { cn } from './ui/utils';

export const Role = ({ title, subtitle, startDate, endDate }: WorkExperienceRole) => {
  const willShowEndDate = endDate && endDate !== startDate;
  const isCurrentRole = !endDate;
  return (
    <div key={title} className="flex justify-between gap-1 py-1 first:pt-0 last:pb-0">
      <div className="flex gap-2">
        <div className="font-medium">{title}</div>
        {subtitle && <div className="text-muted-foreground hidden sm:block">{subtitle}</div>}
      </div>
      <div className="text-muted-foreground flex w-24 gap-0.5 tabular-nums">
        <div>{startDate}</div>
        {(isCurrentRole || willShowEndDate) && <div>–</div>}
        {willShowEndDate && <div>{endDate?.slice(2, 4)}</div>}
      </div>
    </div>
  );
};

export const WorkRow = ({ company, logo, slug, roles }: WorkExperience) => {
  const Element = slug ? Link : 'div';
  return (
    <Element
      href={`/work/${slug}`}
      className={cn(
        'flex flex-col items-start gap-3 border-t-[0.5px] py-3 pb-6 text-[15px] md:flex-row md:pb-3',
        slug ? 'hover:bg-accent cursor-pointer' : 'cursor-default transition-all',
      )}
    >
      <div className="flex w-30 items-center gap-3">
        <img src={logo} alt={company} className="h-4 w-4" />
        <div className="font-medium">{company}</div>
      </div>
      <div className="flex grow flex-col self-stretch">
        {roles.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </Element>
  );
};
