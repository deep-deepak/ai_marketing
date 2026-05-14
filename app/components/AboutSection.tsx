import Image from "next/image";

const stats = [
  { value: "50+", label: "In-house Experts" },
  { value: "300+", label: "SOPs Documented" },
  { value: "7+", label: "Years in Digital Marketing" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  {
    title: "We Stay Accountable",
    description:
      "Every campaign, every rupee, every result is tracked and reported. No fluff, no vanity metrics — only the numbers that actually impact your bottom line.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: "Process Over Guesswork",
    description:
      "Every campaign runs on data-backed strategies and AI-driven insights. Predictable inputs produce predictable results — no guesswork, no surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "One Roof, Full Control",
    description:
      "Our entire team — AI engineers, marketers, designers, analysts — works from a single location. No outsourcing, no quality gaps, full accountability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Top — two column */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Built to Help Businesses<br className="hidden sm:block" /> Grow Smarter
            </h2>
            <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
              AI Mentors was founded by a team of digital marketers and AI engineers who saw
              one recurring problem — businesses spending huge budgets on marketing that wasn't
              working. We built the systems, the automation, and the strategies we always knew
              were missing.
            </p>
            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
              Today we work directly with businesses — from startups to established brands —
              helping them cut marketing waste, automate the repetitive, and focus their budget
              where it actually drives growth.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
            >
              Let's Talk
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right — image */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/diverse-people-working-office.jpg"
              alt="Our team"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-colors duration-200"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-400">{s.value}</p>
              <p className="mt-1 text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-900 border border-white/10 rounded-2xl p-7 hover:border-cyan-500/40 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
