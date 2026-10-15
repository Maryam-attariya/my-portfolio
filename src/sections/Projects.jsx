
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github, ExternalLink, ImageOff } from 'lucide-react'
import { Section, Em, Btn } from '../components/ui'
import { PROJECTS } from '../data/data'
import { gsap, ScrollTrigger, reduce } from '../lib/motion'

const FILTERS = ['All', 'React', 'JavaScript', 'Tailwind']

function Shot({ project }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.g[0]}, ${project.g[1]})`,
      }}
    >
      {project.image && !imageError ? (
        <img
          src={project.image}
          alt={`${project.n} website preview`}
          loading="lazy"
          onError={() => setImageError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-white">
          <ImageOff size={32} strokeWidth={1.4} />
          <span className="text-lg font-semibold">{project.n}</span>
          <span className="text-sm text-white/70">
            Add project screenshot
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5" />

      <div className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={19} />
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const firstRender = useRef(true)

  const list =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat.includes(filter))

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else if (!reduce) {
      gsap.fromTo(
        '.proj',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
        },
      )
    }

    ScrollTrigger.refresh()
  }, [filter])

  return (
    <Section
      id="projects"
      title={<>Selected <Em>work</Em></>}
      sub="A selection of projects built with thoughtful design and modern frontend technologies."
    >
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition-all duration-300 ${filter === f
                ? 'border-ink bg-ink text-bg'
                : 'border-line bg-surf/60 hover:border-accent hover:text-accent'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p) => (
          <article
            key={p.n}
            data-card-reveal
            className="proj tilt group overflow-hidden rounded-3xl border border-line bg-surf transition-colors duration-300 hover:border-accent/40"
          >
            <Shot project={p} />

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {p.n}
                </h3>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              <p className="mt-3 leading-relaxed text-mute">{p.d}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.cat.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {p.live && p.live !== '#' && (
                  <Btn
                    href={p.live}
                    primary
                    compact
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </Btn>
                )}

                {p.code &&
                  p.code !== '#' &&
                  !p.code.includes('YOUR_') && (
                    <Btn
                      href={p.code}
                      compact
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      View code
                    </Btn>
                  )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
