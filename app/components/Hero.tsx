export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Grow Your Business with AI Automation{" "}
          <br className="hidden sm:block" />
          & Digital Marketing
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We combine the power of AI automation with proven digital marketing
          strategies to help businesses generate more leads, increase revenue,
          and dominate their market.
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
