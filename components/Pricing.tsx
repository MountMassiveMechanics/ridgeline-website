const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

const FEATURES = [
  "Oil changes & fluid checks",
  "Filter replacements & inspections",
  "Brake system monitoring",
  "Tire rotation & pressure management",
  "Digital maintenance records per vehicle",
  "Priority response for breakdowns",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p
            className="text-navy uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            Pricing
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Flat Rate. No Surprises.
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "15px" }}>
            One number in your budget every month.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="reveal bg-navy rounded-xl w-full"
            style={{ maxWidth: "380px", padding: "28px" }}
          >
            <p
              className="text-gold uppercase font-medium mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.12em" }}
            >
              Fleet Stability Program
            </p>

            <div className="flex items-end gap-2 mb-1">
              <span
                className="font-condensed text-white leading-none"
                style={{ fontSize: "48px" }}
              >
                $200
              </span>
            </div>
            <p className="text-muted mb-6" style={{ fontSize: "13px" }}>
              per vehicle / per month
            </p>

            <ul className="space-y-0 mb-6">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-gold flex-shrink-0 text-base leading-none">✓</span>
                  <span className="text-light-text" style={{ fontSize: "14px" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-muted mb-5 leading-relaxed" style={{ fontSize: "12px" }}>
              Scheduled maintenance is covered under your monthly rate. Inspections may identify
              additional repairs — these are quoted separately and only performed with your
              approval. No surprise charges, ever.
            </p>

            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold text-white font-medium py-3 rounded-md hover:bg-gold/90 transition-colors text-sm"
            >
              Schedule a Fleet Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
