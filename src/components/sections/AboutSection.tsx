"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 w-full">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
          About Me
        </h2>
      </BlurFade>
      <BlurFade delay={0.2}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative max-w-4xl mx-auto rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] transition-all duration-500 overflow-hidden"
        >
          {/* Inner container (liquid glass effect) */}
          <div className="relative h-full w-full rounded-[23px] bg-background/80 backdrop-blur-xl p-8 md:p-12 z-10">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
              {DATA.about}
            </p>
          </div>
          {/* Animated glow background inside the border */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite] opacity-50" />
        </motion.div>
      </BlurFade>
    </section>
  );
}
