const ASSESSMENT_URL = "https://calendly.com/devinmedina-mountmassivemechanics/30min";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-navy px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p
            className="text-gold uppercase font-medium mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.12em" }}
          >
            Get Started
          </p>
          <h2 className="font-condensed text-white text-3xl md:text-5xl mb-5 leading-tight">
            Ready to Stabilize Your Fleet?
          </h2>
          <p className="text-light-text mb-10 leading-relaxed max-w-xl mx-auto" style={{ fontSize: "16px" }}>
            Schedule a free fleet assessment. We&rsquo;ll inspect every vehicle,
            document its condition, and give you a no-pressure quote — at no charge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white font-medium px-8 py-4 rounded-md hover:bg-gold/90 transition-colors text-sm"
            >
              Schedule a Free Fleet Assessment
            </a>
            <a
              href="mailto:devin@ridgelinefleetservices.com"
              className="font-medium px-8 py-4 rounded-md transition-colors text-sm"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#9AAFCF",
              }}
            >
              Send Us an Email
            </a>
          </div>

          {/* Contact details */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "32px" }}
          >
            <a
              href="mailto:devin@ridgelinefleetservices.com"
              className="text-muted hover:text-light-text transition-colors"
              style={{ fontSize: "13px" }}
            >
              devin@ridgelinefleetservices.com
            </a>
            <span className="hidden sm:block text-navy-mid">·</span>
            <span className="text-muted" style={{ fontSize: "13px" }}>
              Commerce City, CO · Denver Metro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
