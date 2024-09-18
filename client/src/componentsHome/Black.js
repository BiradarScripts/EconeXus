import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

export default function Black() {
  const matches = useMediaQuery('(min-width: 768px)');
  const targetRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1.2, -1]);
  const responsiveOpacity={
    opacity: useTransform(scrollYProgress, [0, 0.4], [1.5, -1])
  }

  return (
      <motion.div
        className="black"
        style={ matches?{ opacity }:responsiveOpacity} 
      >
        {/* <div className="header1">
          <div className="presentingyou">
            Presenting<br />
            You
          </div>
        </div> */}

        {/* <div className="header2">
          <div className="econexus">EconeXus</div>
        </div> */}
      </motion.div>
  );
}