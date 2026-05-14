const steps = [
  {
    number: "01",
    title: "Business Discovery",
    description:
      "We start with a focused conversation — no hard sell. We learn about your business, your current marketing, pain points, and revenue goals so we can design the right growth strategy for you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy & Setup",
    description:
      "Once we're aligned, we audit your current digital presence, map out a 90-day AI-powered growth strategy, and set up all tracking and automation infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI-Powered Execution",
    description:
      "Our 50+ in-house specialists and AI systems get to work — SEO fixes, ad campaigns, content production, automation workflows. Every task follows a documented SOP and goes through a quality review before launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Results & Scaling",
    description:
      "Every month you receive clear, data-backed reports showing exactly what's working. As results grow, we scale your campaigns, expand into new channels, and compound your ROI — all without proportionally growing your budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            From understanding your business to delivering measurable growth — here's exactly how we work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">

              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gray-900 border-2 border-cyan-500/40 group-hover:border-cyan-500 flex flex-col items-center justify-center gap-1 transition-colors duration-200 mb-6">
                <span className="text-cyan-500 text-xs font-bold tracking-widest">{step.number}</span>
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-14 bg-gray-900 border border-white/10 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">Ready to see this in action?</p>
            <p className="text-gray-400 text-sm mt-1">Book a free 20-minute call — no commitment, no pitch decks.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
          >
            Book a Call
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
