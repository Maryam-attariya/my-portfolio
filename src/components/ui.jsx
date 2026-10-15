// Small reusable building blocks
export function Btn({ href, primary, compact = false, children, className = '', ...rest }) {
  const size = compact
    ? 'min-h-10 px-3 text-xs sm:min-h-11 sm:px-4 sm:text-sm'
    : 'min-h-[48px] px-4 text-sm sm:px-6'

  return (
    <a href={href} {...rest}
      className={`mag inline-flex ${size} min-w-0 max-w-full items-center justify-center gap-2 rounded-full text-center font-semibold leading-snug transition-all ${primary ? 'bg-ink text-bg hover:bg-accent hover:text-on' : 'border border-line bg-surf/60 backdrop-blur hover:border-accent hover:text-accent'} ${className}`}>
      {children}
    </a>
  )
}

// Serif italic gradient word used inside headings
export const Em = ({ children }) => <em className="grad font-serif font-normal italic">{children}</em>

export function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div data-r className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-mute">{sub}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
