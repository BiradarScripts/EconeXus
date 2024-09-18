import { React, useRef,useState,useEffect} from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

export default function Yellow() {
  const matches = useMediaQuery('(min-width: 1000px)');

  const targetRef = useRef(0);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0.3,0.8,0.9], [0,2,-4]);
    const x=useTransform(scrollYProgress,[0.4,0.6],["0%","82%"])
    const y=useTransform(scrollYProgress,[0.3,1],["-30%","115%"])
    const scale=useTransform(scrollYProgress,[0.4,0.5],[1,0])

    

    return (
      <div className='yellow'>
        <motion.div className="container1" ref={targetRef} style={matches?{opacity,x,y}:null}>

        </motion.div>
        
        <div className="containers2">
          
        <motion.div className="createProfile" ref={{targetRef}} style={matches?{scale}:null}>
                  <div className="header">
                    Get you'r neXus Card!!
                    <br />
                  </div>
                  <div className="contentyellow">
                    Register to get Your nexus card,Show others how creative you are.share your interests with others
                  </div>
        </motion.div>
        
        </div>
      </div>
    )
}