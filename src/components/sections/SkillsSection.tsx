"use client";

import Image from "next/image";
import React from "react";

import BlurFade from "@/components/magicui/blur-fade";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { useAdaptivePerformance } from "@/hooks/use-adaptive-performance";

type Skill = (typeof DATA.skills)[number];

function SkillIcon({ skill }: { skill: Skill }) {
  if (typeof skill.icon === "string") {
    return (
      <Image
        src={skill.icon}
        alt={skill.name}
        width={56}
        height={56}
        sizes="56px"
        className="size-12 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-14"
      />
    );
  }

  return (
    <>
      <Image
        src={skill.icon.light}
        alt={skill.name}
        width={56}
        height={56}
        sizes="56px"
        className="size-12 object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden sm:size-14"
      />
      <Image
        src={skill.icon.dark}
        alt={skill.name}
        width={56}
        height={56}
        sizes="56px"
        className="hidden size-12 object-contain transition-transform duration-300 group-hover:scale-110 dark:block sm:size-14"
      />
    </>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group relative flex size-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-lime-300/20 bg-transparent p-4 backdrop-blur-xl transition-colors duration-300 hover:border-lime-300/45 sm:size-28 sm:p-5">
          <div className="relative mb-3 flex size-14 items-center justify-center sm:size-16">
            <SkillIcon skill={skill} />
          </div>
          <span className="relative text-center text-xs font-semibold sm:text-sm">
            {skill.name}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p className="text-xs font-medium">{skill.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function SkillGrid() {
  return (
    <div className="grid w-full grid-cols-2 justify-items-center gap-4 min-[390px]:grid-cols-3 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 lg:grid-cols-6">
      {DATA.skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function SkillMarquee() {
  const marqueeSkills = [...DATA.skills, ...DATA.skills];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2">
      <div className="skill-marquee-track flex w-max gap-4 px-4 py-2 sm:gap-5 sm:px-8">
        {marqueeSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { isLiteMode, prefersReducedMotion } = useAdaptivePerformance();
  const useStaticGrid = isLiteMode || prefersReducedMotion;

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1}>
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-xl">
              Stack & Tools
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Skills & Tools
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} className="w-full">
          {useStaticGrid ? <SkillGrid /> : <SkillMarquee />}
        </BlurFade>
      </div>
    </section>
  );
}
