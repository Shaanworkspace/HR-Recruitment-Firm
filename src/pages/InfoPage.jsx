import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'

const icons = {
  target: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0',
  users: 'M16 14a4 4 0 1 0-8 0M12 7a3 3 0 1 0 0 6M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1',
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z',
  rocket: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3 0 6 1 6 1s0 3-1 6c-1 3-4 5-7 5-2 0-3-1-3-3 0-3 2-6 5-9zM9 14l3-3',
  chart: 'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8',
  globe: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z',
  lightbulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z',
  check: 'M5 13l4 4L19 7',
  briefcase: 'M3 8h18v11H3zM8 8V5h8v3M3 12h18',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  phone: 'M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  map: 'M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14',
}

function Icon({ name, className = 'w-6 h-6' }) {
  const d = icons[name] || icons.check
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={d} />
    </svg>
  )
}

const pages = {
  jobs: {
    eyebrow: 'Open Roles',
    title: 'Explore Jobs in Modern B2B Sales',
    desc: 'Browse curated opportunities across SDR, BDR, Account Executive, Customer Success and Revenue Operations roles at high-growth companies.',
    cta: { label: 'Get Started', to: '/candidates' },
    features: [
      { icon: 'target', title: 'Roles matched to you', desc: 'Pre-screened positions aligned to your experience, not random keyword hits.' },
      { icon: 'users', title: 'High-growth companies', desc: 'Opportunities across SaaS, FinTech, EdTech and other fast-scaling teams.' },
      { icon: 'shield', title: 'Transparent process', desc: 'Clear role details and honest communication from application to offer.' },
      { icon: 'lightbulb', title: 'Career guidance', desc: 'Interview prep and market insights to help you move with confidence.' },
    ],
    steps: [
      { n: '01', t: 'Create your profile', d: 'Add your experience and the kind of B2B role you want.' },
      { n: '02', t: 'Get matched', d: 'We surface roles that fit your background and goals.' },
      { n: '03', t: 'Interview & join', d: 'Get interview-ready and connect with hiring teams.' },
    ],
    stats: [
      { number: '700+', label: 'Professionals Placed' },
      { number: '12,000', label: 'Talent Network' },
      { number: '150+', label: 'Companies Hiring' },
    ],
  },
  employers: {
    eyebrow: 'Hire Talent',
    title: 'Build a High Performing Revenue Team',
    desc: 'Partner with NextGenHR to hire pre-screened sales and revenue professionals who are ready to contribute from day one.',
    cta: { label: 'Start Hiring', to: '/contact' },
    features: [
      { icon: 'rocket', title: 'Revenue specialists', desc: 'We focus only on modern B2B revenue hiring, nothing else.' },
      { icon: 'chart', title: 'Faster shortlists', desc: 'Qualified, pre-screened profiles delivered within days.' },
      { icon: 'shield', title: 'Better experience', desc: 'Clear, consistent communication with every candidate.' },
      { icon: 'globe', title: 'Pan-India network', desc: 'Hire across major cities throughout India.' },
    ],
    steps: [
      { n: '01', t: 'Understand', d: 'We learn your business and the role you need to fill.' },
      { n: '02', t: 'Source & screen', d: 'We search our network and screen on fit and skill.' },
      { n: '03', t: 'Hire', d: 'We coordinate interviews, offers and joining.' },
    ],
    stats: [
      { number: '48 Hours', label: 'Avg. Shortlisting' },
      { number: '95%', label: 'Interview Attendance' },
      { number: '300+', label: 'Placements' },
    ],
  },
  candidates: {
    eyebrow: 'For Candidates',
    title: 'Find More Than Your Next Job',
    desc: 'Join a talent network built for people who want to move faster in their B2B sales career.',
    cta: { label: 'Explore Jobs', to: '/jobs' },
    features: [
      { icon: 'target', title: 'Discover opportunities', desc: 'Quality roles matched to where you are and where you want to go.' },
      { icon: 'chart', title: 'Build your career', desc: 'Profiles reviewed by people who understand B2B revenue.' },
      { icon: 'lightbulb', title: 'Stay ahead', desc: 'Learn what modern revenue teams actually look for.' },
      { icon: 'shield', title: 'Interview-ready', desc: 'Clear, supported communication through the process.' },
    ],
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Stay Ahead in Your Career',
    desc: 'Practical guides and insights for B2B sales professionals and revenue hiring managers.',
    cta: { label: 'Explore Opportunities', to: '/jobs' },
    features: [
      { icon: 'check', title: 'Interview Tips', desc: 'How to prepare for modern B2B sales interviews.' },
      { icon: 'briefcase', title: 'Resume Guides', desc: 'Build a resume that speaks to revenue teams.' },
      { icon: 'chart', title: 'Sales Career Advice', desc: 'Map your path from SDR to leadership.' },
      { icon: 'lightbulb', title: 'Hiring Insights', desc: 'What top teams look for when they hire.' },
      { icon: 'users', title: 'LinkedIn Optimization', desc: 'Show up for the right recruiters.' },
      { icon: 'globe', title: 'Industry Trends', desc: 'Track where B2B hiring is heading.' },
    ],
  },
  about: {
    eyebrow: 'About Us',
    title: 'Building Careers. Powering Revenue Teams.',
    desc: "NextGenHR is India's dedicated recruitment platform for modern B2B careers.",
    cta: { label: 'Contact Us', to: '/contact' },
    features: [
      { icon: 'rocket', title: 'For companies', desc: 'We help startups, SaaS and fintech hire sales talent that makes an impact.' },
      { icon: 'users', title: 'For professionals', desc: 'We help people discover meaningful, fast-growing opportunities.' },
      { icon: 'target', title: 'B2B focus', desc: 'We work exclusively on modern B2B revenue hiring.' },
      { icon: 'shield', title: 'End-to-end', desc: 'From sourcing and screening to onboarding support.' },
    ],
    stats: [
      { number: '700+', label: 'Professionals Placed' },
      { number: '12,000', label: 'Candidate Community' },
      { number: 'PAN India', label: 'Recruitment Network' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's Talk",
    desc: 'Whether you are hiring or looking for your next role, we are happy to help.',
    cta: { label: 'Explore Jobs', to: '/jobs' },
    features: [
      { icon: 'mail', title: 'Email', desc: 'hello@nextgenhr.in' },
      { icon: 'phone', title: 'Phone', desc: '+91 00000 00000' },
      { icon: 'map', title: 'Locations', desc: 'Pan India' },
    ],
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    desc: 'Replace this content with your official privacy policy before going live.',
    cta: { label: 'Back to Home', to: '/' },
    features: [
      { icon: 'shield', title: 'Minimal data', desc: 'We collect only what is needed to match candidates and employers.' },
      { icon: 'users', title: 'No reselling', desc: 'Your data is never sold to third parties.' },
      { icon: 'check', title: 'Your control', desc: 'Request deletion of your data anytime.' },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    desc: 'Replace this content with your official terms before going live.',
    cta: { label: 'Back to Home', to: '/' },
    features: [
      { icon: 'check', title: 'Fair use', desc: 'Use of this site is at your own risk.' },
      { icon: 'lightbulb', title: 'Informational', desc: 'Content is provided for general information only.' },
      { icon: 'shield', title: 'Updates', desc: 'We may update these terms from time to time.' },
    ],
  },
}

export default function InfoPage({ slug }) {
  const page = pages[slug] || pages.about

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-16 bg-dots">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl animate-blob pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-400/20 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{page.eyebrow}</span>
          </nav>
          <Reveal>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{page.eyebrow}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 max-w-3xl">{page.title}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">{page.desc}</p>
            <Link to={page.cta.to} className="inline-block mt-8 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition shadow-lg">
              {page.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon name={f.icon} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {page.steps && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">How it works</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {page.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
                    <div className="text-3xl font-bold text-blue-600 mb-3">{s.n}</div>
                    <h3 className="font-semibold text-gray-900 mb-1.5">{s.t}</h3>
                    <p className="text-sm text-gray-600">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.stats && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {page.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-8">
                    <div className="text-4xl font-bold text-blue-600">
                      <Counter value={s.number} />
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl px-8 py-12 text-center text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-blob pointer-events-none" />
              <h2 className="text-2xl md:text-4xl font-bold relative z-10">
                {page.cta.label === 'Back to Home' ? 'Ready to learn more?' : "Let's get started"}
              </h2>
              <p className="mt-3 text-blue-100 relative z-10">{page.desc}</p>
              <Link to={page.cta.to} className="inline-block mt-6 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition shadow-lg relative z-10">
                {page.cta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
