"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does AI Mentors provide?",
    answer:
      "We offer a full suite of AI-powered digital marketing services — including SEO, Google Ads, Meta Ads, content marketing, graphic design, social media management, and marketing automation. Everything is designed to help your business generate more leads and revenue.",
  },
  {
    question: "How is AI used in your marketing services?",
    answer:
      "AI powers almost every part of what we do — from content creation and ad copy generation to campaign optimisation, lead scoring, predictive analytics, and automated reporting. This means faster results, lower costs, and smarter decisions for your business.",
  },
  {
    question: "How quickly can my business get started?",
    answer:
      "After an initial discovery call, we typically have your campaigns live within 5–7 business days. We move fast, but we don't cut corners — every campaign is built on a solid strategy before launch.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Paid campaigns (Google Ads, Meta Ads) can generate leads within the first week. SEO typically shows meaningful traction within 3–6 months. AI automation benefits are visible almost immediately once workflows go live.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We work month-to-month. We believe consistent results are what keep clients with us — not contracts. Most of our clients stay long-term because the ROI speaks for itself.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with businesses of all sizes — startups, growing SMEs, and established brands. Whether you're in e-commerce, services, real estate, education, or healthcare, our strategies are tailored to your specific market and goals.",
  },
  {
    question: "How do you measure and report results?",
    answer:
      "You receive a clear monthly report covering traffic, leads, ad performance, keyword rankings, and ROI. We track only the metrics that matter to your business revenue — no vanity stats.",
  },
  {
    question: "What makes AI Mentors different from other digital marketing companies?",
    answer:
      "Most agencies rely on manual processes and guesswork. We combine AI automation with experienced human strategists — giving you the speed and scale of AI with the judgment and creativity of a senior marketing team. One partner for everything: SEO, ads, content, design, and automation.",
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
            Everything businesses want to know before getting started — answered honestly.
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
