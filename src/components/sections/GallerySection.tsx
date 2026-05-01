"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import CircularGallery from "@/components/CircularGallery";

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-24">
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              Gallery
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Visual Stories from My Journey
            </h2>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curated collection of moments, designs, and creative works that
              reflect my process, growth, and experience.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="relative left-1/2 h-[600px] w-screen -translate-x-1/2">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </BlurFade>
    </section>
  );
}
