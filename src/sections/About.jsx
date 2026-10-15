import { useEffect, useRef, useState } from 'react'
import { MapPin, RotateCw } from 'lucide-react'
import { Section, Em } from '../components/ui'
import { gsap, ScrollTrigger, reduce, fine } from '../lib/motion'
import { CFG, STACK } from '../data/data'

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

/* Click par photo flip hoti hai: 3D rotation, frame ki jagah badalti hai,
   aur ek ring click ke point se phailti hai. Peeche ki taraf profile card hai. */
function FlipPhoto() {
  const card = useRef(null)
  const frame = useRef(null)
  const ring = useRef(null)
  const hint = useRef(null)
  const tilt = useRef(null)
  const glare = useRef(null)
  const pic = useRef(null)
  const q = useRef(null)
  const busy = useRef(false)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    gsap.set(card.current, { rotationY: 0, transformPerspective: 1200 })
    gsap.set(frame.current, { x: 16, y: 16 })
    gsap.set(tilt.current, { transformPerspective: 900 })
    if (fine && !reduce) {
      q.current = {
        rx: gsap.quickTo(tilt.current, 'rotationX', { duration: 0.6, ease: 'power3.out' }),
        ry: gsap.quickTo(tilt.current, 'rotationY', { duration: 0.6, ease: 'power3.out' }),
      }
    }
  }, [])

 
  const onEnter = (e) => {
    if (!q.current || e.pointerType !== 'mouse') return
    gsap.to(pic.current, { scale: 1.07, duration: 0.8, ease: 'power2.out' })
    gsap.to(frame.current, { scale: 1.04, duration: 0.6, ease: 'power3.out' })
    gsap.to(glare.current, { opacity: 1, duration: 0.4 })
  }
  const onMove = (e) => {
    if (!q.current || e.pointerType !== 'mouse') return
    const r = tilt.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    q.current.ry((x - 0.5) * 14)
    q.current.rx((0.5 - y) * 14)
    glare.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.3), transparent 55%)`
  }
  const onLeave = () => {
    if (!q.current) return
    q.current.rx(0)
    q.current.ry(0)
    gsap.to(pic.current, { scale: 1, duration: 0.8, ease: 'power2.out' })
    gsap.to(frame.current, { scale: 1, duration: 0.6, ease: 'power3.out' })
    gsap.to(glare.current, { opacity: 0, duration: 0.4 })
  }

  const onClick = (e) => {
    if (busy.current) return
    busy.current = true
    const next = !flipped
    setFlipped(next)
    gsap.to(hint.current, { opacity: 0, duration: 0.3 })

    if (reduce) {
      gsap.set(card.current, { rotationY: next ? 180 : 0 })
      gsap.set(frame.current, { x: next ? -16 : 16, y: 16 })
      busy.current = false
      return
    }

    // ring: click ki jagah se shuru
    const r = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX ? e.clientX - r.left : r.width / 2
    const cy = e.clientY ? e.clientY - r.top : r.height / 2
    gsap.fromTo(
      ring.current,
      { left: cx, top: cy, scale: 0, opacity: 0.55 },
      { scale: 14, opacity: 0, duration: 0.9, ease: 'power2.out' }
    )

    gsap.timeline({ onComplete: () => { busy.current = false } })
      .to(card.current, { scale: 0.93, duration: 0.2, ease: 'power2.in' })
      .to(card.current, { rotationY: next ? 180 : 0, duration: 0.85, ease: 'power3.inOut' }, '<0.05')
      .to(frame.current, { x: next ? -16 : 16, duration: 0.85, ease: 'power3.inOut' }, '<')
      .to(card.current, { scale: 1, duration: 0.5, ease: 'back.out(2.2)' }, '-=0.35')
  }

  const face = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }

  return (
    <div data-r className="relative mx-auto w-full max-w-[320px]">
      <div ref={tilt} className="relative" onPointerEnter={onEnter} onPointerMove={onMove} onPointerLeave={onLeave}>
        <div ref={frame} className="absolute inset-0 rounded-3xl border border-accent/50" aria-hidden="true" />

        <button
          type="button"
          onClick={onClick}
          aria-pressed={flipped}
          aria-label={flipped ? 'Show photo' : 'Show profile card'}
          className="relative block aspect-[320/380] w-full cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          style={{ perspective: 1200 }}
        >
          <span ref={card} className="absolute inset-0 block" style={{ transformStyle: 'preserve-3d' }}>
            {/* Front: photo */}
            <span className="absolute inset-0 block overflow-hidden rounded-3xl" style={face}>
              <img
                ref={pic}
                src="/pic.png"
                alt="Maryam Attaria"
                className="h-full w-full rounded-3xl border border-line object-cover shadow-2xl"
              />
              <span ref={glare} className="pointer-events-none absolute inset-0 rounded-3xl opacity-0" aria-hidden="true" />
              <span
                ref={hint}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
              >
                <RotateCw size={12} /> Tap to flip
              </span>
              <span ref={ring} className="pointer-events-none absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent opacity-0" aria-hidden="true" />
            </span>

            {/* Back: profile card */}
            <span
              className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surf p-6 text-left shadow-2xl"
              style={{ ...face, transform: 'rotateY(180deg)' }}
            >
              <span>
                <span className="grad block text-3xl font-semibold tracking-tight">{CFG.name}</span>
                <span className="mt-1 block text-base">Frontend Developer</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-mute">
                  <MapPin size={14} /> {CFG.place}
                </span>
              </span>

              <span>
                <span className="mb-3 block text-sm text-mute">What I work with</span>
                <span className="flex flex-wrap gap-2">
                  {STACK.slice(0, 6).map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 text-xs">
                      {s}
                    </span>
                  ))}
                </span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-mute">
                  <RotateCw size={12} /> Tap to flip back
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" title={<>A bit <Em>about</Em> me</>} sub="Who I am and how I like to work.">
      <div className="grid min-w-0 items-center gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
        <FlipPhoto />
        <div className="min-w-0">
          <div data-r>
            <p className="text-lg leading-relaxed sm:text-xl">I'm a Frontend Developer specializing in creating modern, responsive, and visually compelling digital experiences through clean code, creative design, and user-focused solutions.</p>
            <p className="mt-4 text-lg leading-relaxed text-mute">I specialize in HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap, and React, with a focus on clean code, thoughtful design, accessibility, and seamless user experiences. I’m passionate about continuous learning and building intuitive, high-quality web experiences.</p>
          </div>
          <div data-stag className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            <Stat to={1} suffix="+" label="Years learning" />
            <Stat to={30} suffix="+" label="Projects built" />
          </div>
        </div>
      </div>
    </Section>
  )
}
