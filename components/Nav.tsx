const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + Wordmark */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Ridgeline Fleet Services"
            style={{ width: "52px", height: "52px", background: "transparent", borderRadius: "50%" }}
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-condensed text-navy leading-none"
              style={{ fontSize: "20px", letterSpacing: "0.04em" }}
            >
              RIDGELINE
            </span>
            <span
              className="text-gold uppercase leading-none"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              Fleet Services
            </span>
          </div>
        </div>

        {/* Center nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-7">
          {["How It Works", "Pricing", "Industries", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-gray-600 hover:text-navy transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={ASSESSMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-navy/90 transition-colors whitespace-nowrap"
        >
          Schedule a Fleet Assessment
        </a>
      </div>
    </nav>
  );
}
