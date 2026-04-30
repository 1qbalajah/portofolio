"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 w-full max-w-4xl mx-auto">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">
          Certificates
        </h2>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.certificates.map((cert, idx) => (
          <BlurFade key={cert.title} delay={0.2 + idx * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl p-6 border border-border/50 bg-background/50 backdrop-blur-md shadow-sm hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)] hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-sm font-medium text-foreground mb-1">
                  Issuer: {cert.issuer}
                </p>
                <time className="text-xs text-muted-foreground mb-4">
                  {cert.dates}
                </time>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {cert.description}
                </p>
                {cert.links && cert.links.length > 0 && (
                  <div className="mt-auto">
                    {cert.links.map((link, i) => (
                      <Button key={i} asChild variant="outline" size="sm" className="w-full">
                        <Link href={link.href} target="_blank">
                          {link.icon} <span className="ml-2">{link.title}</span>
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
