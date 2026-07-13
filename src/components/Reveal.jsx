import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: show ? 'none' : `translateY(${y}px)`,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        show ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
