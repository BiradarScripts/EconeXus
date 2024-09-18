import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

export default function Violet() {
  const matches = useMediaQuery('(min-width: 1000px)');

  const targetRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7, 0.85], [-2, 1.5, 1.5, -1]);
  const x = useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-45%']);
  const y = useTransform(scrollYProgress, [0.3, 1], ['-20%', '140%']);

  const postScale = useTransform(scrollYProgress, [0.4,0.7], [1, 0]);
  const container3Scale = useTransform(scrollYProgress, [0, 0.7, 1], [1,1, 0.5]);

  const postStyle = {
    scale: postScale,
    opacity:useTransform(scrollYProgress, [0,1], [2,-1])
  };

  const container3Style = {
    scale: container3Scale,
    opacity,
    x,
    y,
  };

  return (
    <div className="violet">
      <motion.div className="post" style={matches?postStyle:null} ref={targetRef}>
        <div className="header">
          Free You'r Mind
          <br />
        </div>
        <div className="contentviolet">
        Post your thoughts,let others know your status and considerations.You might check others posts aswell
        </div>
      </motion.div>
      <div className="upperContainer">
        <motion.div className="container3" ref={targetRef} style={matches?container3Style:null}>
        </motion.div>
      </div>
      
    </div>
  );
}