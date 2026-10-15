// Full-screen preloader (animated by useAnimations)
export default function Loader() {
  return (
    <div id="loader" className="fixed inset-0 z-[100] grid place-items-center bg-[#0B1F1A] text-white">
      <div className="text-center">
        <div className="overflow-hidden py-1"><div className="ld text-3xl font-semibold tracking-tight">Maryam Attaria</div></div>
        <div className="mx-auto mt-6 h-px w-48 bg-white/15"><div id="ldbar" className="h-full w-full origin-left scale-x-0 bg-[#D6AA52]" /></div>
        <div className="mt-3 font-mono text-xs text-white/50"><span id="ldpct">0</span>%</div>
      </div>
    </div>
  )
}
