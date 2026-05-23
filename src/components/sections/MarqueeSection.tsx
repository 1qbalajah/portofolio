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
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(99,102,241,0.3)]"
          >
            UI/UX DESIGN • FRONT-END DEVELOPMENT • CREATIVE SYSTEM •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Row 2 - Moving Left (opposite direction) */}
        <ScrollVelocityContainer>
          <ScrollVelocityRow
            baseVelocity={-2}
            direction={-1}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(6,182,212,0.3)]"
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
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              MODERN • MINIMALIST • FUTURISTIC •
            </span>
            &nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}