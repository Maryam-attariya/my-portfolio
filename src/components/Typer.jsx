import { useEffect, useState } from 'react'
import { reduce } from '../lib/motion'

// Typing / deleting effect that cycles through a list of words
export default function Typer({ words }) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (reduce) { setText(words[0]); return }
    let i = 0, j = 0, del = false, id
    const tick = () => {
      const w = words[i]
      j += del ? -1 : 1
      setText(w.slice(0, j))
      let ms = del ? 40 : 90
      if (!del && j === w.length) { del = true; ms = 1500 }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; ms = 300 }
      id = setTimeout(tick, ms)
    }
    tick()
    return () => clearTimeout(id)
  }, [words])
  return (<><span className="text-ink">{text}</span><span className="caret" aria-hidden="true" /></>)
}
