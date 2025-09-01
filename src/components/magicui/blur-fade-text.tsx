"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo, ReactNode } from "react";

interface BlurFadeTextProps {
  text?: string; // optional
  children?: ReactNode; // now supported
  className?: string;
  delay?: number;
  variant?: Variants;
  duration?: number;
  characterDelay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  children,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" }, // fix agar tidak naik turun
  };

  const combinedVariants = variant || defaultVariants;
  const characters = text ? useMemo(() => Array.from(text), [text]) : [];

  // ✅ Jika animateByCharacter dan text ada → animasi per huruf
  if (animateByCharacter && text) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.25em" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  // ✅ Jika children → render children dengan animasi
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay,
          ease: "easeOut",
        }}
        className={cn("inline-block", className)}
      >
        {children || text}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFadeText;
