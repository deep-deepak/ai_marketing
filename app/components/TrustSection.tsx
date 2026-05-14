const stats = [
  { title: "In-house Team",   description: "50+ full-time experts working from a single location" },
  { title: "300+ SOPs",       description: "Defined workflow for every service we deliver" },
  { title: "Quality Control", description: "Every task reviewed 3 times before final handoff" },
  { title: "Stable Infra",    description: "Compliance-backed systems built for long-term partnership" },
];

const row1 = [
  "SEO", "PPC", "Meta Ads", "Google Ads", "Graphic Design", "AI Marketing",
  "Content Marketing", "Email Marketing", "Social Media", "Local SEO",
  "Link Building", "Analytics & Reporting",
];
const row2 = [
  "AI-Powered SEO", "ChatGPT Citation", "Predictive Analytics", "Conversion Optimisation",
  "Video Marketing", "Reputation Management", "AI Content Creation", "Performance Marketing",
  "Brand Strategy", "Programmatic Ads", "AI Automation", "Growth Hacking",
];

const expertise = [
  {
    category: "Search & SEO",
    color: "#00BCD4",
    items: ["Technical SEO", "On-Page SEO", "Link Building", "Local SEO", "AI Overviews & SGE"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="7" /><path d="M16.5 16.5l3.5 3.5" />
      </svg>
    ),
  },
  {
    category: "Paid Advertising",
    color: "#0288D1",
    items: ["Google Ads", "Meta Ads", "PPC Campaigns", "Retargeting", "YouTube Ads"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0288D1" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    category: "Creative & Design",
    color: "#00BCD4",
    items: ["Graphic Design", "Ad Creatives", "Brand Identity", "Video Editing", "Landing Pages"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    category: "AI + Digital Marketing",
    color: "#0288D1",
    items: ["AI Content Creation", "ChatGPT Optimisation", "Predictive Analytics", "AI Automation", "AI Ad Copy"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0288D1" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h.01M15 9h.01M9 15h6" />
      </svg>
    ),
  },
  {
    category: "Content & Social",
    color: "#00BCD4",
    items: ["Content Marketing", "Social Media Mgmt", "Email Marketing", "Blog Writing", "Copywriting"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    category: "Analytics & Growth",
    color: "#0288D1",
    items: ["GA4 & Tracking", "Conversion Rate Opt.", "Performance Reports", "A/B Testing", "Growth Strategy"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0288D1" strokeWidth={1.8} strokeLinecap="round" className="w-6 h-6">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
      {label}
    </span>
  );
}

export function TrustSection() {
  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = [...row2, ...row2];

  return (
    <section className="bg-black px-6 md:px-10 py-24">

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Powers AI Mentors</h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Our streamlined white-label operations across digital marketing and AI — the real reasons
            agency owners trust us with their clients' growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-500/50 transition-colors duration-200">
              <div className="w-1 h-6 rounded-full bg-cyan-500 mb-3" />
              <h3 className="text-cyan-400 font-bold text-base md:text-lg">{s.title}</h3>
              <p className="mt-1 text-gray-300 text-sm font-medium leading-snug">{s.description}</p>
            </div>
          ))}
        </div>

        {/* ── Scrolling keyword marquee ── */}
        <div>
          <p className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">Our Expertise Spans Across</p>

          {/* Row 1 — scrolls left */}
          <div className="overflow-hidden mb-3">
            <div className="flex gap-3" style={{ width: "max-content", animation: "marqueeLeft 30s linear infinite" }}>
              {doubleRow1.map((label, i) => <Tag key={i} label={label} />)}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="overflow-hidden">
            <div className="flex gap-3" style={{ width: "max-content", animation: "marqueeRight 35s linear infinite" }}>
              {doubleRow2.map((label, i) => <Tag key={i} label={label} />)}
            </div>
          </div>
        </div>

        {/* ── Expertise grid ── */}
        <div>
          <p className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">Full-Service Digital Marketing + AI</p>
          <div className="grid md:grid-cols-3 gap-5">
            {expertise.map((e) => (
              <div key={e.category} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${e.color}15`, border: `1px solid ${e.color}30` }}>
                    {e.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm">{e.category}</h3>
                </div>
                <ul className="space-y-2">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative text-center border border-white/10 rounded-2xl px-8 py-12 overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 pointer-events-none" />
          <h2 className="relative text-2xl md:text-3xl font-extrabold text-white">100% Risk-Free White Label Partnership</h2>
          <p className="relative mt-3 text-gray-400 text-sm md:text-base">Zero contracts. Real results. Your clients stay happy. Your agency grows.</p>
          <a href="#contact" className="relative mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150">
            <span>→</span> Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}
