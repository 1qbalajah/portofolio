"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useAdaptivePerformance } from "@/hooks/use-adaptive-performance";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.28,
  delay = 0,
  yOffset = 8,
  inView = true,
  inViewMargin = "-50px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const { isLiteMode, prefersReducedMotion } = useAdaptivePerformance();
  const shouldReduceMotion = isLiteMode || prefersReducedMotion;
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : yOffset,
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: shouldReduceMotion ? 0 : Math.min(delay, 0.12),
        duration: shouldReduceMotion ? 0 : duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
