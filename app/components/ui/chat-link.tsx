import Link from 'next/link';
import { type FC, type ReactNode } from 'react';
import { cn } from './utils';

export interface ChatLinkProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export const ChatLink: FC<ChatLinkProps> = ({ href = '#', children, className }) => {
  const Component = href ? Link : 'span';
  const isExternal = href?.startsWith('http');
  return (
    <Component
      href={href}
      className={cn('uline', className)}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Component>
  );
};
