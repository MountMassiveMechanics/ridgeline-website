const PLACEHOLDER_CARDS = [
  { label: "Testimonial — First client", timeline: "April 2026" },
  { label: "Testimonial — Second client", timeline: "Q2 2026" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-navy uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            What Clients Say
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Trusted by Denver Metro Fleets
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "15px" }}>
            Testimonials coming April 2026 — first clients onboarding now.
          </p>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLACEHOLDER_CARDS.map(({ label, timeline }) => (
            <div
              key={label}
              className="rounded-lg flex items-center justify-center text-center"
              style={{
                border: "1.5px dashed #CBD5E1",
                padding: "40px 24px",
                minHeight: "140px",
              }}
            >
              <p className="text-muted" style={{ fontSize: "13px" }}>
                {label} · {timeline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
