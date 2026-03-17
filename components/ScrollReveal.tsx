
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimationProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  staggerChildren?: number;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0,
  duration = 0.8,
  y = 30,
  staggerChildren = 0,
  className = "",
  style = {},
  ...props
}: AnimationProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: staggerChildren ? staggerChildren : undefined
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ position: 'relative', width: '100%', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  delay = 0,
  className = "",
  ...props
}: HTMLMotionProps<'div'> & { staggerDelay?: number, delay?: number }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children,
  y = 30,
  className = "",
  ...props
}: AnimationProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
