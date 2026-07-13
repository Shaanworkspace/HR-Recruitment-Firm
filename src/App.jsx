import { useEffect, useRef } from 'react'

const companies = [
  "Salesforce", "HubSpot", "Freshworks", "Zoho", "Microsoft",
  "Google Cloud", "AWS", "Oracle", "SAP", "Atlassian",
  "ServiceNow", "Razorpay", "Chargebee", "BrowserStack",
  "Postman", "CleverTap", "LeadSquared", "Darwinbox", "MoEngage", "Whatfix"
]

const trustedBy = [
  "Hubcredo", "ShiftAlt Capital", "Apex School of Business", "Daalchini",
  "Verda Healthcare", "Eureka24x7", "Testriq", "Peeko", "SmileID",
  "FIT4PRIVACY", "Fintent"
]

const careerRoles = [
  "SDR", "BDR", "Inside Sales", "Lead Generation",
  "Business Development", "Account Executive", "Customer Success",
  "Account Management", "Revenue Operations", "Sales Operations",
  "Growth Associate", "Business Consultant"
]

const industries = [
  "SaaS", "Technology", "FinTech", "Healthcare", "EdTech",
  "Manufacturing", "Consulting", "Professional Services",
  "Artificial Intelligence", "Cloud Software"
]

const testimonials = [
  {
    text: "NextGenHR consistently shared candidates who matched both the role and our company culture.",
    author: "Hiring Manager",
    subtitle: "Technology Company"
  },
  {
    text: "The process was transparent, quick, and professional. I found an opportunity that aligned perfectly with my career goals.",
    author: "Business Development Executive"
  },
  {
    text: "Our hiring cycle became much faster after partnering with NextGenHR.",
    author: "Founder",
    subtitle: "SaaS Startup"
  }
]

function Marquee({ items, direction = "left" }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let animationId

    const scroll = () => {
      if (direction === "left") {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      } else {
        container.scrollLeft -= 1
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [direction])

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap scroll-smooth">
      <div className="inline-flex gap-8">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-gray-600 font-medium text-lg">
            {item}
            {i < items.length * 2 - 1 && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
          </span>
        ))}
      </div>
    </div>
  )
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600">{number}</div>
      <div className="text-sm md:text-base text-gray-600 mt-1">{label}</div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">NextGenHR</span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">Employers</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-blue-600">Sign In</button>
          <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="text-base">🇮🇳</span>
          India's Dedicated Platform for Modern B2B Careers
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Connecting Top Sales Talent with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            High Growth B2B Companies
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Helping ambitious professionals discover rewarding careers in modern B2B sales while helping startups and growing businesses hire exceptional revenue talent.
        </p>

        <p className="mt-3 text-base text-gray-500">
          From SDRs to Customer Success Managers, we connect great people with great companies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-lg">
            Explore Jobs
          </button>
          <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition text-lg">
            Hire Talent
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Stat number="700+" label="Sales Professionals Placed" />
          <Stat number="12,000+" label="Growing Talent Network" />
          <Stat number="150+" label="Companies Hiring" />
          <Stat number="48 Hours" label="Average Candidate Shortlisting" />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

function TrustedBy() {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by Growing Businesses</p>
        <Marquee items={trustedBy} />
      </div>
    </section>
  )
}

function DreamCompanies() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Build Your Career at Companies That Are Shaping Modern B2B Sales
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Whether your dream is joining a fast-growing startup or a global SaaS company, we're here to help you take the next step.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {companies.map((c) => (
            <div key={c} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-5 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:shadow-md transition">
              {c}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-400 max-w-2xl mx-auto">
          These companies represent popular career destinations for B2B sales professionals and are shown for career inspiration.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          Building Careers. Powering Revenue Teams.
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          NextGenHR is India's dedicated recruitment platform for modern B2B careers.
        </p>
        <div className="mt-6 max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed">
          <p>We help startups, SaaS companies, fintech businesses, and growing organizations hire sales professionals who can make an immediate impact.</p>
          <p>At the same time, we help talented professionals discover meaningful opportunities where they can grow faster.</p>
        </div>
      </div>
    </section>
  )
}

const hiringCategories = [
  {
    title: "Sales Hiring",
    items: ["Sales Development Representatives", "Business Development Representatives", "Inside Sales Executives", "Account Executives", "Sales Managers"]
  },
  {
    title: "Customer Success Hiring",
    items: ["Customer Success Executives", "Relationship Managers", "Customer Success Managers", "Account Managers"]
  },
  {
    title: "Revenue Operations",
    items: ["Revenue Operations", "Sales Operations", "CRM Specialists", "Business Analysts"]
  },
  {
    title: "Leadership Hiring",
    items: ["Business Heads", "Sales Heads", "Growth Managers", "Revenue Leaders"]
  }
]

function WhatWeDo() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Recruitment Solutions Built for Revenue Teams</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringCategories.map((cat) => (
            <div key={cat.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const whyUs = [
  { title: "Revenue Hiring Specialists", desc: "We focus exclusively on hiring for modern B2B revenue teams." },
  { title: "Pre Screened Talent", desc: "Every candidate is evaluated before being introduced." },
  { title: "Faster Hiring", desc: "Qualified profiles delivered within days." },
  { title: "Better Candidate Experience", desc: "Clear communication from application to offer." },
  { title: "Nationwide Talent Network", desc: "Hiring across major cities throughout India." },
  { title: "End-to-End Recruitment", desc: "From sourcing to onboarding support." }
]

function WhyNextGenHR() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why NextGenHR</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Companies Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Understand", desc: "We learn about your business and hiring goals." },
    { num: "02", title: "Source", desc: "We search through our growing talent community and sourcing channels." },
    { num: "03", title: "Screen", desc: "Communication, Experience, Role Fit, Career Goals" },
    { num: "04", title: "Shortlist", desc: "Only qualified candidates reach your interview stage." },
    { num: "05", title: "Hire", desc: "We coordinate interviews, offers, and joining." }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-12">A Simple Hiring Process</h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center flex-1 relative">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-[200px]">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-full h-0.5 border-t-2 border-dashed border-blue-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerPaths() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Career Paths</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">Popular Roles We Recruit For</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {careerRoles.map((role) => (
            <span key={role} className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition cursor-default">
              {role}
            </span>
          ))}
        </div>
        <Marquee items={careerRoles.map(r => r + " •")} />
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Industries</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">Helping Companies Build Better Teams</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span key={ind} className="bg-gray-100 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition cursor-default">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Impact() {
  const stats = [
    { number: "700+", label: "Professionals Placed" },
    { number: "12,000+", label: "Candidate Community" },
    { number: "300+", label: "Successful Placements" },
    { number: "95%", label: "Interview Attendance Rate" },
    { number: "48 Hours", label: "Average Candidate Shortlisting" },
    { number: "PAN India", label: "Recruitment Network" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">Numbers That Reflect Our Growing Community</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s) => (
            <Stat key={s.label} number={s.number} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ForJobSeekers() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find More Than Your Next Job</h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-6">
          We help professionals build long-term careers through better opportunities, interview guidance, and access to growing companies.
        </p>
        <ul className="inline-block text-left space-y-2 mb-8 text-blue-100">
          <li className="flex items-center gap-2">✔ Discover quality opportunities</li>
          <li className="flex items-center gap-2">✔ Build your sales career</li>
          <li className="flex items-center gap-2">✔ Learn from hiring trends</li>
          <li className="flex items-center gap-2">✔ Get interview-ready</li>
        </ul>
        <div>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-lg text-lg">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}

function ForEmployers() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a High Performing Revenue Team</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Finding the right sales talent shouldn't slow your growth. Partner with NextGenHR to hire pre-screened professionals who are ready to contribute from day one.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg text-lg">
          Start Hiring
        </button>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">Trusted by Growing Businesses and Ambitious Professionals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition">
              <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{t.author}</div>
                {t.subtitle && <div className="text-sm text-gray-500">{t.subtitle}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Resources() {
  const topics = ["Interview Tips", "Resume Guides", "Sales Career Advice", "Hiring Insights", "LinkedIn Optimization", "Industry Trends"]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Resources</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Stay Ahead in Your Career</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {topics.map((t) => (
            <span key={t} className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition cursor-default">
              {t}
            </span>
          ))}
        </div>
        <button className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg">
          Read Career Resources
        </button>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Next Opportunity?</h2>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
          Whether you're building your career or building your sales team, NextGenHR is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition shadow-lg text-lg">
            Explore Jobs
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition text-lg">
            Hire Talent
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
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
              {["Home", "Jobs", "Employers", "Candidates", "Resources", "About Us", "Contact", "Privacy Policy", "Terms & Conditions"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Email</a></li>
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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <TrustedBy />
      <DreamCompanies />
      <About />
      <WhatWeDo />
      <WhyNextGenHR />
      <HowItWorks />
      <CareerPaths />
      <Industries />
      <Impact />
      <ForJobSeekers />
      <ForEmployers />
      <Testimonials />
      <Resources />
      <FinalCTA />
      <Footer />
    </div>
  )
}
