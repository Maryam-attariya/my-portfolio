import { useState } from 'react'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { Btn } from '../components/ui'
import { CFG, STACK } from '../data/data'

const SERVICES = ['Business websites', 'Landing pages', 'React web apps']

function Photo() {
  const [err, setErr] = useState(false)
  return err ? (
    <div className="grid aspect-[3/4] place-items-center bg-surf font-serif text-8xl italic text-accent">MA</div>
  ) : (
    <img
      src="/pic.png"
      alt={`${CFG.name}, frontend developer`}
      onError={() => setErr(true)}
      className="aspect-[3/4] w-full object-cover object-top"
    />
  )
}

export default function Hero() {
  return (
    <section id="home" className="overflow-x-clip">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-10 sm:gap-16 sm:px-5 sm:pb-16 sm:pt-20 lg:grid-cols-[1.15fr_.85fr]">
        <div className="min-w-0">
          <div className="h-in mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surf/70 px-4 py-2 text-sm font-medium backdrop-blur">
            <span className="relative flex h-2.5 w-2.5"><span className="ping2 absolute inline-flex h-full w-full rounded-full bg-accent2" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent2" /></span>
            Available for new projects
          </div>

          <h1 className="text-[clamp(2rem,7.2vw,3.5rem)] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            <span className="block overflow-hidden py-1">
              <span className="ln block">I build fast, modern websites</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="ln block">that help your business grow.</span>
            </span>
          </h1>

          <p className="h-in mt-6 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
            Hi, I'm Maryam, a frontend developer from Karachi. I turn your ideas into clean, responsive websites that look great on all devices.
          </p>

          <ul className="h-in mt-6 flex flex-wrap gap-2" aria-label="What I build">
            {SERVICES.map((s) => (
              <li key={s} className="rounded-full border border-line bg-surf/70 px-4 py-2 text-sm font-medium">{s}</li>
            ))}
          </ul>

          <div className="h-in mt-9 flex w-full flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap">
            <Btn href="#contact" primary className="w-full min-[380px]:w-auto">Hire me <ArrowUpRight size={16} /></Btn>
            <Btn href="#projects" className="w-full min-[380px]:w-auto">View projects</Btn>
            <Btn href={CFG.cv} download className="w-full min-[380px]:w-auto"><Download size={16} /> Download CV</Btn>
          </div>
        </div>

        <div className="h-card relative mx-auto w-full min-w-0 max-w-sm">
          <div className="floaty relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-accent2/25 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surf/90 shadow-2xl">
              <Photo />
              <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                <div>
                  <p className="font-semibold">{CFG.name}</p>
                  <p className="text-sm text-mute">Frontend Developer</p>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-mute"><MapPin size={15} className="text-accent" />{CFG.place}</span>
              </div>
            </div>
            <span className="par absolute -right-3 -top-6 rounded-xl border border-line bg-surf px-4 py-2 text-sm font-semibold shadow-xl" data-s="-30">React</span>
            <span className="par absolute -bottom-6 -left-3 rounded-xl border border-line bg-surf px-4 py-2 text-sm font-semibold shadow-xl" data-s="30">Tailwind</span>
          </div>
        </div>
      </div>

      {/* infinite tech marquee */}
      <div className="h-in mt-10 overflow-hidden border-y border-line py-5" aria-hidden="true">
        <div className="marq flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10 pr-10">
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