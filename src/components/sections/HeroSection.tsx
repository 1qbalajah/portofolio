"use client";

import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ProfileCard } from "@/components/ProfileCard";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { Highlight } from "@/components/ui/highlight";
import { DownloadIcon, ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center pb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
          <BlurFade delay={0.1}>
            <div className="text-2xl font-semibold text-muted-foreground flex items-center justify-center lg:justify-start gap-2 h-8">
              <TypingAnimation
                duration={150}
                className="text-2xl"
              >
                Hello こんにちは 你好
              </TypingAnimation>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              <AuroraText>{DATA.name}</AuroraText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed mt-4">
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
              <Button asChild variant="outline" size="lg" className="rounded-full">
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
