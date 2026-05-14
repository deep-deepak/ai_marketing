const services = [
  {
    title: "SEO & AI Search",
    description:
      "Rank your business on Google and get cited in AI tools like ChatGPT, Gemini and Claude — capturing customers wherever they search.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5l3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Paid Advertising",
    description:
      "Data-driven Google Ads, Meta Ads, and PPC campaigns that put your business in front of the right audience and turn clicks into real paying customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12l8-8 8 8" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "AI Marketing & Automation",
    description:
      "Automate your marketing workflows with AI — from lead nurturing and content creation to campaign optimisation — so your business grows around the clock.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export function ExpertiseSection() {
  return (
    <section className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
          Your Growth. Our Expertise.
        </h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-900 rounded-2xl border border-white/10 p-7 flex flex-col gap-5 hover:border-cyan-500/40 transition-colors duration-200"
            >
              {/* Stacked icon badge */}
              <div className="relative w-12 h-12 self-start">
                <div className="absolute bottom-0 left-1 w-10 h-10 rounded-xl bg-cyan-900/30 rotate-6" />
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  {s.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-bold text-lg leading-snug">{s.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
