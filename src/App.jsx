import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import useTheme from './hooks/useTheme'
import useAnimations from './hooks/useAnimations'
import { fine } from './lib/motion'
import Loader from './components/Loader'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [dark, toggle] = useTheme()
  const [showTop, setShowTop] = useState(false)
  useAnimations()

  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <>
      <Loader />
      <div id="prog" className="fixed left-0 z-[90] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-accent2" style={{ top: 'env(safe-area-inset-top,0px)' }} />
      {fine && <div id="cur" className="pointer-events-none fixed left-0 top-0 z-[120] h-8 w-8 rounded-full border border-accent" aria-hidden="true" />}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="gridbg absolute inset-x-0 top-0 h-[110vh]" />
        <div className="orb absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent opacity-[.18] blur-3xl" data-s="-40" />
        <div className="orb absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent2 opacity-[.14] blur-3xl" data-s="30" />
      </div>
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero /><About /><Skills /><Projects /><Certificates /><Experience /><Contact />
      </main>
      <Footer />
      <a href="#home" aria-label="Back to top"
        className={`fixed right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-bg shadow-xl transition-all duration-300 hover:bg-accent hover:text-on ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom,0px))' }}><ArrowUp size={20} /></a>
    </>
  )
}
