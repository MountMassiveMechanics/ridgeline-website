const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Why Ridgeline", href: "#why-ridgeline" },
  { label: "Pricing", href: "#pricing" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-navy px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="md:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Ridgeline Fleet Services"
                style={{ width: "44px", height: "44px", background: "transparent", borderRadius: "50%" }}
              />
              <div className="flex flex-col leading-none gap-0.5">
                <span
                  className="font-condensed text-white leading-none"
                  style={{ fontSize: "17px", letterSpacing: "0.04em" }}
                >
                  RIDGELINE
                </span>
                <span
                  className="text-gold uppercase leading-none"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  Fleet Services
                </span>
              </div>
            </div>
            <p className="text-muted leading-relaxed" style={{ fontSize: "13px" }}>
              Flat-rate mobile fleet maintenance for commercial service fleets in the
              Denver Metro area.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-white uppercase font-medium mb-4"
              style={{ fontSize: "10px", letterSpacing: "0.12em" }}
            >
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted hover:text-light-text transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white uppercase font-medium mb-4"
              style={{ fontSize: "10px", letterSpacing: "0.12em" }}
            >
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:devin@ridgelinefleetservices.com"
                className="block text-muted hover:text-light-text transition-colors"
                style={{ fontSize: "13px" }}
              >
                devin@ridgelinefleetservices.com
              </a>
              <p className="text-muted" style={{ fontSize: "13px" }}>
                Commerce City, CO 80640
              </p>
              <p className="text-muted" style={{ fontSize: "13px" }}>
                Denver Metro — 40-Mile Radius
              </p>
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-white font-medium px-4 py-2 rounded-md hover:bg-gold/90 transition-colors mt-1"
                style={{ fontSize: "12px" }}
              >
                Schedule Assessment
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}
        >
          <p style={{ fontSize: "11px", color: "#4A6080" }}>
            © 2026 Mount Massive Mechanics LLC · DBA Ridgeline Fleet Services · Licensed &amp; Insured in Colorado
          </p>
          <p style={{ fontSize: "11px", color: "#4A6080" }}>
            ridgelinefleetservices.com
          </p>
        </div>
      </div>
    </footer>
  );
}
