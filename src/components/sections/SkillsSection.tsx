"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/ui/retro-grid";

const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
  {
    name: "Microsoft Office",
    icon: "https://cdn.simpleicons.org/microsoftoffice/D83B01",
  },
];

export function SkillsSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND RETROGRID (SECTION-BASED, NOT FIXED) */}
      <div className="absolute inset-0 w-full h-full">
        <RetroGrid className="absolute inset-0 w-full h-full" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-background/40 z-10 pointer-events-none" />

      {/* BLUR BOTTOM EFFECT */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none bg-gradient-to-t from-background via-background/60 to-transparent backdrop-blur-xl" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-4">
        {/* TITLE */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">
              Skill
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Tools & Technologies
            </h2>
          </div>
        </BlurFade>

        {/* GRID */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl w-full">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="
              flex flex-col items-center justify-center
              border rounded-xl p-5
              bg-background/80 backdrop-blur
              shadow-sm
              transition-all duration-300
              hover:scale-105 hover:border-primary hover:shadow-lg
              w-full max-w-[140px]
            "
              >
                <img
                  src={skill.icon}
                  className="w-10 h-10 mb-3 object-contain"
                />
                <span className="text-xs sm:text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
