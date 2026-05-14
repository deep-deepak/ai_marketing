import Image from "next/image";

const socials = [
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM3.56 20.45h3.55V9H3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.71 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32A6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const services = ["White Label SEO", "White Label Link Building", "White Label Local SEO"];
const company  = ["About us", "Blog", "Contact"];
const legal    = ["Privacy Policy"];

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">

          {/* Logo + socials */}
          <div className="flex flex-col justify-between gap-10">
            <div className="relative w-[140px] h-[52px] overflow-hidden">
              <Image
                src="/IMG_7743.jpg"
                alt="Logo"
                fill
                style={{ objectFit: "cover", objectPosition: "center 50%" }}
                priority
              />
            </div>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-200 text-sm hover:text-cyan-400 transition-colors duration-150">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">Company</p>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-200 text-sm hover:text-cyan-400 transition-colors duration-150">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">Legal</p>
            <ul className="space-y-3">
              {legal.map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-200 text-sm hover:text-cyan-400 transition-colors duration-150">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">Address</p>
            <address className="not-italic text-gray-400 text-sm leading-relaxed space-y-1">
              <p>Sco 415,</p>
              <p>TDI South ex-2,</p>
              <p>Sec 117,</p>
              <p>Mohali</p>
            </address>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">© 2026 AI Mentors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
