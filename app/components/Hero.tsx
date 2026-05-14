export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00BCD4 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.08,
        }}
      />

      {/* Orb — top left cyan */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-100px", left: "-100px",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, #00BCD4 0%, transparent 65%)",
          opacity: 0.35,
          filter: "blur(60px)",
          animation: "floatUp 10s ease-in-out infinite",
        }}
      />

      {/* Orb — bottom right blue */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-100px", right: "-100px",
          width: "650px", height: "650px",
          background: "radial-gradient(circle, #0288D1 0%, transparent 65%)",
          opacity: 0.35,
          filter: "blur(60px)",
          animation: "floatDown 8s ease-in-out infinite",
        }}
      />

      {/* Orb — center drifting */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "50%", left: "50%",
          width: "400px", height: "400px",
          marginTop: "-200px", marginLeft: "-200px",
          background: "radial-gradient(circle, #00BCD4 0%, transparent 65%)",
          filter: "blur(70px)",
          animation: "pulseGlow 7s ease-in-out infinite",
          opacity: 0.2,
        }}
      />

      {/* Spinning ring — top right outer */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "60px", right: "60px",
          width: "220px", height: "220px",
          border: "1.5px solid rgba(0,188,212,0.5)",
          animation: "spinCW 20s linear infinite",
        }}
      />
      {/* Spinning ring — top right inner */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "90px", right: "90px",
          width: "160px", height: "160px",
          border: "1.5px solid rgba(0,188,212,0.3)",
          animation: "spinCCW 14s linear infinite",
        }}
      />

      {/* Spinning ring — bottom left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "60px", left: "60px",
          width: "180px", height: "180px",
          border: "1.5px solid rgba(0,188,212,0.4)",
          animation: "spinCCW 16s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          White Label SEO Services{" "}
          <br className="hidden sm:block" />
          for Digital Agencies
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Backed by 300+ SOPs, 50+ in-house team, and strict NDA protection so
          your brand stays yours and your clients stay happy.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150 w-full sm:w-auto text-center"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-150"
          >
            Explore our Services
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
