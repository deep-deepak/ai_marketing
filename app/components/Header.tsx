"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useState, useRef, useEffect } from "react";

const CYAN = "#00BCD4";

const services = [
  {
    label: "SEO & AI Search",
    href: "#white-label-seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke={CYAN} strokeWidth={1.8} />
        <path d="M16 16l4 4" stroke={CYAN} strokeWidth={1.8} strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke={CYAN} strokeWidth={1.6} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Paid Advertising",
    href: "#white-label-link-building",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="12" width="4" height="9" rx="1" fill={CYAN} />
        <rect x="10" y="7" width="4" height="14" rx="1" fill={CYAN} />
        <rect x="17" y="3" width="4" height="18" rx="1" fill={CYAN} />
      </svg>
    ),
  },
  {
    label: "AI Marketing & Automation",
    href: "#white-label-local-seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={CYAN} strokeWidth={1.8} />
        <path d="M9 12l2 2 4-4" stroke={CYAN} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo uid="header" className="w-[200px] h-[48px]" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-cyan-400 transition-colors duration-150"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-xl border border-white/10 py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-150"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="flex-shrink-0">{s.icon}</span>
                    <span className="text-gray-200 text-sm font-medium">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#about" className="hover:text-cyan-400 transition-colors duration-150">About</Link>
          <Link href="#blog" className="hover:text-cyan-400 transition-colors duration-150">Blog</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold transition-colors duration-150"
        >
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-4 gap-1 bg-black">

          {/* Mobile Services */}
          <button
            className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-gray-300 hover:text-cyan-400"
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services
            <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1 mb-1">
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 py-2 text-sm text-gray-400 hover:text-cyan-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="#about" className="py-2.5 text-sm font-medium text-gray-300 hover:text-cyan-400" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="#blog" className="py-2.5 text-sm font-medium text-gray-300 hover:text-cyan-400" onClick={() => setMobileOpen(false)}>Blog</Link>

          <Link
            href="#contact"
            className="mt-3 inline-flex justify-center px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold transition-colors duration-150"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
