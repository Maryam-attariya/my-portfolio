import { useEffect, useRef } from 'react'
import { Code2, Palette, Smartphone, Zap } from 'lucide-react'
import { Section, Em } from '../components/ui'
import { gsap, ScrollTrigger, reduce } from '../lib/motion'

const FOCUS = [
  { icon: Code2, title: 'Clean, maintainable code', text: 'Readable, well-structured components that are easy to scale and hand over.' },
  { icon: Palette, title: 'Thoughtful design', text: 'Attention to spacing, typography and detail so interfaces feel polished.' },
  { icon: Smartphone, title: 'Responsive by default', text: 'Layouts that look and work great on every screen, from phones to desktops.' },
  { icon: Zap, title: 'Fast & accessible', text: 'Performance-minded and inclusive, with smooth, intuitive interactions.' },
]

function Stat({ to, suffix, label }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (reduce) { el.textContent = to + suffix; return }
    el.textContent = '0' + suffix
    const o = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(o, { v: to, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v) + suffix } }),
    })
    return () => st.kill()
  }, [to, suffix])
  return (
    <div className="spot rounded-2xl border border-line bg-surf p-5">
      <div ref={ref} className="grad text-4xl font-semibold tracking-tight sm:text-5xl" />
      <div className="mt-1 text-sm text-mute">{label}</div>
    </div>
  )
}

function FocusCard({ icon: Icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-line bg-surf p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon size={20} />
      </span>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mute">{text}</p>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" title={<>A bit <Em>about</Em> me</>} sub="Who I am and how I like to work.">
      <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        {/* Left: story, stack, stats */}
        <div className="min-w-0">
          <div data-r>
            <p className="text-lg leading-relaxed sm:text-xl">
              I'm a <span className="grad font-semibold">Frontend Developer</span> specializing in creating modern, responsive, and visually compelling digital experiences through clean code, creative design, and user-focused solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mute">
              I specialize in HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap, and React, with a focus on clean code, thoughtful design, accessibility, and seamless user experiences. I’m passionate about continuous learning and building intuitive, high-quality web experiences.
            </p>
          </div>

          <div data-stag className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            <Stat to={1} suffix="+" label="Years learning" />
            <Stat to={25} suffix="+" label="Projects built" />
          </div>
        </div>

        {/* Right: what I focus on */}
        <div data-stag className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
          {FOCUS.map((f) => (
            <FocusCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </Section>
  )
}