"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import TextType from "@/components/TextType";
import ProfileCard from "@/components/ProfileCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { DATA } from "@/data/resume";

const socialLinks = [
  {
    label: DATA.sosmed.github.name,
    href: DATA.sosmed.github.url,
    icon: GithubIcon,
    className:
      "hover:border-zinc-500 hover:bg-zinc-500/10 hover:text-zinc-800 dark:hover:border-white dark:hover:bg-white/10 dark:hover:text-white",
  },
  {
    label: DATA.sosmed.instagram.name,
    href: DATA.sosmed.instagram.url,
    icon: InstagramIcon,
    className:
      "hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-600 dark:hover:border-pink-400 dark:hover:text-pink-300",
  },
  {
    label: DATA.sosmed.linkedin.name,
    href: DATA.sosmed.linkedin.url,
    icon: LinkedinIcon,
    className:
      "hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-300",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85vh] items-center justify-center pb-12"
    >
      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
          <BlurFade delay={0.1}>
            <div className="flex h-8 items-center justify-center gap-2 text-2xl font-semibold text-muted-foreground lg:justify-start">
              <TextType
                text={[
                  "Welcome to my portfolio",
                  "私のポートフォリオへようこそ",
                  "It's Me",
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">
              <AuroraText>{DATA.name}</AuroraText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              <Highlight className="text-foreground">
                {DATA.description}
              </Highlight>
              {DATA.desc}
            </p>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon, className }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex size-11 items-center justify-center rounded-full border border-zinc-300/70 bg-zinc-500/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:bg-white/5 ${className}`}
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  Download CV
                  <DownloadIcon className="ml-2 size-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <ProfileCard
            name="Front-end Dev & UI/UX Designer"
            handle="_nglbal"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/ibenk.png"
            showUserInfo
            enableTilt
            onContactClick={() => {
              window.open(
                DATA.sosmed.instagram.url,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
