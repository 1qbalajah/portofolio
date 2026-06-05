import Image from "next/image";
import { BriefcaseIcon, CalendarIcon, GraduationCapIcon } from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const organisationExperience = DATA.experience.filter((item) => {
  const title = item.experience?.toLowerCase() ?? "";
  const role = item.role?.toLowerCase() ?? "";

  return (
    item.location === "School" ||
    title.includes("council") ||
    title.includes("ruang tunggu") ||
    role.includes("entrepreneurship")
  );
});

export function OrganisationEducationSection() {
  return (
    <section id="organisation-education" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <BlurFade delay={0.1}>
          <div className="h-full rounded-3xl border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-lime-600 dark:text-lime-300">
                <BriefcaseIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Leadership Track</p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Organisation</h2>
              </div>
            </div>

            <div className="relative ml-2 space-y-5 pl-7">
              <span className="absolute bottom-4 left-2 top-2 w-px bg-gradient-to-b from-lime-300/60 via-border to-transparent" />
              {organisationExperience.map((item) => {
                const title = item.experience ?? "Organisation";

                return (
                  <div key={`${title}-${item.start}`} className="relative">
                    <span className="absolute -left-[1.65rem] top-5 z-10 size-3 rounded-full border-2 border-background bg-lime-300 shadow-[0_0_0_4px_rgba(190,242,100,0.14)]" />
                    <article className="rounded-2xl border border-lime-300/15 bg-background/40 p-4 transition-colors duration-300 hover:border-lime-300/35">
                      <div className="flex items-start gap-4">
                        {item.logoUrl ? (
                          <Image
                            src={item.logoUrl}
                            alt={title}
                            width={48}
                            height={48}
                            sizes="48px"
                            className="size-12 shrink-0 rounded-xl object-contain"
                          />
                        ) : (
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background text-lg font-bold text-lime-600">
                            {title.charAt(0)}
                          </span>
                        )}

                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold leading-tight">{title}</h3>
                          <p className="mt-1 text-sm font-medium text-lime-600 dark:text-lime-300">
                            {item.role}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarIcon className="size-3.5" />
                            <span>
                              {item.start} - {item.end}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.18}>
          <div className="h-full rounded-3xl border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
                <GraduationCapIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Learning Path</p>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Education</h2>
              </div>
            </div>

            <div className="space-y-4">
              {DATA.education.map((item) => (
                <article
                  key={`${item.school}-${item.start}`}
                  className="rounded-2xl border border-cyan-400/15 bg-background/40 p-4 transition-colors duration-300 hover:border-cyan-400/35"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={item.logoUrl}
                      alt={item.school}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="size-12 shrink-0 rounded-xl object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold leading-tight">{item.school}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="size-3.5" />
                        <span>
                          {item.start} - {item.end}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
