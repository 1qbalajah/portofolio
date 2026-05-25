"use client";

import React from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

export function MarqueeSection() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-12 -mt-8 z-20">
      <div className="flex flex-col gap-6">
        {/* Row 1 - Moving Right */}
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={3}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(190,242,100,0.35)]"
          >
            UI/UX DESIGN • FRONT-END DEVELOPMENT • CREATIVE SYSTEM •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Row 2 - Moving Left (opposite direction) */}
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={-2}
            direction={-1}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(16,185,129,0.34)]"
          >
            DIGITAL EXPERIENCE • USER INTERFACE • INTERACTIVE DESIGN •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Row 3 - Moving Right with gradient */}
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={2.5}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter"
          >
            <span className="bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              MODERN • MINIMALIST • FUTURISTIC •
            </span>
            &nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}
