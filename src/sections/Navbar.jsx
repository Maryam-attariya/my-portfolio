import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { LINKS } from '../data/data'

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    // highlight the link of the section in the middle of the screen
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    LINKS.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const bar = 'block h-0.5 w-5 bg-current transition-all duration-300'
  return (
    <header className="sticky z-50 px-3 pt-3" style={{ top: 'env(safe-area-inset-top,0px)' }}>
      <div className={`mx-auto max-w-6xl border border-line px-4 transition-all duration-300 ${open ? 'rounded-3xl' : 'rounded-full'} ${scrolled || open ? 'bg-surf/75 shadow-lg shadow-black/5 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <nav className="flex min-h-14 items-center justify-between gap-2" aria-label="Main">
          <a href="#home" className="shrink-0 text-lg font-semibold tracking-tight ">Maryam  <span className="mr-1"></span> Attaria<span className="text-accent">.</span></a>
          <ul className="hidden items-center lg:flex">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={'#' + id} className={`whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${active === id ? 'bg-accent/15 text-accent' : 'text-mute hover:text-ink'}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <button onClick={toggle} aria-label="Toggle dark mode" className="grid h-11 w-11 place-items-center rounded-full text-mute hover:text-accent">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-11 w-11 place-items-center lg:hidden">
              <span className="relative block h-4 w-5">
                <span className={`${bar} absolute top-0 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`${bar} absolute top-[7px] ${open ? 'opacity-0' : ''}`} />
                <span className={`${bar} absolute top-[14px] ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>
        {/* mobile menu: animated open/close with grid-rows */}
        <div className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <ul className="overflow-hidden">
            {LINKS.map(([id, label]) => (
              <li key={id}><a href={'#' + id} onClick={() => setOpen(false)} className={`block border-t border-line py-3.5 font-medium ${active === id ? 'text-accent' : ''}`}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
