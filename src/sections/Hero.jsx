import { ArrowUpRight, Download } from 'lucide-react'
import { Btn, Em } from '../components/ui'
import Typer from '../components/Typer'
import { CFG, STACK } from '../data/data'

const ROLES = ['responsive websites', 'React interfaces', 'clean, fast UIs', 'transforming ideas into elegant']

export default function Hero() {
  return (
    <section id="home">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-10 sm:gap-16 sm:px-5 sm:pb-16 sm:pt-20 lg:grid-cols-[1.15fr_.85fr]">
        <div className="min-w-0">
          <div className="h-in mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surf/70 px-4 py-2 text-sm font-medium backdrop-blur">
            <span className="relative flex h-2.5 w-2.5"><span className="ping2 absolute inline-flex h-full w-full rounded-full bg-accent2" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent2" /></span>
            Available for new projects
          </div>

          <h1 className="text-[clamp(2rem,7.2vw,3.5rem)] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden py-1">
              <span className="ln block">Hi, I'm Maryam,</span>
            </span>

            <span className="block overflow-hidden py-1">
              <span className="ln block">a Frontend Developer</span>
            </span>
          </h1>

          <p className="h-in mt-7 text-lg font-medium text-mute sm:text-xl">I specialise in <Typer words={ROLES} /></p>
          <div className="h-in mt-9 flex w-full flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap">
            <Btn href="#projects" primary className="w-full min-[380px]:w-auto">View Projects <ArrowUpRight size={16} /></Btn>
            <Btn href={CFG.cv} download className="w-full min-[380px]:w-auto"><Download size={16} /> Download CV</Btn>
          </div>
        </div>

        <div className="h-card relative mx-auto w-full min-w-0 max-w-md">
          <div className="floaty relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-accent2/25 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-2xl border border-line bg-surf/90 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
                <i className="h-3 w-3 rounded-full bg-red-400/80" /><i className="h-3 w-3 rounded-full bg-amber-400/80" /><i className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-mute">maryam.jsx</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
                <span className="text-accent">const</span> maryam = {'{'}{'\n'}
                {'  '}role: <span className="text-accent2">"Frontend Developer"</span>,{'\n'}
                {'  '}stack: [<span className="text-accent2">"React"</span>, <span className="text-accent2">"Tailwind"</span>, <span className="text-accent2">"JS"</span>],{'\n'}
                {'  '}focus: <span className="text-accent2">"pixel-perfect UI"</span>,{'\n'}
                {'  '}coffee: <span className="text-accent">Infinity</span>,{'\n'}
                {'}'};
              </pre>
            </div>
            <span className="par absolute -right-3 -top-6 rounded-xl border border-line bg-surf px-4 py-2 text-sm font-semibold shadow-xl" data-s="-30">React</span>
            <span className="par absolute -bottom-6 -left-3 rounded-xl border border-line bg-surf px-4 py-2 text-sm font-semibold shadow-xl" data-s="30">Tailwind</span>
          </div>
        </div>
      </div>

      {/* infinite tech marquee */}
      <div className="h-in mt-10 overflow-hidden border-y border-line py-5" aria-hidden="true">
        <div className="marq flex w-max gap-10">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10">
              {STACK.map((s) => (
                <span key={s} className="flex items-center gap-10 whitespace-nowrap font-serif text-3xl italic text-mute">{s}<span className="not-italic text-accent">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
