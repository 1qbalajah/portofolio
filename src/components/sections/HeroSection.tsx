"use client";

import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { ProfileCard } from "@/components/ProfileCard";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { Highlight } from "@/components/ui/highlight";
import { DownloadIcon, ArrowRightIcon } from "lucide-react";
import TextType from "@/components/TextType";
import { Meteors } from "@/components/ui/meteors";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden pb-12"
    >

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
  <Meteors />
        <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
          <BlurFade delay={0.1}>
            <div className="flex h-8 items-center justify-center gap-2 text-2xl font-semibold text-muted-foreground lg:justify-start">
              <TextType
                text={[
                  "Welcome to my portfolio",
                  "Front-end Developer",
                  "UI/UX Designer",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
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

          <BlurFade delay={0.4}>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  Download CV <DownloadIcon className="ml-2 size-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#projects">
                  View Projects <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
