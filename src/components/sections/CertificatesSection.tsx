"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AwardIcon, ExternalLinkIcon } from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { useAdaptivePerformance } from "@/hooks/use-adaptive-performance";

export function CertificatesSection() {
  const { isLiteMode, prefersReducedMotion } = useAdaptivePerformance();
  const reduceMotion = isLiteMode || prefersReducedMotion;

  return (
    <section id="certificates" className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <BlurFade delay={0.1}>
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl">
              <AwardIcon className="size-4 text-emerald-600 dark:text-emerald-300" />
              <span className="text-sm font-medium text-muted-foreground">
                Credentials
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Certificates
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DATA.certificates.map((cert, index) => (
            <BlurFade key={cert.id} delay={0.08 + index * 0.04}>
              <motion.article
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-emerald-500/30"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-background">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} logo`}
                      width={56}
                      height={56}
                      loading="lazy"
                      sizes="56px"
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                      <p className="font-medium text-emerald-600 dark:text-emerald-300">
                        {cert.issuer}
                      </p>
                      <span className="text-muted-foreground">•</span>
                      <time className="text-muted-foreground">{cert.dates}</time>
                    </div>
                  </div>
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                {cert.links?.[0] && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-auto w-full rounded-full transition-colors duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10"
                  >
                    <Link href={cert.links[0].href} target="_blank" rel="noreferrer">
                      View Certificate
                      <ExternalLinkIcon className="ml-2 size-3.5" />
                    </Link>
                  </Button>
                )}
              </motion.article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
