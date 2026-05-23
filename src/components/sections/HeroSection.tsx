"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  ChevronDownIcon,
} from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

const socialLinks = [
  {
    label: DATA.sosmed.github.name,
    href: DATA.sosmed.github.url,
    icon: GithubIcon,
    hoverClass: "hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/10 dark:hover:text-violet-300",
    glowClass: "hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
  },
  {
    label: DATA.sosmed.instagram.name,
    href: DATA.sosmed.instagram.url,
    icon: InstagramIcon,
    hoverClass: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-600 dark:hover:border-pink-400/50 dark:hover:bg-pink-400/10 dark:hover:text-pink-300",
    glowClass: "hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
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
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Radial gradient spotlight */}
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />

        {/* Corner accents */}
        <div className="absolute right-0 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl" />
        <div className="absolute bottom-20 left-0 h-32 w-32 rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent blur-2xl" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-6 py-20 text-center"
      >
        {/* Top Badge - Role Indicator */}
        <motion.div variants={itemVariants} className="relative">
          <div className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
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

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-gradient bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            {DATA.call}
          </h1>
          {/* Glow effect behind text */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-24 w-[300px] rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-pink-500/30 blur-3xl md:w-[400px] lg:w-[500px]" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="max-w-[650px]">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            <span className="text-foreground font-medium">{DATA.description}</span>{" "}
            {DATA.desc}
          </p>
        </motion.div>

        {/* Social Media Buttons */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon, hoverClass, glowClass }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`
                  group relative flex items-center justify-center
                  size-12 rounded-2xl
                  glass-card
                  text-muted-foreground
                  transition-all duration-300
                  hover:-translate-y-2 hover:scale-110
                  ${hoverClass} ${glowClass}
                `}
              >
                {/* Inner glow on hover */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary Button */}
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1 dark:shadow-violet-400/20"
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

            {/* Secondary Button */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:hover:bg-white/10"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Scroll Hint */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDownIcon className="size-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}