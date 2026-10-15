import { useEffect } from 'react'
import { gsap, reduce, fine } from '../lib/motion'

export default function useAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1) Preloader, then hero entrance timeline
      if (reduce) {
        gsap.set('#loader', { display: 'none' })
      } else {
        const o = { v: 0 }
        const pct = document.getElementById('ldpct')
        gsap.timeline()
          .from('.ld', { yPercent: 110, duration: 0.7, ease: 'power3.out' })
          .to(o, { v: 100, duration: 1, ease: 'power2.inOut', onUpdate: () => { pct.textContent = Math.round(o.v); gsap.set('#ldbar', { scaleX: o.v / 100 }) } }, '-=0.2')
          .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' })
          .set('#loader', { display: 'none' })
          .from('.ln', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out' }, '-=0.35')
          .from('.h-in', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.7')
          .from('.h-card', { scale: 0.88, opacity: 0, y: 40, duration: 1.1, ease: 'power3.out' }, '-=1')
      }

      if (!reduce) {
        // 2) Scroll reveals (fade up). data-r = single element, data-stag = stagger children
        gsap.utils.toArray('[data-r]').forEach((el) =>
          gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
        gsap.utils.toArray('[data-stag]').forEach((p) =>
          gsap.from(p.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', immediateRender: false, scrollTrigger: { trigger: p, start: 'top 88%', once: true } }))
        // 3) Timeline line draws while scrolling
        gsap.fromTo('.tl-line', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 70%', end: 'bottom 70%', scrub: true } })

        // 4) Parallax for floating badges and background orbs
        const para = (sel, k) => gsap.utils.toArray(sel).forEach((el) =>
          gsap.to(el, { y: +el.dataset.s * k, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true } }))
        para('.par', 3); para('.orb', 8)

        // 5) Scroll progress bar
        gsap.to('#prog', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } })
      }

      // 6) Skill bars fill when visible
      gsap.utils.toArray('.bar').forEach((b) =>
        gsap.to(b, { width: b.dataset.w + '%', duration: reduce ? 0 : 1.3, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 95%', once: true } }))
    })

    let revealObserver
    if (!reduce && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-revealed')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

      document.querySelectorAll('[data-card-reveal]').forEach((card) => {
        card.classList.add('card-reveal')
        revealObserver.observe(card)
      })
    }

    // 7) Custom cursor, magnetic buttons, card tilt and spotlight (mouse only, event delegation)
    let cur = null, hv = false, first = true
    const c = document.getElementById('cur')
    const reset = (t) => gsap.to(t, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1,.5)' })
    let qx, qy
    if (fine && c) {
      gsap.set(c, { xPercent: -50, yPercent: -50, opacity: 0 })
      qx = gsap.quickTo(c, 'x', { duration: 0.25, ease: 'power3' })
      qy = gsap.quickTo(c, 'y', { duration: 0.25, ease: 'power3' })
    }
    const move = (e) => {
      const el = e.target.closest ? e.target : null
      if (!el) return
      if (c) {
        if (first) { gsap.set(c, { x: e.clientX, y: e.clientY }); gsap.to(c, { opacity: 1, duration: 0.3 }); first = false }
        qx(e.clientX); qy(e.clientY)
        const h = !!el.closest('a,button,.tilt')
        if (h !== hv) { hv = h; gsap.to(c, { scale: h ? 1.9 : 1, duration: 0.3, overwrite: 'auto' }) }
      }
      const s = el.closest('.spot')
      if (s) { const r = s.getBoundingClientRect(); s.style.setProperty('--x', e.clientX - r.left + 'px'); s.style.setProperty('--y', e.clientY - r.top + 'px') }
      const t = el.closest('.tilt,.mag')
      if (cur && cur !== t) reset(cur)
      cur = t
      if (!t) return
      const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
      if (t.classList.contains('mag')) gsap.to(t, { x: x * r.width * 0.2, y: y * r.height * 0.35, duration: 0.3 })
      else gsap.to(t, { rotateY: x * 5, rotateX: -y * 5, y: -4, transformPerspective: 900, duration: 0.4 })
    }
    if (fine) document.addEventListener('mousemove', move)

    return () => {
      ctx.revert()
      revealObserver?.disconnect()
      document.removeEventListener('mousemove', move)
    }
  }, [])
}
