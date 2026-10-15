
import {
  Code2,
  Palette,
  Wrench,
  MonitorSmartphone,
  ArrowUpRight,
} from 'lucide-react'

import { Section, Em } from '../components/ui'
import { SKILLS } from '../data/data'

const ICONS = {
  Code2,
  Palette,
  Wrench,
  MonitorSmartphone,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title={<>My <Em>toolkit</Em></>}
      sub="Technologies I use to build modern interfaces."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SKILLS.map((group) => {
          const Icon = ICONS[group.icon]

          return (
            <div
              key={group.t}
              data-card-reveal
              className="spot group rounded-3xl border border-line bg-surf p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={21} />
                  </span>

                  <h3 className="text-lg font-semibold tracking-tight">
                    {group.t}
                  </h3>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-mute transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.s.map((skill) => {
                  const SkillIcon = skill.icon
                    ? ICONS[skill.icon]
                    : null

                  return (
                    <div
                      key={skill.name}
                      data-card-reveal
                      className="flex min-h-[100px] flex-col items-center justify-center gap-3 rounded-2xl border border-line/70 bg-bg/40 p-4 text-center transition-all duration-300 hover:border-accent/40 hover:bg-accent/5"
                    >
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt=""
                          loading="lazy"
                          className="h-9 w-9 object-contain"
                        />
                      ) : (
                        <SkillIcon
                          size={34}
                          strokeWidth={1.6}
                          className="text-accent"
                        />
                      )}

                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
