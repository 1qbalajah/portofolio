"use client";

import { useEffect, useState } from "react";

type AdaptivePerformanceState = {
  isLiteMode: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  isSlowNetwork: boolean;
  isLowMemory: boolean;
  supportsDeviceHints: boolean;
};

const initialState: AdaptivePerformanceState = {
  isLiteMode: false,
  isMobile: false,
  prefersReducedMotion: false,
  isSlowNetwork: false,
  isLowMemory: false,
  supportsDeviceHints: false,
};

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

function getPerformanceState(): AdaptivePerformanceState {
  if (typeof window === "undefined") return initialState;

  const navigatorWithHints = navigator as NavigatorWithHints;
  const connection = navigatorWithHints.connection;
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth < 768;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const memory = navigatorWithHints.deviceMemory;
  const effectiveType = connection?.effectiveType;
  const isLowMemory = typeof memory === "number" && memory <= 4;
  const isSlowNetwork =
    Boolean(connection?.saveData) ||
    effectiveType === "slow-2g" ||
    effectiveType === "2g" ||
    effectiveType === "3g";
  const isSmallLowEnd = viewportWidth < 430 && (isLowMemory || isSlowNetwork);
  const isLiteMode =
    prefersReducedMotion || isSlowNetwork || isSmallLowEnd || (isMobile && isLowMemory);

  return {
    isLiteMode,
    isMobile,
    prefersReducedMotion,
    isSlowNetwork,
    isLowMemory,
    supportsDeviceHints:
      typeof memory === "number" || typeof effectiveType === "string" || Boolean(connection?.saveData),
  };
}

export function useAdaptivePerformance() {
  const [state, setState] = useState<AdaptivePerformanceState>(initialState);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const navigatorWithHints = navigator as NavigatorWithHints;
    const connection = navigatorWithHints.connection;
    let resizeTimer: number | undefined;

    const updateState = () => {
      setState(getPerformanceState());
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateState, 150);
    };

    updateState();
    window.addEventListener("resize", handleResize, { passive: true });
    motionQuery.addEventListener("change", updateState);
    connection?.addEventListener?.("change", updateState);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", updateState);
      connection?.removeEventListener?.("change", updateState);
    };
  }, []);

  return state;
}
