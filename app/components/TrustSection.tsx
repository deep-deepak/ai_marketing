const stats = [
  { title: "In-house Team",   description: "50+ full-time SEO experts working from a single location" },
  { title: "300+ SOPs",       description: "Defined workflow for SEO and powerful link building" },
  { title: "Quality Control", description: "Every task reviewed 3 times before final handoff" },
  { title: "Stable Infra",    description: "Compliance-backed systems built for long-term partnership" },
];

export function TrustSection() {
  return (
    <section className="relative bg-black px-6 md:px-10 py-24 overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00BCD4 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.08,
        }}
      />

      {/* Orb — top left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-100px", left: "-100px",
          width: "550px", height: "550px",
          background: "radial-gradient(circle, #00BCD4 0%, transparent 65%)",
          opacity: 0.35,
          filter: "blur(60px)",
          animation: "floatUp 9s ease-in-out infinite",
        }}
      />

      {/* Orb — bottom right */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-100px", right: "-100px",
          width: "580px", height: "580px",
          background: "radial-gradient(circle, #0288D1 0%, transparent 65%)",
          opacity: 0.35,
          filter: "blur(60px)",
          animation: "floatDown 7s ease-in-out infinite",
        }}
      />

      {/* Orb — center pulse */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "50%", left: "50%",
          width: "350px", height: "350px",
          marginTop: "-175px", marginLeft: "-175px",
          background: "radial-gradient(circle, #00BCD4 0%, transparent 65%)",
          filter: "blur(70px)",
          animation: "pulseGlow 6s ease-in-out infinite",
          opacity: 0.2,
        }}
      />

      {/* Spinning ring — top right */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "30px", right: "30px",
          width: "200px", height: "200px",
          border: "1.5px solid rgba(0,188,212,0.5)",
          animation: "spinCW 18s linear infinite",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "55px", right: "55px",
          width: "150px", height: "150px",
          border: "1.5px solid rgba(0,188,212,0.3)",
          animation: "spinCCW 12s linear infinite",
        }}
      />

      {/* Spinning ring — bottom left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "30px", left: "30px",
          width: "140px", height: "140px",
          border: "1.5px solid rgba(0,188,212,0.4)",
          animation: "spinCCW 15s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Powers AI Mentors
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Our streamlined white-label operations and processes — the real reasons
            agency owners trust us with their clients' SEO and link building.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-500/50 transition-colors duration-200"
            >
              <div className="w-1 h-6 rounded-full bg-cyan-500 mb-3" />
              <h3 className="text-cyan-400 font-bold text-base md:text-lg">{s.title}</h3>
              <p className="mt-1 text-gray-300 text-sm font-medium leading-snug">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="relative text-center border border-white/10 rounded-2xl px-8 py-12 overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 pointer-events-none" />
          <h2 className="relative text-2xl md:text-3xl font-extrabold text-white">
            100% Risk-Free White Label SEO Partnership
          </h2>
          <p className="relative mt-3 text-gray-400 text-sm md:text-base">
            Zero contracts. Real results. Your clients stay happy. Your agency grows.
          </p>
          <a
            href="#contact"
            className="relative mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
          >
            <span>→</span> Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}
