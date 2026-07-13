import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Jobs', to: '/jobs' },
    { label: 'Employers', to: '/employers' },
    { label: 'Resources', to: '/resources' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        className={`mx-auto max-w-7xl border rounded-2xl shadow-lg px-4 sm:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/60 backdrop-blur-xl border-white/50 shadow-slate-900/10'
            : 'bg-white border-gray-100 shadow-slate-900/5'
        }`}
      >
        <Link to="/" className="text-xl font-bold text-blue-600">NextGenHR</Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-blue-600 transition ${
                location.pathname === l.to ? 'text-blue-600' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/candidates"
            className="hidden sm:inline-flex text-sm font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/employers"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-600/30"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  )
}
