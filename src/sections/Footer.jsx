import { Github, Linkedin, Mail } from 'lucide-react'
import { CFG } from '../data/data'

export default function Footer() {
  const icons = [[Github, CFG.github, 'GitHub'], [Linkedin, CFG.linkedin, 'LinkedIn'], [Mail, 'mailto:' + CFG.email, 'Email']]
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-5 sm:text-left md:flex-row">
        <p className="max-w-2xl text-sm text-mute">&copy; {new Date().getFullYear()} {CFG.name}. Designed and built with React, Tailwind and GSAP.</p>
        <div className="flex gap-2">
          {icons.map(([Icon, href, label]) => (
            <a key={label} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent"><Icon size={20} /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}
