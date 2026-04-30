"use client"

import React from "react"
import BlurFade from "@/components/magicui/blur-fade"
import CircularGallery from "@/components/CircularGallery"

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 w-full overflow-hidden">
      
      {/* TITLE */}
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Gallery
          </h2>

          <p className="text-muted-foreground md:text-xl max-w-[800px] mt-4">
            A glimpse into my works, designs, and moments.
          </p>
        </div>
      </BlurFade>

      {/* GALLERY */}
      <BlurFade delay={0.2}>
        <div className="w-full h-[600px] relative">
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
  )
}