import {
  ArrowUpRightIcon,
  CheckIcon,
  Code2Icon,
  DownloadIcon,
  Grid3X3Icon,
  MousePointer2Icon,
  PenToolIcon,
} from "lucide-react";

import { DATA } from "@/data/resume";

const heroSkills = ["UI/UX Design", "Front-end Development", "Problem Solving"];
const editionItems = ["Creative Projects", "Design Systems", "Frontend Apps"];
const toolbarItems = [
  { label: "Cursor", icon: MousePointer2Icon, active: true },
  { label: "Grid", icon: Grid3X3Icon },
  { label: "Design", icon: PenToolIcon },
  { label: "Code", icon: Code2Icon },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center px-4 py-16 text-foreground sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(hsl(var(--foreground)/0.045)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(66vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,255,77,0.18),rgba(6,182,212,0.1)_46%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(217,255,77,0.16),rgba(6,182,212,0.12)_44%,transparent_72%)]" />

      <div className="hero-fade-up relative flex min-h-[min(800px,calc(100svh-3rem))] w-full max-w-6xl flex-col items-center justify-center overflow-visible text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[58%] min-h-[390px] w-[min(90vw,980px)] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[40px] border border-[#d9ff4d]/80 shadow-[0_0_44px_rgba(217,255,77,0.14)] dark:border-[#d9ff4d]/55 dark:shadow-[0_0_52px_rgba(217,255,77,0.12)]" />
        <div className="pointer-events-none absolute left-[10%] top-[20%] -z-10 size-5 rotate-[-2deg] rounded-[4px] bg-[#d9ff4d] shadow-[0_0_20px_rgba(217,255,77,0.65)] sm:size-7" />
        <div className="pointer-events-none absolute bottom-[18%] right-[10%] -z-10 size-5 rotate-[-2deg] rounded-[4px] bg-[#d9ff4d] shadow-[0_0_20px_rgba(217,255,77,0.65)] sm:size-7" />

        <div className="absolute right-0 top-[15%] hidden w-60 rounded-[22px] border border-white/10 bg-[#111111]/95 p-4 text-left text-white shadow-[0_24px_70px_rgba(17,17,17,0.24)] backdrop-blur-md dark:bg-white/10 md:block xl:right-[4%]">
          <div className="space-y-3">
            {heroSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 text-sm font-medium text-white/88">
                <CheckIcon className="size-4 text-[#d9ff4d]" />
                <span className="flex-1">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[15%] left-0 hidden w-60 rotate-[5deg] rounded-[22px] border border-white/10 bg-[#111111]/95 p-5 text-left text-white shadow-[0_24px_70px_rgba(17,17,17,0.24)] backdrop-blur-md dark:bg-white/10 md:block xl:left-[4%]">
          <p className="mb-4 text-sm font-black">2026 Edition</p>
          <div className="space-y-2 text-xs font-medium text-white/64">
            {editionItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full bg-[#d9ff4d] text-[#111111]">
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>

        <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-9 px-2">
          <div className="hero-name-outline">
            <span className="hero-name-chip relative z-10 inline-flex rounded-full px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur-md">
              {DATA.call}
            </span>
          </div>

          <h1 className="max-w-[calc(100vw-2rem)] font-display text-[clamp(1.75rem,7.5vw,2.4rem)] font-black leading-[0.95] tracking-[-0.025em] text-foreground sm:text-[clamp(3rem,8vw,5rem)] md:text-[clamp(4rem,8vw,6rem)] xl:text-[clamp(5rem,10vw,8rem)]">
            <span className="block whitespace-nowrap">UI/UX Designer</span>
            <span className="block whitespace-nowrap">Front-end Developer</span>
          </h1>

          <p className="max-w-[min(34rem,calc(100vw-2rem))] text-balance text-base font-medium leading-relaxed text-foreground/62 sm:text-lg md:max-w-2xl">
            Designing clean user experiences and building sharp, responsive interfaces for modern digital products.
          </p>

          <div className="flex w-80 max-w-[calc(100vw-2rem)] flex-col items-stretch justify-center gap-3 sm:w-full sm:max-w-none sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#111111] px-7 text-base font-semibold text-white shadow-[0_18px_42px_-24px_rgba(17,17,17,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b1b1b] dark:bg-white dark:text-[#111111] dark:hover:bg-lime-100"
            >
              Lihat Project
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href="/pdf/CV.pdf"
              download
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-foreground bg-transparent px-7 text-base font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-foreground/5 dark:border-foreground/70 dark:hover:bg-foreground/10"
            >
              Download CV
              <DownloadIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 rounded-[22px] border border-white/10 bg-[#111111]/95 p-2 text-white shadow-[0_24px_70px_rgba(17,17,17,0.24)] backdrop-blur-md dark:bg-white/10 sm:absolute sm:bottom-[3%] sm:left-1/2 sm:mt-0 sm:-translate-x-1/2">
          {toolbarItems.map(({ label, icon: Icon, active }) => (
            <span
              key={label}
              aria-label={label}
              className={`flex size-11 items-center justify-center rounded-2xl ${
                active ? "bg-[#d9ff4d] text-[#111111]" : "text-white/72"
              }`}
            >
              <Icon className="size-4" />
            </span>
          ))}
        </div>

        <div className="mt-7 grid w-80 max-w-[calc(100vw-2rem)] grid-cols-1 gap-3 md:hidden">
          <div className="rounded-[20px] bg-[#111111] p-4 text-left text-sm font-medium text-white shadow-[0_20px_60px_rgba(17,17,17,0.2)]">
            <div className="space-y-2">
              {heroSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <CheckIcon className="size-3.5 text-[#d9ff4d]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rotate-[2deg] rounded-[20px] bg-[#111111] p-4 text-left text-white shadow-[0_20px_60px_rgba(17,17,17,0.2)]">
            <p className="mb-3 text-sm font-black">2026 Edition</p>
            <div className="grid grid-cols-1 gap-1 text-xs font-medium text-white/64">
              {editionItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
