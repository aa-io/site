'use client';

import { motion } from 'motion/react';
import React from 'react';

export const LayoutInner = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div layoutScroll className="absolute h-full w-full overflow-y-auto">
      {children}
    </motion.div>
  );
};
