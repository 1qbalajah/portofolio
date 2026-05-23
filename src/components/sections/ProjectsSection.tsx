'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  FolderIcon,
  TrophyIcon,
  BriefcaseIcon,
  ExternalLinkIcon,
  GithubIcon,
  GlobeIcon,
  CalendarIcon,
} from 'lucide-react';

// Filter tabs
type FilterTab = 'projects' | 'certificates' | 'experience';

const filterTabs: { id: FilterTab; label: string; icon: React.ElementType }[] = [
  { id: 'projects', label: 'Projects', icon: GlobeIcon },
  { id: 'certificates', label: 'Certificates', icon: TrophyIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
];

// Project Card Component
type ProjectType = typeof DATA.projects[number];
type CertificateType = typeof DATA.certificates[number];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const primaryLink = project.links[0];

  return (
    <BlurFade delay={0.1 + index * 0.05}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]'
      >
        {/* Image */}
        <div className='relative h-64 w-full overflow-hidden bg-muted/40'>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center text-muted-foreground'>
              No image available
            </div>
          )}

          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

          {/* View button overlay */}
          <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <span className='rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur-md'>
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-grow flex-col p-6'>
          <h3 className='mb-1 text-xl font-bold'>{project.title}</h3>

          <time className='mb-4 text-xs text-muted-foreground'>{project.dates}</time>

          <p className='mb-6 flex-grow text-sm text-muted-foreground'>
            {project.desc}
            <span className='font-semibold text-foreground'>{project.textbold}</span>{' '}
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className='mb-6 flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant='outline'
                className='border-border/50 bg-background/50 text-xs backdrop-blur-md transition-colors duration-300 hover:border-violet-500/50 hover:bg-violet-500/10'
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          {primaryLink && (
            <Button
              asChild
              className='group/button w-full overflow-hidden rounded-full border border-border/50 bg-background/50 text-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)]'
            >
              <Link
                href={primaryLink.href}
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center'
              >
                <span className='mr-0 max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/button:mr-2 group-hover/button:max-w-6 group-hover/button:opacity-100'>
                  <ExternalLinkIcon className='size-4' />
                </span>
                <span className='transition-transform duration-300 group-hover/button:translate-x-1'>
                  View Project
                </span>
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    </BlurFade>
  );
}

// Certificate Card Component
function CertificateCard({
  cert,
  index,
}: {
  cert: CertificateType;
  index: number;
}) {
  return (
    <BlurFade delay={0.1 + index * 0.05}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)]'
      >
        {/* Issuer Logo & Title */}
        <div className='mb-4 flex items-start gap-4'>
          <div className='relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background shadow-sm'>
            <img
              src={cert.image}
              alt={`${cert.title} logo`}
              className='size-10 object-contain'
            />
          </div>

          <div className='min-w-0 flex-1 text-left'>
            <h3 className='text-lg font-bold leading-tight'>{cert.title}</h3>
            <div className='mt-1 flex flex-wrap items-center gap-2 text-sm'>
              <p className='font-medium text-emerald-600 dark:text-emerald-400'>
                {cert.issuer}
              </p>
              <span className='text-muted-foreground'>•</span>
              <time className='text-muted-foreground'>{cert.dates}</time>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className='mb-6 flex-grow text-sm text-muted-foreground'>
          {cert.description}
        </p>

        {/* View Certificate Button */}
        {cert.links?.length > 0 && (
          <Button
            asChild
            variant='outline'
            size='sm'
            className='group/button w-full rounded-full transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10'
          >
            <Link href={cert.links[0].href} target='_blank' rel='noreferrer'>
              <TrophyIcon className='mr-2 size-4 text-emerald-600 dark:text-emerald-400' />
              View Certificate
              <ExternalLinkIcon className='ml-2 size-3 opacity-0 transition-all duration-300 group-hover/button:opacity-100' />
            </Link>
          </Button>
        )}
      </motion.div>
    </BlurFade>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('projects');

  return (
    <section id='projects' className='w-full py-24'>
      {/* Section Header */}
      <BlurFade delay={0.1}>
        <div className='mb-12 flex flex-col items-center justify-center text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl'>
            <FolderIcon className='size-4 text-violet-600 dark:text-violet-400' />
            <span className='text-sm font-medium text-muted-foreground'>
              Portfolio Showcase
            </span>
          </div>

          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Check out my latest work
          </h2>

          <p className='mx-auto mt-4 max-w-800px text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            A curated collection of projects, certificates, and design explorations
            showcasing my skills and passion for creating impactful digital
            experiences.
          </p>
        </div>
      </BlurFade>

      {/* Filter Tabs */}
      <BlurFade delay={0.2}>
        <div className='mb-12 flex flex-wrap items-center justify-center gap-3'>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`
                group relative flex items-center gap-2 rounded-full px-5 py-2.5
                transition-all duration-300
                ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
                    : 'border border-border/50 bg-background/50 text-muted-foreground hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-foreground backdrop-blur-xl'
                }
              `}
            >
              <tab.icon className='size-4' />
              <span className='text-sm font-medium'>{tab.label}</span>
            </button>
          ))}
        </div>
      </BlurFade>

      {/* Projects Grid */}
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2'>
        <AnimatePresence mode='wait'>
          {activeFilter === 'projects' && (
            <>
              {DATA.projects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </>
          )}

          {activeFilter === 'certificates' && (
            <>
              {DATA.certificates.map((cert, idx) => (
                <CertificateCard key={`${cert.title}-${idx}`} cert={cert} index={idx} />
              ))}
            </>
          )}

          {activeFilter === 'experience' && (
            <>
              {DATA.experience.map((exp, idx) => {
                const title = exp.experience ?? "Experience";
                return (
                  <BlurFade key={title} delay={0.1 + idx * 0.05}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]'
                    >
                      <div className='mb-4 flex items-start gap-4'>
                        {exp.logoUrl ? (
                          <img src={exp.logoUrl} alt={title} className='size-10 rounded-lg object-contain' />
                        ) : (
                          <div className='flex size-12 items-center justify-center rounded-xl border border-border/50 bg-background'>
                            <span className='text-lg font-bold text-amber-600'>{title.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <h3 className='text-xl font-bold'>{title}</h3>
                          <p className='text-sm font-medium text-amber-600 dark:text-amber-400'>{exp.role}</p>
                        </div>
                      </div>
                      <p className='flex-grow text-sm leading-relaxed text-muted-foreground'>
                        {exp.description}
                      </p>
                      <div className='mt-4 flex items-center gap-2 text-xs text-muted-foreground'>
                        <CalendarIcon className='size-3' />
                        {exp.start} - {exp.end}
                      </div>
                    </motion.div>
                  </BlurFade>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}