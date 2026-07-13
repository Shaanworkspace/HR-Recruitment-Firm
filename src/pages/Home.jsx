import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const logoCompanies = [
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Freshworks", logo: "/logos/freshworks.png" },
  { name: "Zoho", logo: "/logos/zoho.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google Cloud", logo: "/logos/googlecloud.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
  { name: "SAP", logo: "/logos/sap.svg" },
  { name: "Atlassian", logo: "/logos/atlassian.svg" },
  { name: "ServiceNow", logo: "/logos/servicenow.svg" },
  { name: "Razorpay", logo: "/logos/razorpay.png" },
  { name: "Chargebee", logo: "/logos/chargebee.svg" },
  { name: "BrowserStack", logo: "/logos/browserstack.svg" },
  { name: "Postman", logo: "/logos/postman.svg" },
  { name: "CleverTap", logo: "/logos/clevertap.png" },
  { name: "LeadSquared", logo: "/logos/leadsquared.png" },
  { name: "Darwinbox", logo: "/logos/darwinbox.png" },
  { name: "MoEngage", logo: "/logos/moengage.png" },
  { name: "Whatfix", logo: "/logos/whatfix.png" },
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
    text: "Three interviews were lined up within the first week, and the roles actually matched what I'd been doing. The shortlisting was genuinely fast.",
    author: "Sneha Iyer",
    subtitle: "Business Development Representative, SaaS Startup"
  },
  {
    text: "Switching from EdTech to B2B SaaS, I wasn't sure my profile would fit. They explained the role clearly and prepped me before the founder round. I cleared it.",
    author: "Arjun Nair",
    subtitle: "Account Executive, FinTech"
  },
  {
    text: "We hired two SDRs through NextGenHR in under a month. Both showed up interview-ready and are still with us nine months later.",
    author: "Karthik Rao",
    subtitle: "Founder, Revenue Tech Startup"
  }
]

function LogoImg({ logo, name, dim = "w-9 h-9" }) {
  return (
    <img
      src={logo}
      alt={name}
      className={`${dim} object-contain shrink-0`}
    />
  )
}

function LogoCard({ name, logo }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-3 min-w-[180px] shadow-sm hover:shadow-md transition">
      <LogoImg logo={logo} name={name} />
      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{name}</span>
    </div>
  )
}

function LogoMarquee() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let animationId
    const scroll = () => {
      container.scrollLeft += 1
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden scroll-smooth">
      <div className="inline-flex gap-4">
        {[...logoCompanies, ...logoCompanies].map((c, i) => (
          <LogoCard key={i} name={c.name} logo={c.logo} />
        ))}
      </div>
    </div>
  )
}

function TextMarquee({ items }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let animationId
    const scroll = () => {
      container.scrollLeft += 1
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden scroll-smooth">
      <div className="inline-flex gap-8">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-gray-600 font-medium text-lg whitespace-nowrap">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </span>
        ))}
      </div>
    </div>
  )
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="text-3xl md:text-4xl font-bold text-blue-600">{number}</div>
      <div className="text-sm text-gray-600 mt-1.5 leading-tight">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 -mt-20">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-blue-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-blue-200 text-sm font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              India's Dedicated Platform for Modern B2B Careers
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Connecting Top Sales Talent with{' '}
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                High-Growth B2B Companies
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              We help ambitious professionals build careers in modern B2B sales, and help startups hire revenue talent that performs from day one.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/jobs" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/40 text-lg text-center">
                Explore Jobs
              </Link>
              <Link to="/employers" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition text-lg text-center">
                Hire Talent
              </Link>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="700+" label="Sales Professionals Placed" />
            <StatCard number="12,000" label="Growing Talent Network" />
            <StatCard number="150+" label="Companies Hiring" />
            <StatCard number="40" label="Average Candidate Shortlisting" />
          </div>
        </div>
      </section>

      {/* Trusted by Growing Businesses */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted by Growing Businesses
          </p>
          <p className="text-center text-gray-600 text-sm mb-8">
            Build your career at companies that are shaping modern B2B sales.
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* Dream Companies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build Your Career at Companies That Are Shaping Modern B2B Sales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Whether your dream is joining a fast-growing startup or a global SaaS company, we're here to help you take the next step.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {logoCompanies.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-gray-200 rounded-xl px-4 py-6 text-center hover:border-blue-300 hover:shadow-md transition group"
              >
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <LogoImg logo={c.logo} name={c.name} dim="w-12 h-12" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Recruitment Solutions Built for Revenue Teams</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((cat) => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NextGenHR */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why NextGenHR</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Companies Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Revenue Hiring Specialists", desc: "We focus exclusively on hiring for modern B2B revenue teams." },
              { title: "Pre Screened Talent", desc: "Every candidate is evaluated before being introduced." },
              { title: "Faster Hiring", desc: "Qualified profiles delivered within days." },
              { title: "Better Candidate Experience", desc: "Clear communication from application to offer." },
              { title: "Nationwide Talent Network", desc: "Hiring across major cities throughout India." },
              { title: "End-to-End Recruitment", desc: "From sourcing to onboarding support." }
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-12">A Simple Hiring Process</h2>
          <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0">
            {[
              { num: "01", title: "Understand", desc: "We learn about your business and hiring goals." },
              { num: "02", title: "Source", desc: "We search through our growing talent community and sourcing channels." },
              { num: "03", title: "Screen", desc: "Communication, Experience, Role Fit, Career Goals" },
              { num: "04", title: "Shortlist", desc: "Only qualified candidates reach your interview stage." },
              { num: "05", title: "Hire", desc: "We coordinate interviews, offers, and joining." }
            ].map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center flex-1 relative">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 max-w-[200px]">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full h-0.5 border-t-2 border-dashed border-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 md:py-24">
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
          <TextMarquee items={careerRoles} />
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Helping Companies Build Better Teams</h2>
            <p className="text-gray-600 mb-10">
              From early-stage SaaS to enterprise fintech, we hire revenue talent across the sectors shaping India's B2B landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-sm font-semibold text-gray-800">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">Numbers That Reflect Our Growing Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { number: "700+", label: "Professionals Placed" },
              { number: "12,000+", label: "Candidate Community" },
              { number: "300+", label: "Successful Placements" },
              { number: "95%", label: "Interview Attendance Rate" },
              { number: "48 Hours", label: "Average Candidate Shortlisting" },
              { number: "PAN India", label: "Recruitment Network" }
            ].map((s) => (
              <StatCard key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/60 to-transparent pointer-events-none hidden md:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Building Careers. Powering Revenue Teams.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              NextGenHR is India's dedicated recruitment platform for modern B2B careers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              We help startups, SaaS companies, fintech businesses, and growing organizations hire sales professionals who can make an immediate impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At the same time, we help talented professionals discover meaningful opportunities where they can grow faster.
            </p>
            <Link to="/about" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700 transition">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">For Job Seekers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Find more than your next job.</h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                We help professionals build long-term careers through better opportunities, interview guidance, and access to growing companies.
              </p>
              <Link to="/jobs" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg">
                Explore Opportunities
              </Link>
            </div>
            <div className="border-t border-gray-200">
              {[
                ["01", "Discover quality opportunities", "Roles matched to your experience, not just keyword hits."],
                ["02", "Build your sales career", "Profiles reviewed by people who understand B2B revenue."],
                ["03", "Learn from hiring trends", "Know what modern revenue teams are actually looking for."],
                ["04", "Get interview-ready", "Clear communication from application to offer."]
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-5 py-5 border-b border-gray-200">
                  <span className="text-blue-600 font-bold text-sm mt-0.5">{n}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">For Employers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Build a High Performing Revenue Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Finding the right sales talent shouldn't slow your growth. Partner with NextGenHR to hire pre-screened professionals who are ready to contribute from day one.
          </p>
          <Link to="/employers" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg text-lg">
            Start Hiring
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">Trusted by Growing Businesses and Ambitious Professionals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition">
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

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Stay Ahead in Your Career</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Interview Tips", "Resume Guides", "Sales Career Advice", "Hiring Insights", "LinkedIn Optimization", "Industry Trends"].map((t) => (
              <span key={t} className="bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition cursor-default">
                {t}
              </span>
            ))}
          </div>
          <Link to="/resources" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg inline-block">
            Read Career Resources
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Next Opportunity?</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Whether you're building your career or building your sales team, NextGenHR is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/jobs" className="w-full sm:w-auto bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition shadow-lg text-lg">
              Explore Jobs
            </Link>
            <Link to="/employers" className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition text-lg">
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
