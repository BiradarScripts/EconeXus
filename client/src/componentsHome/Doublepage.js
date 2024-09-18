import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

export default function Doublepage() {
  const matches = useMediaQuery('(min-width: 1000px)');

  const targetRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const opacity=useTransform(scrollYProgress,[0,0.32,0.6],[-2,0.3,1])
  const positivex=useTransform(scrollYProgress,[0.4,1],['0%','40%'])
  const negativex=useTransform(scrollYProgress,[0.4,1],['0%','-50%'])
  const y = useTransform(scrollYProgress, [0.6, 0.8,1], ['0%', '60%',"120%"]);
  const scale=useTransform(scrollYProgress,[0.4,0.5],[1,0.8])

  const positivestyle={
    x:positivex,
    opacity,
    y,
    scale
  }

  const negativestyle={
    x:negativex,
    opacity,
    y,
    scale
  }


  return (
    
    <div className="doublepage">
        <motion.div className="page1" ref={targetRef} style={matches?positivestyle:null}>
            <div className="innerPage1">
              
            </div>
        </motion.div>

        <motion.div className="page2" ref={targetRef} style={matches?negativestyle:null}>
          <div className="innerPage2">

          </div>
        </motion.div>
    </div>

  )
}
