"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CertificatesSection() {
  return (
    <section id="certificates" className="w-full py-24">
      <BlurFade delay={0.1}>
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              Achievement & Certification
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Proof of My Skills & Dedication
            </h2>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
  A collection of certifications that reflect my commitment to continuous
  learning, skill development, and professional growth.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {DATA.certificates.map((cert, idx) => (
          <BlurFade key={cert.title} delay={0.2 + idx * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
            >
              <div className="flex h-full flex-col">
                <h3 className="mb-2 text-xl font-bold">{cert.title}</h3>

                <p className="mb-1 text-sm font-medium text-foreground">
                  Issuer: {cert.issuer}
                </p>

                <time className="mb-4 text-xs text-muted-foreground">
                  {cert.dates}
                </time>

                <p className="mb-6 flex-grow text-sm text-muted-foreground">
                  {cert.description}
                </p>

                {cert.links && cert.links.length > 0 && (
                  <div className="mt-auto">
                    {cert.links.map((link, i) => (
                      <Button
                        key={i}
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Link href={link.href} target="_blank">
                          {link.icon}
                          <span className="ml-2">{link.title}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
