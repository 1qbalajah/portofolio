"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  DownloadIcon,
  FrameIcon,
  GithubIcon,
  InstagramIcon,
  LayersIcon,
  LinkedinIcon,
  MousePointer2Icon,
  PenToolIcon,
  PlusIcon,
  ChevronDownIcon,
} from "lucide-react";

import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

const socialLinks = [
  {
    label: DATA.sosmed.github.name,
    href: DATA.sosmed.github.url,
    icon: GithubIcon,
    hoverClass: "hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:border-lime-300/50 dark:hover:bg-lime-300/10 dark:hover:text-lime-200",
    glowClass: "hover:shadow-[0_0_30px_rgba(190,242,100,0.4)]",
  },
  {
    label: DATA.sosmed.instagram.name,
    href: DATA.sosmed.instagram.url,
    icon: InstagramIcon,
    hoverClass: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:border-emerald-300/50 dark:hover:bg-emerald-300/10 dark:hover:text-emerald-200",
    glowClass: "hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]",
  },
  {
    label: DATA.sosmed.linkedin.name,
    href: DATA.sosmed.linkedin.url,
    icon: LinkedinIcon,
    hoverClass: "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:border-sky-400/50 dark:hover:bg-sky-400/10 dark:hover:text-sky-300",
    glowClass: "hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[92vh] items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(190,242,100,0.16),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.09),transparent_46%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:gap-12 lg:px-8 lg:py-20 xl:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] xl:gap-14 xl:py-24"
      >
        <div className="flex min-w-0 max-w-2xl flex-col items-start gap-8 text-left xl:max-w-none">
          <motion.div variants={itemVariants} className="relative">
            <div className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                <TextType
                  text={["UI/UX Designer", "Front-End Developer", "Creative Technologist"]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2000}
                  showCursor={false}
                />
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <h1 className="w-80 max-w-[8.5ch] text-[clamp(2.75rem,12vw,4.75rem)] font-black uppercase leading-[0.88] text-foreground sm:w-auto sm:max-w-[11ch] sm:text-6xl xl:text-7xl">
              {DATA.call}
            </h1>
            <p className="w-80 max-w-full text-base leading-relaxed text-muted-foreground sm:w-auto sm:max-w-xl sm:text-lg">
              <span className="font-semibold text-foreground">{DATA.description}</span>{" "}
              {DATA.desc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, hoverClass, glowClass }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`group relative flex size-12 items-center justify-center rounded-2xl border border-border/50 bg-background/50 text-muted-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${hoverClass} ${glowClass}`}
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex w-80 max-w-full flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group relative w-full overflow-hidden rounded-full bg-lime-300 px-7 py-6 text-base font-bold text-zinc-950 shadow-[0_18px_45px_-20px_rgba(190,242,100,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-200 sm:w-auto"
            >
              <a href="/pdf/CV.pdf" download>
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <DownloadIcon className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative w-full overflow-hidden rounded-full border-border/60 bg-background/40 px-7 py-6 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-background/70 dark:border-white/20 sm:w-auto"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative mx-auto w-80 min-w-0 max-w-full overflow-visible sm:w-full sm:max-w-[680px] lg:max-w-[740px] xl:max-w-[680px]">
          <div className="pointer-events-none absolute -inset-5 rounded-[2.75rem] bg-[radial-gradient(circle_at_22%_18%,rgba(190,242,100,0.24),transparent_34%),radial-gradient(circle_at_76%_64%,rgba(14,165,233,0.18),transparent_38%)] blur-2xl" />
          <div className="pointer-events-none absolute -inset-px rounded-[2rem] border border-lime-300/30 shadow-[0_0_42px_rgba(190,242,100,0.22),0_0_90px_rgba(14,165,233,0.12)]" />
          <div className="absolute left-[6%] top-[8%] h-[80%] w-[84%] rotate-[-3deg] border-2 border-lime-300/80 shadow-[0_0_35px_rgba(190,242,100,0.18)]" />
          <div className="absolute left-[4%] top-[5%] size-5 rotate-[-3deg] bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.7)]" />
          <div className="absolute right-[7%] top-[72%] size-5 rotate-[-3deg] bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.7)]" />

          <div className="relative aspect-[1.05] min-h-[clamp(300px,82vw,430px)] overflow-visible rounded-[2rem] border border-lime-300/20 bg-background/20 p-4 shadow-[inset_0_0_28px_rgba(190,242,100,0.08),0_0_34px_rgba(190,242,100,0.12)] backdrop-blur-[2px] sm:aspect-[1.32] md:aspect-[1.42]">
            <div className="absolute left-1/2 top-[45%] w-[88%] -translate-x-1/2 -translate-y-1/2 -rotate-2 text-center">
              <p className="select-none text-[clamp(3.7rem,19vw,9.5rem)] font-black uppercase leading-[0.78] text-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:text-white">
                PORT
                <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  FOLIO
                </span>
              </p>
            </div>

            <div className="absolute right-3 top-3 w-[clamp(9.5rem,43vw,10.75rem)] rounded-xl border border-white/10 bg-zinc-950/90 p-2 text-xs text-white shadow-2xl backdrop-blur-xl sm:right-8 sm:top-8 sm:p-2.5">
              {[
                ["Social Media", MousePointer2Icon, "V"],
                ["Thumbnail", FrameIcon, "H"],
                ["UI Design", LayersIcon, "K"],
              ].map(([label, Icon, key], index) => (
                <div key={label as string} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-white/75">
                  {index === 0 ? <CheckIcon className="size-3 text-lime-300" /> : <Icon className="size-3.5" />}
                  <span className="flex-1">{label as string}</span>
                  <span className="text-[10px] text-white/40">{key as string}</span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-[4.6rem] left-1 w-[clamp(9.75rem,52vw,12.8125rem)] rotate-[5deg] rounded-xl border border-white/10 bg-zinc-950/90 p-3 text-white shadow-2xl backdrop-blur-xl sm:bottom-24 sm:left-7">
              <div className="mb-4 text-[10px] font-bold sm:mb-5">2026 Edition</div>
              <div className="flex items-center justify-between text-white/55">
                <div className="flex gap-2">
                  <MousePointer2Icon className="size-3.5" />
                  <FrameIcon className="size-3.5" />
                  <LayersIcon className="size-3.5" />
                </div>
                <span className="flex size-6 items-center justify-center rounded-full bg-blue-500 text-white">
                  <ArrowRightIcon className="size-3.5" />
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border border-white/10 bg-zinc-950/90 p-1.5 text-white shadow-2xl backdrop-blur-xl sm:bottom-6 sm:gap-2 sm:p-2">
              {[MousePointer2Icon, PlusIcon, FrameIcon, PenToolIcon, Code2Icon].map((Icon, index) => (
                <button
                  key={index}
                  aria-label={`Hero tool ${index + 1}`}
                  className={`flex size-8 items-center justify-center rounded-xl transition-colors hover:bg-white/10 sm:size-9 ${index === 0 ? "bg-sky-500 text-white shadow-[0_0_18px_rgba(14,165,233,0.45)]" : "text-white/70"}`}
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>

            <div className="absolute bottom-[35%] right-4 max-w-[42%] truncate rounded-md bg-lime-300 px-3 py-1.5 text-xs font-semibold text-zinc-950 shadow-[0_0_18px_rgba(190,242,100,0.35)] sm:right-20">
              {DATA.name}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/50 lg:flex"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDownIcon className="size-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
