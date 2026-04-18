const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

const TESTIMONIALS = [
  {
    quote:
      "We were burning days every month getting trucks to the shop. Ridgeline comes to our yard — our guys don't lose a single hour. Worth every penny.",
    name: "Marcus T.",
    company: "MTM Mechanical · HVAC · 8 vehicles",
  },
  {
    quote:
      "Flat rate, no surprises, no excuses. They show up, do the work, and send me a report. That's exactly what I needed for our plumbing fleet.",
    name: "Sandra R.",
    company: "Apex Plumbing Services · 12 vehicles",
  },
  {
    quote:
      "Our landscaping trucks put on serious miles. Ridgeline keeps them out of the shop and on the job. Breakdowns are basically gone since we enrolled.",
    name: "Jorge V.",
    company: "Greenscape Colorado · Landscaping · 6 vehicles",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p
            className="text-gold uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            What Clients Say
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Trusted by Denver Metro Service Fleets
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto" style={{ fontSize: "14px" }}>
            Testimonials from early program enrollees — first cohort onboarding Q2 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, name, company }, i) => (
            <div
              key={name}
              className={`reveal reveal-d${i + 1} rounded-xl p-6 flex flex-col`}
              style={{ background: "#F0F4FB", border: "0.5px solid #D8E3F0" }}
            >
              <div
                className="font-condensed text-gold mb-3 leading-none"
                style={{ fontSize: "40px", opacity: 0.4 }}
              >
                &ldquo;
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">{quote}</p>
              <div>
                <p className="font-condensed text-navy text-base">{name}</p>
                <p className="text-gray-400" style={{ fontSize: "12px" }}>{company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-gray-400 mb-4" style={{ fontSize: "14px" }}>
            Ready to join them?
          </p>
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white font-medium px-7 py-3 rounded-md hover:bg-navy/90 transition-colors text-sm"
          >
            Schedule a Free Fleet Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
