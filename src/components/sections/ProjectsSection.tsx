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
    <section id="projects" className="py-24 w-full">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {DATA.projects.map((project, idx) => (
          <BlurFade key={project.title} delay={0.2 + idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-background shadow-sm hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 h-full"
            >
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image available
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.map((link, i) => (
                    <Button key={i} size="sm" variant="secondary" asChild className="rounded-full">
                      <Link href={link.href} target="_blank">
                        {link.icon} <span className="ml-2">{link.type}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <time className="text-xs text-muted-foreground mb-4">
                  {project.dates}
                </time>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
