import Image from "next/image";

const features = [
  {
    title: "Operations",
    description:
      "Defined processes with review checkpoints so all your projects stay on track from start to finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5l3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Delivery",
    description:
      "A 50+ in-house team, fully synced with you and completely invisible to your end-clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#00BCD4" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export function StructuredSection() {
  return (
    <section className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Top card */}
        <div className="bg-gray-900 rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left — heading + description */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                How We're Structured
              </h2>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
                Our setup is built around documented SEO SOPs that systemize
                daily execution and maintain delivery consistency. This ensures
                every deliverable we provide is predictable, scalable and most
                importantly reliable.
              </p>
            </div>

            {/* Right — feature list */}
            <div className="flex flex-col gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{f.title}</h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 w-full h-72 md:h-96 relative">
          <Image
            src="/diverse-people-working-office.jpg"
            alt="Our team at work"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

      </div>
    </section>
  );
}
