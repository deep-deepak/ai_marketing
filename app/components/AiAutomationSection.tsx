const capabilities = [
  {
    title: "AI-Powered Content Creation",
    description:
      "Generate SEO-optimised blogs, ad copy, email sequences, and social posts at scale — all reviewed and refined by our human team before delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Automated Lead Nurturing",
    description:
      "AI-driven email and WhatsApp sequences that engage leads at the right time with the right message — turning cold prospects into ready-to-buy clients automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.94 1.18 2 2 0 012.94 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Smart PPC & Ad Optimisation",
    description:
      "AI continuously analyses your Google and Meta campaigns, adjusting bids, audiences, and creatives in real time to squeeze maximum ROI from every rupee spent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics & Reporting",
    description:
      "Move beyond vanity metrics. AI models predict which keywords, channels, and content types will drive the most growth — so every decision is backed by data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "AI SEO & Citation Optimisation",
    description:
      "Optimise your clients' content to appear inside ChatGPT, Gemini, Perplexity, and Google's AI Overviews — the new frontier where search is happening right now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="7" /><path d="M16.5 16.5l3.5 3.5" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
  },
  {
    title: "Workflow & Reporting Automation",
    description:
      "Client onboarding, rank tracking, report generation, and task assignments — all automated so your team spends zero time on admin and 100% on strategy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l2 2 4-4" /><path d="M9 15h6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3×", label: "Faster content production with AI" },
  { value: "60%", label: "Reduction in manual reporting time" },
  { value: "40%", label: "Lower cost per lead with AI ad optimisation" },
  { value: "24/7", label: "Automated lead nurturing — never misses a follow-up" },
];

export function AiAutomationSection() {
  return (
    <section className="relative bg-black px-6 md:px-10 py-16 overflow-hidden">

      {/* Subtle background glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "10%", right: "-200px",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, #00BCD4 0%, transparent 65%)",
          opacity: 0.08,
          filter: "blur(80px)",
          animation: "floatUp 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "5%", left: "-200px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, #0288D1 0%, transparent 65%)",
          opacity: 0.08,
          filter: "blur(80px)",
          animation: "floatDown 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            The Future of Marketing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            AI Automation Meets <br className="hidden sm:block" />
            Digital Marketing
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            We don't just run campaigns — we build intelligent systems that work around the clock.
            AI handles the repetitive. Our experts handle the strategy. Your clients get results they can't explain to competitors.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors duration-200">
                {c.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center overflow-hidden hover:border-cyan-500/40 transition-colors duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
              <p className="relative text-3xl md:text-4xl font-extrabold text-cyan-400">{s.value}</p>
              <p className="relative mt-1 text-gray-400 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-500/20 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #00BCD4 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.04 }} />
          <div className="relative max-w-xl">
            <h3 className="text-white text-xl font-extrabold">
              Stop Doing Manually What AI Can Do Better
            </h3>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              Let us plug AI automation into your agency's delivery stack — so you scale revenue without scaling headcount.
            </p>
          </div>
          <a
            href="#contact"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
          >
            See How It Works
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
