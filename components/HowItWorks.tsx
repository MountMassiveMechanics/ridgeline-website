const STEPS = [
  {
    number: "01",
    title: "Fleet Assessment",
    description:
      "We inspect every vehicle, document condition, and identify deferred maintenance — at no charge.",
  },
  {
    number: "02",
    title: "Enroll in the Program",
    description:
      "Sign a simple service agreement. One flat monthly rate per vehicle. No hidden fees.",
  },
  {
    number: "03",
    title: "We Come to You",
    description:
      "ASE-certified techs come to your yard or job site. Your drivers stay productive.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-navy uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            How It Works
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Simple, Systematic, Predictable
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "15px" }}>
            Three steps from your first call to a fleet that never surprises you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-secondary rounded-lg p-[18px]"
              style={{ border: "0.5px solid #D8E3F0" }}
            >
              <div
                className="font-condensed text-gold mb-4 leading-none"
                style={{ fontSize: "32px", opacity: 0.8 }}
              >
                {number}
              </div>
              <h3 className="font-condensed text-navy text-xl mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
