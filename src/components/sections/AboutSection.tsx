import { DATA } from '@/data/resume'
import ProfileCardComponent from '@/components/ProfileCard'
import { Code2Icon, PenToolIcon } from 'lucide-react'

const whyChooseMeHighlights = [
  {
    title: 'UI/UX Design',
    icon: PenToolIcon,
    description:
      'Focused on creating modern, intuitive, and user-centered digital experiences through wireframes, prototypes, and design systems.'
  },
  {
    title: 'Frontend Development',
    icon: Code2Icon,
    description:
      'Experienced in building responsive and intuitive web interfaces while ensuring performance, usability, accessibility, and maintainable code.'
  }
]

export function AboutSection () {
  const stats = [
    {
      label: 'Projects',
      value: DATA.projects.length,
      className: 'from-lime-400 to-emerald-500'
    },
    {
      label: 'Certificates',
      value: DATA.certificates.length,
      className: 'from-emerald-400 to-cyan-400'
    },
    {
      label: 'Organisation',
      value: DATA.experience.length,
      className: 'from-lime-300 via-emerald-500 to-cyan-400'
    }
  ]

  return (
    <section
      id='about'
      className='flex justify-center py-24 px-4 sm:px-6 lg:px-8'
    >
      {/* Main Border Container */}
      <div
        className='w-full max-w-7xl overflow-hidden rounded-3xl border border-lime-300/20 bg-background/50 shadow-[0_0_60px_-28px_rgba(190,242,100,0.5)] backdrop-blur-xl'
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
              <span className='absolute -bottom-2 left-0 h-[4px] w-[40%] rounded-full bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 shadow-[0_0_18px_rgba(190,242,100,0.45)]' />
            </div>

            {/* Description */}
            <div>
              <p className='text-lg leading-relaxed text-muted-foreground'>
                <span className='font-semibold text-foreground'>
                  {DATA.about0}
                </span>
                
                {DATA.about}
                <span className='font-semibold text-foreground'>
                  {' '}
                  {DATA.about1}{' '}
                </span>
                {DATA.about2}
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-bold tracking-tight'>Why Choose Me</h3>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {whyChooseMeHighlights.map(({ title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className='rounded-2xl border border-border/50 bg-background/35 p-4 transition-colors duration-300 hover:border-lime-300/35'
                  >
                    <div className='mb-3 flex items-center gap-3'>
                      <span className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lime-600 dark:text-lime-300'>
                        <Icon className='size-4' />
                      </span>
                      <h4 className='text-base font-bold'>{title}</h4>
                    </div>
                    <p className='text-sm leading-relaxed text-muted-foreground'>
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Stats Row: Projects, Certificates, Experience */}
            <div className='grid grid-cols-3 gap-4'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-background/30 p-4 text-center'
                >
                  <span
                    className={`bg-gradient-to-r ${stat.className} bg-clip-text text-2xl font-bold text-transparent`}
                  >
                    {stat.value}+
                  </span>
                  <span className='text-xs text-muted-foreground'>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className='flex items-center justify-center p-8 lg:p-12'>
            <ProfileCardComponent
              avatarUrl='/me.webp'
              handle={DATA.sosmed.instagram.username}
              status='Available'
              contactText='Contact Me'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
