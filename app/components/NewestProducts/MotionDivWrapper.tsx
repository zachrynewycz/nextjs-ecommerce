"use client";
import { MotionProps, motion, useInView } from "framer-motion";
import { useRef } from "react";

function MotionDivWrapper({ children, index }: { children: React.ReactNode; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationProps: MotionProps = {
        initial: { opacity: 0, x: -50 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
        transition: { duration: 1.5, delay: index * 0.1 },
    };

    return (
        <motion.div {...animationProps} ref={ref}>
            {children}
        </motion.div>
    );
}

export default MotionDivWrapper;
