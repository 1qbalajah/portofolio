"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import {
  SmartphoneIcon,
  MonitorIcon,
  ArrowUpRightIcon,
} from "lucide-react";

// Design showcase items
const designItems = [
  {
    id: 1,
    title: "BEST Platform",
    category: "Web Application",
    description: "Portfolio platform featuring 40+ student projects with modern UI",
    image: "/P-BEST.png",
    icon: MonitorIcon,
    color: "lime",
    link: "https://best.smktibazma.com/",
  },
  {
    id: 2,
    title: "SMK TI BAZMA",
    category: "Institutional Website",
    description: "Modern school website with AI chatbot and student showcase",
    image: "/P-SMKTIBAZMA.png",
    icon: MonitorIcon,
    color: "emerald",
    link: "https://smktibazma.sch.id/",
  },
  {
    id: 3,
    title: "SINERGI App",
    category: "Mobile Application",
    description: "Unified community platform for Pertamina groups",
    image: "/P-SINERGI.png",
    icon: SmartphoneIcon,
    color: "cyan",
    link: "https://www.figma.com/proto/dnVSPyd2FpipnCzA77ORV5/SINERGI",
  },
  {
    id: 4,
    title: "JAJANIN",
    category: "Mobile Application",
    description: "Student entrepreneurship platform for real-world sales",
    image: "/P-JAJANIN.png",
    icon: SmartphoneIcon,
    color: "teal",
    link: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin",
  },
  {
    id: 5,
    title: "KajianQU",
    category: "Mobile Application",
    description: "Islamic memorization and murojaah helper app",
    image: "/P-KAJIANQU.png",
    icon: SmartphoneIcon,
    color: "emerald",
    link: "https://www.figma.com/proto/cQEHbUb5EeWBz1SX7C0wJX/KajianKu",
  },
  {
    id: 6,
    title: "HIMPANA",
    category: "Community Website",
    description: "Revamped community portal for 1000+ users",
    image: "/P-HIMPANA.png",
    icon: MonitorIcon,
    color: "lime",
    link: "https://himpana.com/",
  },
];

export function ArtExhibitionSection() {
  const accentClassMap: Record<string, { border: string; text: string; shadow: string }> = {
    lime: {
      border: "hover:border-lime-300/40",
      text: "text-lime-600 dark:text-lime-300",
      shadow: "hover:shadow-[0_0_60px_-20px_rgba(190,242,100,0.35)]",
    },
    emerald: {
      border: "hover:border-emerald-400/40",
      text: "text-emerald-600 dark:text-emerald-300",
      shadow: "hover:shadow-[0_0_60px_-20px_rgba(16,185,129,0.32)]",
    },
    cyan: {
      border: "hover:border-cyan-400/40",
      text: "text-cyan-600 dark:text-cyan-300",
      shadow: "hover:shadow-[0_0_60px_-20px_rgba(6,182,212,0.32)]",
    },
    teal: {
      border: "hover:border-teal-400/40",
      text: "text-teal-600 dark:text-teal-300",
      shadow: "hover:shadow-[0_0_60px_-20px_rgba(20,184,166,0.32)]",
    },
  };

  return (
    <section className="w-full py-24">
      {/* Section Header */}
      <BlurFade delay={0.1}>
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Art Exhibition
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A curated collection of UI explorations, experimental designs, and visual concepts.
          </p>
        </div>
      </BlurFade>

      {/* Items Grid - One column, image right, text left */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8">
        {designItems.map((item, index) => {
          const accent = accentClassMap[item.color] ?? accentClassMap.lime;

          return (
          <BlurFade key={item.id} delay={0.1 + index * 0.1}>
            <motion.a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`group relative flex flex-col-reverse overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl transition-all duration-500 ${accent.border} ${accent.shadow} sm:flex-row`}
            >
              {/* Text Content - Left Side */}
              <div className="flex flex-1 flex-col justify-center p-8">
                <div className="mb-2 flex items-center gap-2">
                  <item.icon className={`size-4 ${accent.text}`} />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${accent.text}`}>
                    View Project
                  </span>
                  <ArrowUpRightIcon className={`size-4 ${accent.text}`} />
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="relative aspect-video w-full sm:w-1/2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>
            </motion.a>
          </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
