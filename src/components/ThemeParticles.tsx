"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";

export function ThemeParticles() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#38bdf8" : "#2563eb");
  }, [resolvedTheme]);

  return (
    <Particles
      className="fixed inset-0 pointer-events-none z-0"
      quantity={350}
      ease={80}
      color={color}
      refresh
    />
  );
}
