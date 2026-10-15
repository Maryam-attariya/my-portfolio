import { useState } from 'react'
import { Mail, Github, Linkedin, Send, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react'
import { Section, Em } from '../components/ui'
import { CFG } from '../data/data'

const WA_NUMBER = CFG.whatsapp.replace(/\D/g, '')

const MESSAGES = {
  ok: ['WhatsApp is opening. Just press send there.', 'text-accent2'],
}

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const validate = () => {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.'
    if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    const text = `Hi Maryam, I'm ${v.name}.\n\n${v.message}\n\nMy email: ${v.email}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setStatus('ok')
    setV({ name: '', email: '', message: '' })
  }
  const field = (k, label, area) => {
    const Tag = area ? 'textarea' : 'input'
    return (
      <div>
        <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
        <Tag id={k} name={k} rows={5} type={k === 'email' ? 'email' : 'text'} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]}
          className={`w-full rounded-2xl border bg-surf px-4 py-3.5 outline-none transition-colors focus:border-accent ${errors[k] ? 'border-red-500' : 'border-line'}`} />
        {errors[k] && <p className="mt-1 text-sm text-red-500" role="alert">{errors[k]}</p>}
      </div>
    )
  }

  const msg = MESSAGES[status]

  // WhatsApp click-to-chat link built from the number in data.js (digits only)
  const waLink = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hi Maryam, I saw your portfolio!')

  const social = [
    [Mail, CFG.email, 'mailto:' + CFG.email],
    [MessageCircle, 'WhatsApp', waLink],
    [Github, 'GitHub', CFG.github],
    [Linkedin, 'LinkedIn', CFG.linkedin],
    [MapPin, CFG.place, 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CFG.place)],
  ]
  return (
    <Section id="contact" title={<>Let's build something <Em>great</Em></>} sub="Have a project or a job in mind? Send me a message and I will reply within a day.">
      <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-12">
        <form onSubmit={submit} noValidate data-r className="min-w-0 space-y-5 rounded-3xl border border-line bg-surf p-4 sm:p-6 lg:p-8">
          {field('name', 'Name')}{field('email', 'Email')}{field('message', 'Message', true)}
          <button type="submit" className="mag inline-flex min-h-[48px] items-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-on">
            <Send size={16} /> Send message
          </button>
          <p aria-live="polite" className={`text-sm font-medium ${msg ? msg[1] : ''}`}>{msg ? msg[0] : ''}</p>
        </form>
        <div data-r className="space-y-4">
          {social.map(([Icon, label, href]) => (
            <a key={label} href={href} target={label === CFG.email ? '_self' : '_blank'} rel="noopener noreferrer"
              className="spot group flex min-h-[64px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-line bg-surf px-4 py-3 font-medium transition-colors hover:border-accent sm:gap-4 sm:px-6">
              <span className="flex min-w-0 items-center gap-3 sm:gap-4"><Icon size={20} className="shrink-0 text-accent" /><span className="break-all">{label}</span></span>
              <ArrowUpRight size={16} className="text-mute transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
