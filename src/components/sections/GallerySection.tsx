"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import CircularGallery from "@/components/CircularGallery";
import { Map } from "lucide-react"; // Icon sesuai tema journey

export function GallerySection() {
  return (
    <section id="journey" className="relative w-full py-24">
      {/* Section Header */}
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl">
            <Map className="size-4 text-lime-600 dark:text-lime-300" />
            <span className="text-sm font-medium text-muted-foreground">
              My Journey
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Journey & Milestones
          </h2>

          <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A curated collection of projects, certificates, and design explorations
            that map out my growth, skills, and passion for building impactful
            digital experiences.
          </p>
        </div>
      </BlurFade>

      {/* Circular Gallery */}
      <BlurFade delay={0.2}>
        <div className="relative left-1/2 h-[600px] w-screen -translate-x-1/2">
          <CircularGallery
            bend={1}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </BlurFade>
    </section>
  );
}
