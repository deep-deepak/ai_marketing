export function FitSection() {
  return (
    <section id="contact" className="bg-black px-6 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-white/10 rounded-2xl px-8 md:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="text-xl md:text-2xl font-extrabold text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">
              A free 20-minute call to understand your business goals and show you exactly
              how AI automation + digital marketing can drive your next stage of growth.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
