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
      initial={{ opacity: 0, scale: 0.99 - idx * 0.02, translateY: 0, filter: `blur(${4 + idx * 2}px)` }}
      animate={{ opacity: 1, scale: 1, translateY: 0, filter: 'blur(0px)' }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        bounce: 0.5,
        delay: 0.1 + idx * 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
