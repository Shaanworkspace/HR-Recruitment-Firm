import { useEffect, useMemo, useRef, useState } from 'react'

export default function Counter({ value, className = '' }) {
  const ref = useRef(null)
  const parsed = useMemo(() => {
    const m = String(value).match(/^([^\d]*)([\d,]+)(.*)$/)
    if (!m) return null
    return {
      prefix: m[1],
      target: parseInt(m[2].replace(/,/g, ''), 10),
      comma: m[2].includes(','),
      suffix: m[3],
    }
  }, [value])

  const [n, setN] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !parsed) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [parsed])

  useEffect(() => {
    if (!started || !parsed) return
    let raf
    const start = performance.now()
    const dur = 1500
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * parsed.target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, parsed])

  if (!parsed) return <span className={className}>{value}</span>

  const display = parsed.comma ? n.toLocaleString('en-IN') : n
  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  )
}
