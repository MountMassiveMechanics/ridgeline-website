const CITIES = [
  "Commerce City",
  "Denver",
  "Aurora",
  "Lakewood",
  "Thornton",
  "Westminster",
  "Littleton",
  "Centennial",
  "Englewood",
  "Arvada",
  "Wheat Ridge",
  "Golden",
  "Highlands Ranch",
  "Parker",
  "Brighton",
  "Broomfield",
  "Northglenn",
  "Federal Heights",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div className="lg:w-5/12 reveal">
            <p
              className="text-gold uppercase font-medium mb-3"
              style={{ fontSize: "11px", letterSpacing: "0.12em" }}
            >
              Service Area
            </p>
            <h2 className="font-condensed text-navy text-3xl md:text-4xl mb-5">
              Denver Metro, 40-Mile Radius
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed" style={{ fontSize: "15px" }}>
              We&rsquo;re based in Commerce City and service commercial fleets throughout
              the Denver metro area. If your vehicles operate within 40 miles of Denver,
              we come to you.
            </p>
            <div
              className="rounded-xl p-5"
              style={{ background: "#1B2F5E10", border: "0.5px solid #D8E3F0" }}
            >
              <p className="font-condensed text-navy text-lg mb-1">
                Ridgeline Fleet Services
              </p>
              <p className="text-gray-500 text-sm">Commerce City, CO 80640</p>
              <p className="text-gray-500 text-sm">Denver Metro — 40-Mile Service Radius</p>
            </div>
          </div>

          {/* Right: city grid */}
          <div className="lg:w-7/12">
            <p
              className="reveal text-gray-400 uppercase mb-4"
              style={{ fontSize: "10px", letterSpacing: "0.14em" }}
            >
              Areas Served
            </p>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city, i) => (
                <span
                  key={city}
                  className={`reveal reveal-d${Math.min(i + 1, 6)} bg-white rounded-full font-medium text-navy`}
                  style={{
                    border: "0.5px solid #D8E3F0",
                    padding: "6px 14px",
                    fontSize: "13px",
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
