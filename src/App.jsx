import { useEffect, useRef } from 'react'

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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Navbar */}
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="text-base">🇮🇳</span>
            Modern B2B Careers Platform
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Connecting Top Sales Talent with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              High-Growth B2B Companies
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            India's Dedicated Platform for Modern B2B Careers
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-lg">
              Explore Jobs
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition text-lg">
              Hire Talent
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatCard number="700+" label="Sales Professionals Placed" />
            <StatCard number="12,000" label="Growing Talent Network" />
            <StatCard number="150+" label="Companies Hiring" />
            <StatCard number="40" label="Average Candidate Shortlisting" />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
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
          <p className="mt-6 text-xs text-gray-400 max-w-2xl mx-auto">
            These companies represent popular career destinations for B2B sales professionals and are shown for career inspiration.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent pointer-events-none hidden md:block" />
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

      {/* For Job Seekers */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">For Job Seekers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Find More Than Your Next Job</h2>
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

      {/* For Employers */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">For Employers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Build a High Performing Revenue Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Finding the right sales talent shouldn't slow your growth. Partner with NextGenHR to hire pre-screened professionals who are ready to contribute from day one.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg text-lg">
            Start Hiring
          </button>
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
          <button className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg">
            Read Career Resources
          </button>
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
            <button className="w-full sm:w-auto bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition shadow-lg text-lg">
              Explore Jobs
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition text-lg">
              Hire Talent
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
