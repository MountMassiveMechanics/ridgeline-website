
const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

export default function Hero() {
  return (
    <section className="bg-navy px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Main flex row: logo left, content right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="Ridgeline Fleet Services"
              style={{ width: "120px", height: "120px", background: "transparent", borderRadius: "50%" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Eyebrow */}
            <p
              className="text-gold uppercase font-medium mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.12em" }}
            >
              Denver Metro&nbsp;·&nbsp;40-Mile Radius&nbsp;·&nbsp;Mobile Fleet
              Maintenance
            </p>

            {/* H1 */}
            <h1
              className="font-condensed text-white leading-tight mb-4"
              style={{ fontSize: "42px" }}
            >
              Your Fleet Stays Running.{" "}
              <span className="text-gold">We Handle the Rest.</span>
            </h1>

            {/* Subhead */}
            <p
              className="text-light-text mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              style={{ fontSize: "14px" }}
            >
              Flat-rate monthly maintenance for commercial service fleets. HVAC,
              plumbing, electrical, and contractor vehicles — kept on the road by
              ASE-certified mobile technicians.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white font-medium px-6 py-3 rounded-md hover:bg-gold/90 transition-colors text-sm"
              >
                Schedule a Fleet Assessment
              </a>
              <a
                href="#how-it-works"
                className="border text-sm font-medium px-6 py-3 rounded-md transition-colors"
                style={{
                  borderColor: "#3A5280",
                  color: "#9AAFCF",
                  background: "transparent",
                }}
              >
                How It Works
              </a>
            </div>

            {/* Stats row */}
            <div
              className="mt-8 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {[
                { number: "$200", label: "per vehicle / month" },
                { number: "5–20", label: "vehicle fleets" },
                { number: "40 mi", label: "service radius" },
                { number: "ASE", label: "certified techs" },
              ].map(({ number, label }) => (
                <div key={label} className="text-center md:text-left">
                  <div
                    className="font-condensed text-white leading-none mb-1"
                    style={{ fontSize: "26px" }}
                  >
                    {number}
                  </div>
                  <div
                    className="text-muted uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.05em" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
