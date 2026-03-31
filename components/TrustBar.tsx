const TRUST_ITEMS = [
  "ASE-Certified Technicians",
  "Mobile — We Come to You",
  "No Surprise Invoices",
  "Commerce City, CO",
  "Insured & Licensed",
];

export default function TrustBar() {
  return (
    <div
      className="bg-dark-navy overflow-x-auto"
      style={{ padding: "11px 28px" }}
    >
      <div className="flex flex-row items-center justify-center gap-5 min-w-max mx-auto">
        {TRUST_ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className="rounded-full flex-shrink-0"
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "#B8962E",
                display: "inline-block",
              }}
            />
            <span className="text-muted whitespace-nowrap" style={{ fontSize: "12px" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
