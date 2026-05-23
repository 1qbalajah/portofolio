"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { GraduationCapIcon, BookOpenIcon } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-24">
      {/* Section Header */}
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl">
            <GraduationCapIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Academic Background
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Education
          </h2>
        </div>
      </BlurFade>

      {/* Education Cards */}
      <div className="mx-auto grid max-w-4xl gap-6">
        {DATA.education.map((edu, idx) => (
          <BlurFade key={edu.school} delay={0.15 + idx * 0.1}>
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-8 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_50px_-15px_rgba(34,197,94,0.3)]"
            >
              {/* Decorative gradient */}
              <div className="absolute -right-8 -bottom-8 size-32 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                {/* Logo */}
                {edu.logoUrl && (
                  <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background/50 shadow-md">
                    <img
                      src={edu.logoUrl}
                      alt={edu.school}
                      className="size-14 rounded-lg object-contain"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-grow flex-col">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{edu.school}</h3>
                      <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
                      <BookOpenIcon className="size-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {edu.start} - {edu.end}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}