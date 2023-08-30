import { useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react'

const useAnimateOnInView = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
        if (!inView) {
          controls.start("hidden");
        }
      }, [controls, inView]);
    

     return { ref, controls };
}

export default useAnimateOnInView