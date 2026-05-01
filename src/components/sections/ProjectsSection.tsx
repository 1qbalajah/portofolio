"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24">
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              My Project
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These projects showcase my skills and passion for creating impactful solutions.
              solving.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {DATA.projects.map((project, idx) => {
          const primaryLink = project.links[0];

          return (
            <BlurFade key={project.title} delay={0.2 + idx * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
  group relative flex h-full flex-col overflow-hidden rounded-3xl
  border border-border/50 bg-background/50
  shadow-sm backdrop-blur-2xl transition-all duration-300
  hover:border-blue-500/30
  hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]
"

              >
                <div className="relative h-64 w-full overflow-hidden bg-muted/40">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                      No image available
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex flex-grow flex-col p-6">
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>

                  <time className="mb-4 text-xs text-muted-foreground">
                    {project.dates}
                  </time>

                  <p className="mb-6 flex-grow text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-6 mt-auto flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="
                          border-slate-950/10 bg-white/50 text-xs backdrop-blur-md
                          dark:border-white/20 dark:bg-white/10
                        "
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {primaryLink && (
                    <Button
                      asChild
                      className="
                        group/button w-full overflow-hidden rounded-full
                        border border-slate-950/10 bg-slate-950/[0.06]
                        text-foreground shadow-lg backdrop-blur-xl
                        transition-all duration-300
                        hover:bg-slate-950/[0.1]
                        hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]
                        dark:border-white/20 dark:bg-white/15 dark:text-white
                        dark:hover:bg-white/25
                      "
                    >
                      <Link
                        href={primaryLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span
                          className="
                            mr-0 max-w-0 overflow-hidden opacity-0
                            transition-all duration-300
                            group-hover/button:mr-2 group-hover/button:max-w-6 group-hover/button:opacity-100
                          "
                        >
                          {primaryLink.icon}
                        </span>

                        <span className="transition-transform duration-300 group-hover/button:translate-x-2">
                          View Project
                        </span>
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
