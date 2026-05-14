const CYAN = "#00BCD4";

const services = [
  {
    id: "white-label-seo",
    tag: "White Label SEO",
    heading: "Rank Your Clients. Keep Your Brand.",
    description:
      "We handle the full SEO execution under your agency's name — from technical audits to content and link acquisition. Your clients see results; they only see you.",
    features: [
      "Full technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page optimisation & schema markup",
      "Monthly white-label reporting",
      "AI overview & ChatGPT citation targeting",
      "Dedicated account manager",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect width="56" height="56" rx="14" fill={CYAN} fillOpacity="0.1" />
        <circle cx="26" cy="26" r="10" stroke={CYAN} strokeWidth="2.2" />
        <path d="M33 33l7 7" stroke={CYAN} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 26h8M26 22v8" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "white-label-link-building",
    tag: "White Label Link Building",
    heading: "Real Links. Real Authority. Zero Risk.",
    description:
      "We secure editorial placements on legitimate, high-DR websites that move the needle on domain authority and organic traffic — all delivered under your brand.",
    features: [
      "Manual outreach on DR 40–90+ sites",
      "Niche-relevant, editorial placements",
      "Full anchor text control",
      "Live link reports with DA/DR metrics",
      "No PBNs, no spam, no footprints",
      "Scalable monthly link packages",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect width="56" height="56" rx="14" fill={CYAN} fillOpacity="0.1" />
        <path d="M23 33a7 7 0 010-10l3-3a7 7 0 019.9 9.9l-1.5 1.5" stroke={CYAN} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M33 23a7 7 0 010 10l-3 3a7 7 0 01-9.9-9.9l1.5-1.5" stroke={CYAN} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "white-label-local-seo",
    tag: "White Label Local SEO",
    heading: "Put Your Clients on the Local Map.",
    description:
      "We optimise Google Business Profiles, build local citations, and run location-specific SEO so your clients' phones ring and their doors open — all without them knowing we exist.",
    features: [
      "Google Business Profile management",
      "NAP citation building & cleanup",
      "Local keyword & competitor research",
      "Review strategy & reputation management",
      "Location page creation & optimisation",
      "Local rank tracking & white-label reports",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect width="56" height="56" rx="14" fill={CYAN} fillOpacity="0.1" />
        <path d="M28 14C22.48 14 18 18.48 18 24c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10z" fill={CYAN} fillOpacity="0.2" stroke={CYAN} strokeWidth="2.2" />
        <circle cx="28" cy="24" r="3.5" fill={CYAN} />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9" fill={CYAN} fillOpacity="0.15" stroke={CYAN} strokeWidth="1.5" />
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke={CYAN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Services Built for Agencies
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Everything runs under your brand. Your clients stay yours. We stay invisible.
          </p>
        </div>

        {/* Service cards */}
        {services.map((s, i) => (
          <div
            key={s.tag}
            id={s.id}
            className={`bg-gray-900 border border-white/10 rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Left — text */}
            <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <div className="flex items-center gap-3 mb-4">
                {s.icon}
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-extrabold leading-snug mb-3">
                {s.heading}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
              >
                Get in touch
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Right — feature list */}
            <div className={`bg-black/40 border border-white/10 rounded-xl p-6 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
                What's included
              </p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
