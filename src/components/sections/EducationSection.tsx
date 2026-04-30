"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section id="education" className="py-24 w-full max-w-4xl mx-auto">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">
          Education
        </h2>
      </BlurFade>
      <div className="flex flex-col gap-6">
        {DATA.education.map((edu, idx) => (
          <BlurFade key={edu.school} delay={0.15 + idx * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 border border-border/50 bg-background/50 backdrop-blur-md shadow-sm hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {edu.logoUrl && (
                  <div className="h-16 w-16 shrink-0 rounded-full bg-muted overflow-hidden border">
                    <img
                      src={edu.logoUrl}
                      alt={edu.school}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mt-1">
                    <span>{edu.degree}</span>
                    <span>
                      {edu.start} - {edu.end}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {edu.description}
              </p>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
