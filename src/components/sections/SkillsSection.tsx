"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { IconCloud } from "@/components/ui/icon-cloud";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "framer",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 w-full">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">
          My Skills
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <BlurFade delay={0.2} className="flex justify-center">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </BlurFade>

        <BlurFade delay={0.3} className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold">What I bring to the table</h3>
          <p className="text-muted-foreground text-lg">
            I specialize in crafting beautiful and highly functional user
            interfaces. My skill set includes a blend of design thinking and
            modern front-end development, ensuring top-tier performance and
            animations.
          </p>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <Badge key={id} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
