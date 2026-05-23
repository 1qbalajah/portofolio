"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24">
      {/* Section Header */}
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl">
            <BriefcaseIcon className="size-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Leadership & Community
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Organization & Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            My experience in organizations and communities has helped me build
            leadership, collaboration, and problem-solving skills.
          </p>
        </div>
      </BlurFade>

      {/* Experience Timeline */}
      <div className="mx-auto max-w-4xl">
        {/* Timeline line */}
        <div className="relative ml-6 md:ml-12">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-amber-500 via-fuchsia-500 to-transparent" />

          <div className="space-y-8">
            {DATA.experience.map((org, idx) => {
              const title = org.experience ?? "Experience";

              return (
                <BlurFade key={title} delay={0.2 + idx * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="group relative pl-10 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-1.5 top-6 flex size-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                      <div className="size-2 rounded-full bg-white" />
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]">
                      {/* Header */}
                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          {/* Org Logo */}
                          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background shadow-sm">
                            {org.logoUrl ? (
                              <img
                                src={org.logoUrl}
                                alt={title}
                                className="size-10 rounded-lg object-contain"
                              />
                            ) : (
                              <span className="text-lg font-bold text-amber-600">
                                {title.charAt(0)}
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                              {org.role}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1 rounded-full bg-background/50 px-3 py-1 backdrop-blur-md">
                            <CalendarIcon className="size-3" />
                            {org.start} - {org.end}
                          </div>
                          {org.location && (
                            <div className="flex items-center gap-1 rounded-full bg-background/50 px-3 py-1 backdrop-blur-md">
                              <MapPinIcon className="size-3" />
                              {org.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {org.description}
                      </p>

                      {/* Decorative accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 via-fuchsia-500/20 to-transparent transition-all duration-300 group-hover:h-1.5" />
                    </div>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}