"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { Map } from "lucide-react"; // Icon sesuai tema journey
import { DATA } from "@/data/resume";
import { useAdaptivePerformance } from "@/hooks/use-adaptive-performance";

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full grid-cols-2 gap-4 px-4 sm:grid-cols-3">
      {DATA.gallery.map((item, index) => (
        <div
          key={`${item.image}-${index}`}
          className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-background/50"
        />
      ))}
    </div>
  ),
});

function StaticGallery() {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {DATA.gallery.map((item, index) => (
        <div
          key={`${item.image}-${index}`}
          className="overflow-hidden rounded-2xl border border-border/50 bg-background/50"
        >
          <Image
            src={item.image}
            alt={`Journey milestone ${index + 1}`}
            width={640}
            height={480}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function GallerySection() {
  const { isLiteMode, isMobile, prefersReducedMotion } = useAdaptivePerformance();
  const [mounted, setMounted] = useState(false);
  const showStaticGallery = !mounted || isLiteMode || isMobile || prefersReducedMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="journey" className="relative w-full py-16 sm:py-24">
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
        {showStaticGallery ? (
          <StaticGallery />
        ) : (
          <div className="relative left-1/2 h-[560px] w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
            <CircularGallery
              bend={1}
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        )}
      </BlurFade>
    </section>
  );
}
