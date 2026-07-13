import { Link } from 'react-router-dom'

const pages = {
  jobs: {
    eyebrow: 'Open Roles',
    title: 'Explore Jobs in Modern B2B Sales',
    desc: 'Browse curated opportunities across SDR, BDR, Account Executive, Customer Success and Revenue Operations roles at high-growth companies.',
    points: [
      'Pre-screened roles matched to your experience',
      'Opportunities across SaaS, FinTech, EdTech and more',
      'Clear role details and transparent process',
    ],
    cta: { label: 'Get Started', to: '/candidates' },
  },
  employers: {
    eyebrow: 'Hire Talent',
    title: 'Build a High Performing Revenue Team',
    desc: 'Partner with NextGenHR to hire pre-screened sales and revenue professionals who are ready to contribute from day one.',
    points: [
      'Revenue hiring specialists for B2B teams',
      'Qualified profiles delivered within days',
      'End-to-end support from sourcing to joining',
    ],
    cta: { label: 'Start Hiring', to: '/contact' },
  },
  candidates: {
    eyebrow: 'For Candidates',
    title: 'Find More Than Your Next Job',
    desc: 'Join a talent network built for people who want to move faster in their B2B sales career.',
    points: [
      'Discover quality opportunities',
      'Build your sales career with guidance',
      'Get interview-ready with clear communication',
    ],
    cta: { label: 'Explore Jobs', to: '/jobs' },
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Stay Ahead in Your Career',
    desc: 'Practical guides and insights for B2B sales professionals and revenue hiring managers.',
    points: [
      'Interview Tips & Resume Guides',
      'Sales Career Advice & Hiring Insights',
      'LinkedIn Optimization & Industry Trends',
    ],
    cta: { label: 'Explore Opportunities', to: '/jobs' },
  },
  about: {
    eyebrow: 'About Us',
    title: 'Building Careers. Powering Revenue Teams.',
    desc: "NextGenHR is India's dedicated recruitment platform for modern B2B careers.",
    points: [
      'We help startups and SaaS companies hire sales talent that makes an impact',
      'We help professionals discover meaningful, fast-growing opportunities',
      'Focused exclusively on modern B2B revenue hiring',
    ],
    cta: { label: 'Contact Us', to: '/contact' },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's Talk",
    desc: 'Whether you are hiring or looking for your next role, we are happy to help.',
    points: [
      'Email: hello@nextgenhr.in',
      'Phone: +91 00000 00000',
      'Locations: Pan India',
    ],
    cta: { label: 'Explore Jobs', to: '/jobs' },
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    desc: 'This is a placeholder Privacy Policy. Replace this content with your official policy before going live.',
    points: [
      'We collect only the data needed to match candidates and employers',
      'Your data is never sold to third parties',
      'You can request deletion of your data anytime',
    ],
    cta: { label: 'Back to Home', to: '/' },
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    desc: 'This is a placeholder Terms & Conditions page. Replace this content with your official terms before going live.',
    points: [
      'Use of this site is at your own risk',
      'Content is provided for general information only',
      'We reserve the right to update these terms',
    ],
    cta: { label: 'Back to Home', to: '/' },
  },
}

export default function InfoPage({ slug }) {
  const page = pages[slug] || pages.about

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{page.eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 max-w-3xl">{page.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">{page.desc}</p>
          <Link
            to={page.cta.to}
            className="inline-block mt-8 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            {page.cta.label}
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {page.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
