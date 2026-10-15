import { Section, Em } from '../components/ui'
import { TIMELINE } from '../data/data'

export default function Experience() {
  return (
    <Section id="experience" title={<>My <Em>journey</Em></>} sub="Experience and education so far.">
      <div id="tl" className="relative max-w-3xl pl-8 sm:pl-9">
        <div className="absolute left-[7px] top-0 h-full w-0.5 bg-line" />
        <div className="tl-line absolute left-[7px] top-0 h-full w-0.5 origin-top bg-gradient-to-b from-accent to-accent2" />
        <div data-stag>
          {TIMELINE.map(([date, title, text]) => (
            <div key={title} className="relative min-w-0 pb-10 last:pb-0 sm:pb-12">
              <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-bg sm:-left-9" />
              <p className="text-sm font-semibold text-accent">{date}</p>
              <h3 className="mt-1 break-words text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
              <p className="mt-2 text-mute">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
