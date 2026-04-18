const DIFFERENTIATORS = [
  {
    number: "01",
    title: "We Come to Your Yard",
    description:
      "No drop-offs. No rental vehicles. No lost time. Our mobile technicians service your fleet at your lot or job site — on your schedule.",
  },
  {
    number: "02",
    title: "Predictable Monthly Cost",
    description:
      "$200 per vehicle, flat. You know exactly what maintenance costs before the month starts. Budget it like a utility, not a surprise.",
  },
  {
    number: "03",
    title: "ASE-Certified Technicians",
    description:
      "Every tech is ASE-certified or works under direct supervision of a certified tech. Light commercial vehicles under 14,000 lbs GVW are our specialty.",
  },
  {
    number: "04",
    title: "No Shop Downtime",
    description:
      "Your drivers stay on their routes while we work. A single maintenance visit at your yard takes less than an hour per vehicle.",
  },
];

export default function WhyRidgeline() {
  return (
    <section id="why-ridgeline" className="bg-navy px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p
            className="text-gold uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            Why Ridgeline
          </p>
          <h2 className="font-condensed text-white text-3xl md:text-4xl mb-4">
            Built Around How Your Business Actually Works
          </h2>
          <p className="text-light-text max-w-xl mx-auto" style={{ fontSize: "15px" }}>
            Traditional shops expect you to work around them. We built the opposite model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map(({ number, title, description }, i) => (
            <div
              key={number}
              className={`reveal reveal-d${i + 1} rounded-xl p-7`}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="font-condensed text-gold mb-4 leading-none"
                style={{ fontSize: "28px", opacity: 0.7 }}
              >
                {number}
              </div>
              <h3 className="font-condensed text-white text-xl mb-2">{title}</h3>
              <p className="text-light-text text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
