'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IconArrowLeft, IconHome, IconInfoCircle, IconMessageCircle } from '@tabler/icons-react';
import { Hdr } from './hdr';
import { cn } from './ui/utils';

const MotionLink = motion(Link);

const transition = {
  type: 'spring',

  bounce: 0.15,
  mass: 0.35,
};
const transitionFast = {
  type: 'spring',
  bounce: 0.15,
  mass: 0.35,
};

/** @todo clean up this file */
export const Tab = ({
  href,
  icon,
  children,
  active,
  layoutId,
  mode = 'both',
}: {
  href: string;
  icon?: React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean;
  layoutId: string;
  mode?: 'both' | 'icon' | 'text';
}) => {
  return (
    <MotionLink
      transition={transition}
      layoutId={layoutId}
      href={href}
      className={cn(
        !active ? 'px-3' : 'w-24 px-3',
        'hover:text-foreground relative flex h-8 min-w-8 items-center justify-center overflow-hidden rounded-full font-medium active:scale-95',
        active ? 'text-foreground' : 'text-foreground/75 hover:bg-foreground/5',
      )}
    >
      <motion.div transition={transition} className="blend z-10 flex items-center justify-center gap-1">
        {icon && mode !== 'text' && (
          <motion.div layoutId={`${layoutId}-icon`}>{React.createElement(icon, { className: 'iconSize' })}</motion.div>
        )}
        {children && active && <motion.div layout>{children}</motion.div>}
      </motion.div>

      {active && (
        <>
          <motion.div
            layoutId="bg-indicator"
            transition={transitionFast}
            className="bg-card/50 dark:bg-foreground/10 glass-shadow absolute inset-0 z-1 h-full rounded-full"
          >
            <Hdr className="absolute inset-0 -z-10" />
          </motion.div>
        </>
      )}
    </MotionLink>
  );
};

/**
 * @todo clean up this file
 * */
export const Glass = ({
  children,
  layoutId,
  empty,
  hdr,
}: {
  children: React.ReactNode;
  layoutId: string;
  empty?: boolean;
  hdr?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.9, scaleY: 1.1, filter: 'blur(1px)', borderRadius: 20 }}
      animate={{ borderRadius: 20, opacity: 1, scaleX: 1, scaleY: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0.5, filter: 'blur(1px)', borderRadius: 20 }}
      transition={transitionFast}
      key={layoutId}
      layoutId={layoutId}
      className={cn(
        hdr ? 'glass-bg glass-shadow' : 'bg-foreground/5',
        'relative flex h-9 min-w-9 items-center justify-center rounded-[20px] px-0.5 backdrop-blur-sm',
      )}
    >
      {children}
      {hdr && (
        <motion.div transition={transition} layoutId="hdr" className="absolute inset-0 -z-10 h-full w-full">
          <Hdr />
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * @todo clean up this file
 * */
export const LeftTabs = ({ currentPath, isBackButton }: { currentPath: string }) => {
  return (
    <motion.div layout transition={transition} layoutId="left-tabs" className="flex h-full items-center">
      <Tab
        icon={isBackButton ? IconArrowLeft : IconHome}
        mode={isBackButton ? 'icon' : 'both'}
        href="/"
        layoutId="link-back"
        active={currentPath === '/'}
      >
        Home
      </Tab>
    </motion.div>
  );
};

/**
 * @todo clean up this file
 * */
export const RightTabs = ({ currentPath, hideText }: { currentPath: string }) => {
  return (
    <motion.div layout transition={transition} layoutId="right-tabs" className="flex h-full items-center">
      <Tab
        mode={hideText ? 'icon' : 'both'}
        icon={IconMessageCircle}
        layoutId="link-chat"
        href="/chat"
        active={currentPath === '/chat'}
      >
        Chat
      </Tab>
      <Tab icon={IconInfoCircle} mode="icon" layoutId="link-site" href="/site" active={currentPath === '/site'}>
        Insp
      </Tab>
    </motion.div>
  );
};

/**
 * @todo clean up this file
 * */
export const Tabs = ({ currentPath }: { currentPath: string }) => {
  return (
    <Glass>
      <LeftTabs currentPath={currentPath} />
      <RightTabs currentPath={currentPath} />
    </Glass>
  );
};

/**
 * @todo clean up this file
 * */
export const Navigation = () => {
  const pathname = usePathname();

  const needsBackButton = pathname.includes('work');

  return (
    <motion.div
      layoutRoot
      className="from-background to-background/0 p-pageMargin via-background/75 fixed top-0 right-0 left-0 z-50 flex items-center justify-center bg-gradient-to-b from-0% via-50% to-100% pt-[min(12px,calc(var(--padding-pageMargin)*2))] pb-[calc(var(--padding-pageMargin)*2)]"
    >
      <AnimatePresence mode="wait">
        <div className="mx-auto grid w-full max-w-xl grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center justify-start">
            {needsBackButton && (
              <>
                <Glass hdr layoutId="glass-left" empty={!needsBackButton}>
                  <LeftTabs currentPath={pathname} isBackButton />
                </Glass>
                <motion.div
                  layout
                  transition={transition}
                  layoutId="title"
                  className="pl-pageMargin text-muted-foreground/25 font-medium"
                >
                  Work
                </motion.div>
              </>
            )}
          </div>
          <div>
            {needsBackButton ? null : (
              <>
                <Glass layoutId="glass-right">
                  <LeftTabs currentPath={pathname} />
                  <RightTabs currentPath={pathname} />
                </Glass>
              </>
            )}
          </div>
          <div className="flex items-center justify-end">
            {needsBackButton ?
              <Glass layoutId="glass-right" empty={!needsBackButton}>
                <RightTabs hideText currentPath={pathname} />
              </Glass>
            : <motion.div
                layout
                transition={transition}
                layoutId="title"
                style={{ opacity: 0 }}
                className="pl-pageMargin mr-auto font-medium opacity-0"
              >
                Work
              </motion.div>
            }
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
