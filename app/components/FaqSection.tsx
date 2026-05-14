"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is white label SEO?",
    answer:
      "White label SEO means we handle all the SEO work — audits, content, link building, reporting — while you present it to your clients as your own service. Your branding is on everything. We stay completely in the background.",
  },
  {
    question: "Will my clients ever find out you're involved?",
    answer:
      "Never. We operate under strict NDA and have no contact with your clients unless you explicitly ask us to. All reports, communications, and deliverables carry your agency's branding only.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Once we have a quick onboarding call to understand your client's goals and current situation, most campaigns are set up and running within 5–7 business days. We move fast without cutting corners.",
  },
  {
    question: "How long before my clients see real results?",
    answer:
      "SEO is a long-term investment. Most clients start seeing meaningful movement in rankings and traffic within 3–6 months. Local SEO campaigns typically show results faster — often within 4–8 weeks for Google Business Profile improvements.",
  },
  {
    question: "Do you lock agencies into long-term contracts?",
    answer:
      "No. We work on a month-to-month basis. We believe results should earn your continued partnership — not a contract. That said, most of our agency partners stay with us long-term because the outcomes speak for themselves.",
  },
  {
    question: "What does your reporting look like?",
    answer:
      "We provide fully white-labelled monthly reports covering keyword rankings, organic traffic, technical health, link acquisition, and campaign highlights. Reports are branded with your agency logo and are ready to forward directly to clients.",
  },
  {
    question: "Can I scale up or down based on client demand?",
    answer:
      "Absolutely. Our packages are flexible. You can add or remove clients, upgrade service tiers, or pause campaigns with 30 days' notice. We're built to grow with your agency, not hold you back.",
  },
  {
    question: "What makes AI Mentors different from other white label providers?",
    answer:
      "We have a 50+ in-house team working from a single location — no subcontractors, no overseas outsourcing. Every campaign runs on 300+ documented SOPs. Combined with our strict NDA policy and month-to-month model, we're the partner agencies actually trust.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`text-sm md:text-base font-semibold transition-colors duration-150 ${open ? "text-cyan-400" : "text-white"}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${open ? "border-cyan-500 bg-cyan-500/10 rotate-45" : "border-white/20 bg-white/5"}`}>
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
            <path d="M8 3v10M3 8h10" stroke={open ? "#00BCD4" : "#9ca3af"} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 pb-5" : "max-h-0"}`}>
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Questions We Get Asked
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Everything agencies want to know before partnering with us — answered honestly.
          </p>
        </div>

        {/* Two-column FAQ */}
        <div className="grid md:grid-cols-2 gap-x-12">
          <div className="bg-gray-900 border border-white/10 rounded-2xl px-6 divide-y-0">
            {faqs.slice(0, 4).map((f) => (
              <FaqItem key={f.question} {...f} />
            ))}
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl px-6 divide-y-0 mt-6 md:mt-0">
            {faqs.slice(4).map((f) => (
              <FaqItem key={f.question} {...f} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Still have questions? We're happy to talk.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors duration-150"
          >
            Get in touch
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
