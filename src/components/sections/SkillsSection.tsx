"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Skill Card Component
function SkillCard({
  skillName,
  iconUrl,
  iconObj,
  delay,
}: {
  skillName: string;
  iconUrl?: string;
  iconObj?: { light: string; dark: string };
  delay: number;
}) {
  return (
    <BlurFade delay={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex size-28 cursor-pointer flex-col items-center justify-center rounded-2xl border-[3px] border-border/50 bg-background/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon */}
            <div className="relative mb-3 flex size-16 items-center justify-center">
              {iconUrl && (
                <img
                  src={iconUrl}
                  alt={skillName}
                  className="size-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}
              {iconObj && (
                <>
                  <img
                    src={iconObj.light}
                    alt={skillName}
                    className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden"
                  />
                  <img
                    src={iconObj.dark}
                    alt={skillName}
                    className="hidden size-14 object-contain transition-transform duration-300 group-hover:scale-110 dark:block"
                  />
                </>
              )}
            </div>

            {/* Name */}
            <span className="relative text-center text-sm font-medium">
              {skillName}
            </span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>
          <p className="text-xs font-medium">{skillName}</p>
        </TooltipContent>
      </Tooltip>
    </BlurFade>
  );
}

export function SkillsSection() {
  return (
    <section className="relative flex min-h-[65vh] w-full items-center justify-center py-24">
      {/* Background sederhana - opsional, bisa dihapus jika ingin transparan total */}
      <div className="absolute inset-0 -z-10 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Skills & Tools
            </h2>
          </div>
        </BlurFade>

        {/* Skills Grid */}
        <BlurFade delay={0.2}>
          <div className="grid w-full grid-cols-3 justify-items-center gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {DATA.skills.map((skill, idx) => (
              <SkillCard
                key={skill.name}
                skillName={skill.name}
                iconUrl={typeof skill.icon === "string" ? skill.icon : undefined}
                iconObj={typeof skill.icon !== "string" ? skill.icon : undefined}
                delay={0.2 + idx * 0.05}
              />
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}