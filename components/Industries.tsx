const INDUSTRIES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Moving & Delivery",
  "General Contractors",
  "Municipalities",
  "Property Management",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 reveal">
          <p
            className="text-navy uppercase font-medium mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            Industries Served
          </p>
          <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-4">
            Built for Service Contractors
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "15px" }}>
            If your team drives to job sites, we keep them moving.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 reveal">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="bg-white rounded-full font-medium text-navy"
              style={{
                border: "0.5px solid #D8E3F0",
                padding: "7px 16px",
                fontSize: "13px",
              }}
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
