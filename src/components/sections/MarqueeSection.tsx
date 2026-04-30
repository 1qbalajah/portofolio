"use client";

import React from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

export function MarqueeSection() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-8 -mt-12 mb-12 z-20 pointer-events-none">
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={2} className="text-4xl md:text-6xl font-black tracking-tighter">
          UI/UX Designer • Front-end Developer • Smart • Diligent •&nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
}
