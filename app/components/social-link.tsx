import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from './ui/utils';

export const SocialLink = ({
  href,
  icon,
  text,
  label,
}: {
  href: string;
  icon: ReactNode;
  text?: string | undefined;
  label?: string | undefined;
}) => {
  return (
    <div className={cn(text ? 'first:-ml-1.5 last:-mr-1.5' : '')}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            target="_blank"
            className={cn(
              'hover:bg-accent flex items-center justify-center rounded-sm p-1.5 opacity-75 hover:opacity-100',
            )}
            href={href}
          >
            {icon}
            {label && (
              <span className="ml-1.5 hidden text-[13px] leading-none font-medium tracking-wide sm:block md:inline">
                {label}
              </span>
            )}
          </Link>
        </TooltipTrigger>
        {text && <TooltipContent>{text}</TooltipContent>}
      </Tooltip>
    </div>
  );
};
