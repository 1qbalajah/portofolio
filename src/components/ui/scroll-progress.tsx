'use client'

import { motion, useScroll } from 'motion/react'
import { cn } from '@/lib/utils'

export function ScrollProgress ({ className, ...props }: any) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 shadow-[0_0_18px_rgba(190,242,100,0.55)]',
        className
      )}
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%'
      }}
      {...props}
    />
  )
}
