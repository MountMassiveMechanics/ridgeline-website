const SERVICES = [
  {
    icon: "🔧",
    title: "Oil Changes & Fluid Checks",
    description:
      "Engine oil, coolant, brake fluid, power steering, and differential fluids — inspected and changed on schedule.",
  },
  {
    icon: "🔩",
    title: "Filter Replacements",
    description:
      "Air, oil, fuel, and cabin filters replaced per manufacturer intervals to protect engines and keep drivers breathing clean.",
  },
  {
    icon: "🛑",
    title: "Brake Inspections",
    description:
      "Pad thickness, rotor condition, and caliper function checked every visit. We catch wear before it becomes a liability.",
  },
  {
    icon: "🔄",
    title: "Tire Rotations & Pressure",
    description:
      "Extend tire life and maintain fuel economy. Rotation, pressure checks, and visual inspection each service cycle.",
  },
  {
    icon: "📋",
    title: "Digital Maintenance Records",
    description:
      "Every vehicle gets its own service log. Know exactly what was done, when, and what's coming up next.",
  },
  {
    icon: "🚨",
    title: "Priority Breakdown Response",
    description:
      "Program members get priority scheduling when something unexpected happens. Your fleet can't wait — neither do we.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p
            className="text-gold uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            What&rsquo;s Included
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Everything Your Fleet Needs. Nothing It Doesn&rsquo;t.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: "15px" }}>
            The Fleet Stability Program covers the preventive maintenance that keeps
            commercial vehicles on the road and out of the shop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-d${i + 1} bg-secondary rounded-xl p-6`}
              style={{ border: "0.5px solid #D8E3F0" }}
            >
              <div className="text-2xl mb-3 leading-none">{icon}</div>
              <h3 className="font-condensed text-navy text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
