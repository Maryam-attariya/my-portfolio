import { useState } from 'react'
import { ArrowUpRight, Github, ExternalLink, ImageOff } from 'lucide-react'
import { Section, Em, Btn } from '../components/ui'
import { PROJECTS } from '../data/data'

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
  return (
    <Section
      id="projects"
      title={<>Selected <Em>work</Em></>}
      sub="A selection of projects built with thoughtful design and modern frontend technologies."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.n}
            data-card-reveal
            className="proj tilt group flex flex-col overflow-hidden rounded-2xl border border-line bg-surf transition-colors duration-300 hover:border-accent/40"
          >
            <Shot project={p} />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.n}
                </h3>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mute">{p.d}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.cat.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-5">
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