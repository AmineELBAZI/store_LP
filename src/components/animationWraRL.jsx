import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationWraRL = ({
  children,
  initial = { opacity: 0, x: -120 },
  animate = { opacity: 1, x: 0 },
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

export default AnimationWraRL;
