export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-dark-navy"
      style={{ padding: "24px 28px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo + Brand name */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/logo.png"
            alt="Ridgeline Fleet Services"
            style={{ width: "44px", height: "44px", background: "transparent", borderRadius: "50%" }}
          />
          <span
            className="font-condensed text-white"
            style={{ fontSize: "18px", letterSpacing: "0.04em" }}
          >
            RIDGELINE FLEET SERVICES
          </span>
        </div>

        {/* Legal lines */}
        <div className="space-y-1.5">
          <p style={{ fontSize: "11px", color: "#4A6080" }}>
            Mount Massive Mechanics LLC DBA Ridgeline Fleet Services · Commerce
            City, CO · Denver Metro
          </p>
          <p style={{ fontSize: "11px", color: "#4A6080" }}>
            ridgelinefleetservices.com · devin@ridgelinefleetservices.com · Denver
            Metro — 40-Mile Service Radius
          </p>
          <p style={{ fontSize: "11px", color: "#4A6080" }}>
            © 2026 Mount Massive Mechanics LLC. All rights reserved. · Licensed
            &amp; Insured in Colorado
          </p>
        </div>
      </div>
    </footer>
  );
}
