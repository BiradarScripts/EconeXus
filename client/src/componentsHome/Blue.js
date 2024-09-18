import { React, useEffect, useRef} from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import bgimage from './andrew_seb.png'


export default function Blue() {
  const matches = useMediaQuery('(min-width: 1000px)');

  const targetRef = useRef(0);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0.6,1], [1.5,-1]);
    const x=useTransform(scrollYProgress,[0.4,0.6],["0%","-70%"])
    const y=useTransform(scrollYProgress,[0.3,1],["0%","100%"])
    const scale=useTransform(scrollYProgress,[0.4,0.7],[1,0])

    
    const styleFirst={
      scale,
      opacity:useTransform(scrollYProgress,[0.4,1],[2,-1.3])
    }
    return (
          <div className="blue">
              <motion.div className="bluebgimage" style={matches?styleFirst:null}>
                  <div className="header">
                    EconeXus!!
                    <br />
                  </div>
                  <div className="contentblue">
                  A Platform Where You Get Associated With Individuals Of Same Interests, You Even Get To Understand Their thoughts And Their Status
                  </div>
              </motion.div>
              <motion.div className="bluebgimage2" ref={targetRef} style={matches?{opacity,x,y}:null}>
              </motion.div>
          </div>
    )
}