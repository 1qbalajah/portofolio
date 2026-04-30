"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

export function OrganizationSection() {
  return (
    <section id="organization" className="py-24 w-full max-w-4xl mx-auto">
      {/* HEADER */}
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="space-y-2 gap-4 flex flex-col items-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Achievements & Certifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Proof of My Skills & Dedication
            </h2>
            <p>These certifications and achievements represent my dedication to continuous learning, skill development, and real-world problem solving.</p>
          </div>
        </div>
      </BlurFade>

      {/* LIST STYLE (kayak hackathon) */}
      <BlurFade delay={0.2}>
        <ul className="ml-4 divide-y divide-dashed border-l">
          {DATA.organization.map((org, idx) => (
            <BlurFade key={org.organization} delay={0.25 + idx * 0.05}>
              <li className="relative pl-6 py-6">
                {/* DOT */}
                <div className="absolute -left-2 top-6 h-4 w-4 rounded-full bg-foreground" />

                {/* CONTENT */}
                <div className="flex items-center gap-4">
                  {org.logoUrl && (
                    <div className="h-12 w-12 shrink-0 rounded-full overflow-hidden border bg-muted">
                      <img
                        src={org.logoUrl}
                        alt={org.organization}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold">
                      {org.organization}
                    </h3>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {org.role}
                      </span>
                      <span>
                        {org.start} - {org.end}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {org.description}
                </p>
              </li>
            </BlurFade>
          ))}
        </ul>
      </BlurFade>
    </section>
  );
}