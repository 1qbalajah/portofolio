'use client'

import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  AppWindowIcon,
  ExternalLinkIcon,
  FolderIcon,
  PaletteIcon,
  SparklesIcon
} from 'lucide-react'

import BlurFade from '@/components/magicui/blur-fade'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DATA } from '@/data/resume'
import { useAdaptivePerformance } from '@/hooks/use-adaptive-performance'

type Project = typeof DATA.projects[number]
type ProjectCategory = 'Semua' | Project['category']

const filterTabs: {
  id: ProjectCategory
  label: string
  icon: React.ElementType
}[] = [
  { id: 'Semua', label: 'Semua', icon: SparklesIcon },
  { id: 'Aplikasi Web', label: 'Aplikasi Web', icon: AppWindowIcon },
  { id: 'UI/UX Design', label: 'UI/UX Design', icon: PaletteIcon },
  { id: 'Aplikasi Pribadi', label: 'Aplikasi Pribadi', icon: FolderIcon }
]

function ProjectCard ({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.links[0]
  const maybeRepoUrl = 'repoUrl' in project ? project.repoUrl : undefined
  const repoUrl =
    typeof maybeRepoUrl === 'string' && maybeRepoUrl.length > 0
      ? maybeRepoUrl
      : undefined
  const { isLiteMode, prefersReducedMotion } = useAdaptivePerformance()
  const reduceMotion = isLiteMode || prefersReducedMotion

  return (
    <BlurFade delay={0.08 + index * 0.04}>
      <motion.article
        layout
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
        className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-lime-300/35'
      >
        <div className='relative aspect-[16/10] w-full overflow-hidden bg-muted/40'>
          <Image
            src={project.image}
            alt={project.title}
            width={960}
            height={600}
            priority={index < 2}
            sizes='(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
            className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute left-4 top-4 rounded-full border border-white/15 bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md'>
            {project.category}
          </div>
        </div>

        <div className='flex flex-1 flex-col p-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-bold leading-tight'>{project.title}</h3>
            <time className='mt-1 block text-xs text-muted-foreground'>
              {project.dates}
            </time>
          </div>

          <p className='mb-6 flex-1 text-sm leading-relaxed text-muted-foreground'>
            {project.desc}
            <span className='font-semibold text-foreground'>
              {project.textbold}
            </span>{' '}
            {project.description}
          </p>

          <div className='mb-6 flex flex-wrap gap-2'>
            {project.technologies.map(tech => (
              <Badge
                key={`${project.id}-${tech}`}
                variant='outline'
                className='border-border/50 bg-background/50 text-xs backdrop-blur-md'
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className='mt-auto flex flex-wrap gap-3'>
            {primaryLink?.href && (
              <Button
                asChild
                className='group/button min-h-11 flex-1 rounded-full border border-border/50 bg-background/50 px-4 text-foreground shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-lime-300/50 hover:bg-lime-300/10 sm:min-w-36'
              >
                <Link
                  href={primaryLink.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Demo
                  <ExternalLinkIcon className='ml-2 size-4 transition-transform duration-300 group-hover/button:translate-x-0.5' />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    </BlurFade>
  )
}

export function ProjectsSection () {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Semua')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Semua') return DATA.projects
    return DATA.projects.filter(project => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section
      id='projects'
      className='w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8'
    >
      <div className='mx-auto w-full max-w-7xl'>
        <BlurFade delay={0.1}>
          <div className='mb-12 flex flex-col items-center justify-center text-center'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-xl'>
              <FolderIcon className='size-4 text-lime-600 dark:text-lime-300' />
              <span className='text-sm font-medium text-muted-foreground'>
                Portfolio Showcase
              </span>
            </div>

            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Showcase Project Application
            </h2>

            <p className='mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              A curated collection of application and design projects based on
              solution type, design process, and user needs.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className='mb-10 flex flex-wrap items-center justify-center gap-3'>
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                type='button'
                onClick={() => setActiveFilter(tab.id)}
                className={`group relative flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-5 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 text-zinc-950 shadow-lg shadow-lime-300/25'
                    : 'border border-border/50 bg-background/50 text-muted-foreground backdrop-blur-xl hover:border-lime-300/50 hover:bg-lime-300/10 hover:text-foreground'
                }`}
              >
                <tab.icon className='size-4' />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </BlurFade>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
