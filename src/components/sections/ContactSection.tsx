import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

const socialLinks = [
  {
    label: DATA.sosmed.github.name,
    href: DATA.sosmed.github.url,
    icon: GithubIcon,
    hoverClass: "hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:border-lime-300/50 dark:hover:bg-lime-300/10 dark:hover:text-lime-200",
  },
  {
    label: DATA.sosmed.instagram.name,
    href: DATA.sosmed.instagram.url,
    icon: InstagramIcon,
    hoverClass: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:border-emerald-300/50 dark:hover:bg-emerald-300/10 dark:hover:text-emerald-200",
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
    hoverClass: "hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:border-lime-300/50 dark:hover:bg-lime-300/10 dark:hover:text-lime-200",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-7xl overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-8 lg:p-12 text-center">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Connect With Me
            </h2>
            <span className="absolute -bottom-2 left-1/2 h-[4px] w-[40%] -translate-x-1/2 rounded-full bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 shadow-[0_0_18px_rgba(190,242,100,0.45)]" />
          </div>

          <p className="max-w-xl text-lg text-muted-foreground">
            Feel free to reach out through any of my social media platforms or send me an email. I would love to hear from you!
          </p>

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

          <div className="mt-4">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {DATA.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
