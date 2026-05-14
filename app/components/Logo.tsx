export function Logo({ className = "", uid = "a" }: { className?: string; uid?: string }) {
  const gradId = `logoGrad-${uid}`;
  return (
    <svg
      viewBox="0 0 242 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AI Mentors"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="46" x2="36" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>

      {/* A — left leg */}
      <polygon points="20,2 1,46 10,46" fill={`url(#${gradId})`} />
      {/* A — right leg */}
      <polygon points="20,2 39,46 30,46" fill={`url(#${gradId})`} />
      {/* A — crossbar */}
      <rect x="9" y="27" width="22" height="5.5" fill={`url(#${gradId})`} />

      {/* i — dot */}
      <circle cx="53" cy="6" r="5" fill="#00E5FF" />
      {/* i — body */}
      <rect x="49.5" y="15" width="7" height="31" rx="1.5" fill="#00E5FF" />

      {/* MENTORS */}
      <text
        x="68"
        y="42"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize="27"
        fontWeight="900"
        fill="white"
        letterSpacing="1"
      >
        MENTORS
      </text>

      {/* Tagline */}
      <text
        x="68"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="8.5"
        fontWeight="600"
        fill="#CDDC39"
        letterSpacing="1.6"
      >
        HUB OF SCIENCE &amp; TECHNOLOGY
      </text>
    </svg>
  );
}
