"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

const socialLinks = [
  {
    label: DATA.sosmed.github.name,
    href: DATA.sosmed.github.url,
    icon: GithubIcon,
    hoverClass: "hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/10 dark:hover:text-violet-300",
  },
  {
    label: DATA.sosmed.instagram.name,
    href: DATA.sosmed.instagram.url,
    icon: InstagramIcon,
    hoverClass: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-600 dark:hover:border-pink-400/50 dark:hover:bg-pink-400/10 dark:hover:text-pink-300",
  },
  {
    label: DATA.sosmed.linkedin.name,
    href: DATA.sosmed.linkedin.url,
    icon: LinkedinIcon,
    hoverClass: "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:border-sky-400/50 dark:hover:bg-sky-400/10 dark:hover:text-sky-300",
  },
  {
    label: "Email",
    href: `mailto:${DATA.contact.email}`,
    icon: MailIcon,
    hoverClass: "hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-600 dark:hover:border-red-400/50 dark:hover:bg-red-400/10 dark:hover:text-red-300",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Main Border Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-8 lg:p-12 text-center">
          {/* Heading */}
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Connect With Me
            </h2>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[4px] w-[40%] bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full" />
          </div>

          {/* Description */}
          <p className="max-w-xl text-lg text-muted-foreground">
            Feel free to reach out through any of my social media platforms or send me an email. I would love to hear from you!
          </p>

          {/* Social Links */}
          <BlurFade delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`
                    group relative flex items-center justify-center
                    size-14 rounded-2xl
                    border border-border/50 bg-background/50 backdrop-blur-xl
                    text-muted-foreground
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-110
                    ${hoverClass}
                  `}
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </BlurFade>

          {/* Email */}
          <div className="mt-4">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {DATA.contact.email}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}