import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Jobs', to: '/jobs' },
    { label: 'Employers', to: '/employers' },
    { label: 'Candidates', to: '/candidates' },
    { label: 'Resources', to: '/resources' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ]

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Email', href: 'mailto:hello@nextgenhr.in' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold text-white">NextGenHR</span>
            <p className="mt-3 text-sm leading-relaxed">
              Connecting Top Sales Talent with High Growth B2B Companies.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              India's Dedicated Platform for Modern B2B Careers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="hover:text-white transition"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 NextGenHR. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
