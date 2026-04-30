"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { CircularGallery } from "@/components/CircularGallery";

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 w-full">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Gallery
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
            A glimpse into my works, designs, and moments.
          </p>
        </div>
      </BlurFade>
      
      <BlurFade delay={0.2}>
        <CircularGallery images={DATA.gallery} />
      </BlurFade>
    </section>
  );
}
