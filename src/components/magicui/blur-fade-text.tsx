"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { ReactNode } from "react";

interface BlurFadeTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variants;
  duration?: number;
  characterDelay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text = "",
  children,
  className,
  variant,
  delay = 0,
  characterDelay = 0.03,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  return (
    <div className="flex flex-wrap">
      <AnimatePresence>
        {animateByCharacter && text
          ? characters.map((char, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={combinedVariants}
                transition={{
                  delay: delay + i * characterDelay,
                  ease: "easeOut",
                  duration: 0.6,
                }}
                className={cn("inline-block", className)}
                style={{ width: char.trim() === "" ? "0.3em" : "auto" }}
              >
                {char}
              </motion.span>
            ))
          : (
              <motion.span
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={combinedVariants}
                transition={{
                  delay,
                  ease: "easeOut",
                  duration: 0.6,
                }}
                className={cn("inline-block", className)}
              >
                {children || text}
              </motion.span>
            )}
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
