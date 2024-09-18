import { React, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Photo_1() {
  const targetRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 2]);
  const scale= useTransform(scrollYProgress,[0,1],[1,2.5])

  return (
    <>
      <motion.div className="photo_1" style={{ opacity,scale}} ref={targetRef}>
        {/* Your photo content goes here */}
      </motion.div>
    </>
  );
}
