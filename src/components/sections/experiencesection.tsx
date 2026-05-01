"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24">
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              Experience
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Organization & Experience
            </h2>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My experience in organizations and communities has helped me build
              leadership, collaboration, and problem-solving skills.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="mx-auto max-w-5xl">
          <ul className="ml-6 divide-y divide-dashed border-l">
            {DATA.experience.map((org, idx) => {
              const title = org.experience ?? "Experience";

              return (
                <BlurFade key={title} delay={0.25 + idx * 0.05}>
                  <li className="relative py-6 pl-10">
                    <div className="absolute -left-6 top-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border bg-background shadow-sm">
                      {org.logoUrl ? (
                        <img
                          src={org.logoUrl}
                          alt={title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-bold">
                          {title.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{title}</h3>

                          <p className="text-sm font-medium text-foreground">
                            {org.role}
                          </p>
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {org.start} - {org.end}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-muted-foreground">
                        {org.description}
                      </p>
                    </div>
                  </li>
                </BlurFade>
              );
            })}
          </ul>
        </div>
      </BlurFade>
    </section>
  );
}
