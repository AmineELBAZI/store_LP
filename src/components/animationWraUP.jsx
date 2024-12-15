import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationWrapper = ({
  children,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 1, delay: 0 },
  threshold = 0.2,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
