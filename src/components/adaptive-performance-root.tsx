"use client";

import { useEffect } from "react";
import { useAdaptivePerformance } from "@/hooks/use-adaptive-performance";

export function AdaptivePerformanceRoot() {
  const { isLiteMode, prefersReducedMotion, isSlowNetwork, isLowMemory } =
    useAdaptivePerformance();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("performance-lite", isLiteMode);
    root.classList.toggle("reduce-motion", prefersReducedMotion);
    root.dataset.performanceMode = isLiteMode ? "lite" : "full";
    root.dataset.network = isSlowNetwork ? "slow" : "normal";
    root.dataset.memory = isLowMemory ? "low" : "normal";

    return () => {
      root.classList.remove("performance-lite", "reduce-motion");
      delete root.dataset.performanceMode;
      delete root.dataset.network;
      delete root.dataset.memory;
    };
  }, [isLiteMode, prefersReducedMotion, isSlowNetwork, isLowMemory]);

  return null;
}
