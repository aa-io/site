import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from './ui/utils';

const _cns = {
  button:
    'hover:bg-accent gap-1.5 flex items-center justify-center rounded-sm leading-none  p-1.5 opacity-75 hover:opacity-100',
  text: ' hidden text-sm  font-medium tracking-wide sm:block md:inline',
};

export const SocialLink = ({
  href,
  icon,
  text,
  label,
  className,
}: {
  href: string;
  icon: ReactNode;
  text?: string | undefined;
  label?: string | undefined;
  className?: string;
}) => {
  return (
    <div className={cn(text ? 'first:-ml-1.5 last:-mr-1.5' : '', className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link target="_blank" className={cn(_cns.button)} href={href}>
            {icon}
            {label && <span className={cn(_cns.text)}>{label}</span>}
          </Link>
        </TooltipTrigger>
        {text && <TooltipContent>{text}</TooltipContent>}
      </Tooltip>
    </div>
  );
};

export const LinkButton = ({
  href,
  icon,
  label,
  className,
}: {
  href: string;
  icon: ReactNode;
  label?: string | undefined;
  className?: string;
}) => {
  return (
    <Link
      className={cn(_cns.button, 'group/linkButton bg-accent/50 inline-flex grow-0 px-3 opacity-100', className)}
      href={href}
    >
      {icon && <div className="-ml-1.5 opacity-25 group-hover/linkButton:opacity-100">{icon}</div>}
      {label && <span className={cn(_cns.text)}>{label}</span>}
    </Link>
  );
};
