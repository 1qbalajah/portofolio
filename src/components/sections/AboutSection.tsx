'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'
import { DATA } from '@/data/resume'
import ProfileCardComponent from '@/components/ProfileCard'
import { GraduationCapIcon, CalendarIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react'

// Animated Counter Component
function AnimatedCounter ({
  value,
  duration = 2000
}: {
  value: number
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }, [value, duration])

  return <span>{count}+</span>
}

export function AboutSection () {
  return (
    <section
      id='about'
      className='flex justify-center py-24 px-4 sm:px-6 lg:px-8'
    >
      {/* Main Border Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-7xl overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl'
      >
        {/* 2-Column Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
          {/* Left Column - About Content */}
          <div className='flex flex-col gap-8 p-8 lg:p-12'>
            {/* Heading */}
            <div className='relative inline-block'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                About Me
              </h2>
              <span className='absolute -bottom-2 left-0 h-[4px] w-[40%] bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full' />
            </div>

            {/* Description */}
            <div>
              <p className='text-lg leading-relaxed text-muted-foreground'>
                {DATA.about}
                <span className='font-semibold text-foreground'>
                  {' '}
                  {DATA.about1}{' '}
                </span>
                {DATA.about2}
              </p>
            </div>

            {/* Education Only Column */}
            <div className='space-y-4'>
              <h3 className='flex items-center gap-2 text-lg font-bold tracking-tight'>
                <GraduationCapIcon className='size-5 text-violet-600 dark:text-violet-400' />
                Education
              </h3>

              {DATA.education.map(edu => (
                <div
                  key={edu.school}
                  className='flex flex-col gap-3 rounded-2xl border border-border/50 bg-background/30 p-4 sm:flex-row sm:items-center sm:justify-between'
                >
                  {/* Kiri: Logo + Sekolah + Gelar */}
                  <div className='flex items-start gap-3'>
                    <img
                      src={edu.logoUrl}
                      alt={edu.school}
                      className='size-8 shrink-0 rounded object-contain'
                    />
                    <div>
                      <h4 className='text-sm font-semibold'>{edu.school}</h4>
                      <p className='text-xs text-muted-foreground'>
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {/* Kanan: Tahun/Periode */}
                  <div className='flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground sm:ml-auto'>
                    <CalendarIcon className='size-3' />
                    <span>
                      {edu.start} - {edu.end}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row: Projects, Certificates, Experience */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-background/30 p-4 text-center'>
                <span className='text-2xl font-bold text-violet-600 dark:text-violet-400'>
                  <AnimatedCounter value={DATA.projects.length} />
                </span>
                <span className='text-xs text-muted-foreground'>Projects</span>
              </div>
              <div className='flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-background/30 p-4 text-center'>
                <span className='text-2xl font-bold text-amber-600 dark:text-amber-400'>
                  <AnimatedCounter value={DATA.certificates.length} />
                </span>
                <span className='text-xs text-muted-foreground'>
                  Certificates
                </span>
              </div>
              <div className='flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-background/30 p-4 text-center'>
                <span className='text-2xl font-bold text-emerald-600 dark:text-emerald-400'>
                  <AnimatedCounter value={DATA.experience.length} />
                </span>
                <span className='text-xs text-muted-foreground'>
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className='flex items-center justify-center p-8 lg:p-12'>
            <ProfileCardComponent
              avatarUrl='/iqbal.JPG'
              name={DATA.name}
              handle={DATA.sosmed.instagram.username}
              status='Available'
              contactText='Contact Me'
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
