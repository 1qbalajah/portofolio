"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <BlurFade delay={0.2}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative group overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl h-[400px] w-[300px] flex items-center justify-center cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.5)]"
      >
        {/* INNER CARD */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="relative w-full h-full overflow-hidden rounded-xl"
        >
          {/* IMAGE FULL */}
          <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
            <motion.h3
              style={{ transform: "translateZ(60px)" }}
              className="text-2xl font-bold"
            >
              {DATA.subtitle}
            </motion.h3>

            <motion.p
              style={{ transform: "translateZ(40px)" }}
              className="text-sm opacity-80"
            >
              {DATA.sosmed}
            </motion.p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />
        </div>
      </motion.div>
    </BlurFade>
  );
}