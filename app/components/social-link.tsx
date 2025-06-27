import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from './ui/utils';

const _cns = {
  button: 'hover:bg-accent gap-1.5 flex items-center justify-center rounded-sm    p-1.5   hover:opacity-100',
  text: ' hidden text-sm  font-medium tracking-wide sm:block  text-box-trim',
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
    <div className={cn(className)}>
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
      className={cn(
        _cns.button,
        'group/linkButton pop-in glass inline-flex grow-0 gap-0.5 bg-clip-padding opacity-100 transition-all duration-100 active:scale-95',
        className,
      )}
      href={href}
    >
      {icon && <div className="opacity-75 group-hover/linkButton:opacity-100">{icon}</div>}
      {label && <div className={cn(_cns.text, 'pr-1.5')}>{label}</div>}
    </Link>
  );
};
