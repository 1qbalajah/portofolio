"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/ui/retro-grid";
import { DATA } from "@/data/resume";

export function SkillsSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center px-4 py-24">
      <RetroGrid className="!absolute !left-1/2 !top-0 !-z-20 !h-full !w-[140vw] !-translate-x-1/2" />

      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-56 w-screen -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-xl [mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <BlurFade delay={0.1}>
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-6 space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Skill
              </h2>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="grid w-full grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {DATA.skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex w-full max-w-[140px] flex-col items-center justify-center
                  rounded-xl border bg-background/80 p-5 shadow-sm backdrop-blur
                  transition-all duration-300
                  hover:scale-105 hover:border-primary hover:shadow-lg
                "
              >
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="mb-3 h-10 w-10 object-contain"
                  />
                ) : (
                  <>
                    <img
                      src={skill.icon.light}
                      alt={skill.name}
                      className="mb-3 h-10 w-10 object-contain dark:hidden"
                    />
                    <img
                      src={skill.icon.dark}
                      alt={skill.name}
                      className="mb-3 hidden h-10 w-10 object-contain dark:block"
                    />
                  </>
                )}

                <span className="text-center text-xs font-medium sm:text-sm">
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
