'use client';

import * as motion from 'motion/react-client';
import React from 'react';

export default function AnimateIn({
  children,
  idx = 0,
  className,
}: {
  children: React.ReactNode;
  idx: number;
  className?: string;
}) {
  return (
    <motion.div
      style={{ originY: 0.25 }}
      initial={{ opacity: 0, scale: 0.995, translateY: idx * 10, filter: `blur(${4 + idx * 4}px)` }}
      animate={{ opacity: 1, scale: 1, translateY: 0, filter: 'blur(0px)' }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        bounce: 0,
        mass: 0.1 + idx * 0.5,
        delay: 0.1 + idx * 0.05,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimateInUp({
  children,
  idx = 0,
  className,
}: {
  children: React.ReactNode;
  idx: number;
  className?: string;
}) {
  return (
    <motion.div
      style={{ originY: 0.25 }}
      initial={{ opacity: 0, translateY: 10, scale: 0.99 }}
      animate={{ opacity: 1, translateY: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 5,
        bounce: 0.5,
        mass: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
