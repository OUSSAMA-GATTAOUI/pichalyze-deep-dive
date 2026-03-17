const features = [
  { title: "Multi-Format Support", desc: "Seamlessly open and merge CSV, Excel, JSON, and Parquet files without configuration." },
  { title: "Clean Operations", desc: "Apply 30+ built-in cleaning operations: deduplication, null handling, type casting, and more." },
  { title: "Filter & Sort", desc: "High-performance filtering engine capable of handling millions of rows with zero lag." },
  { title: "Visual Analytics", desc: "Generate instant charts and distributions to understand your data patterns visually." },
  { title: "Advanced Export", desc: "Export your processed datasets back to optimized Parquet or standard Excel formats." },
  { title: "100% Offline", desc: "Your data never leaves your machine. No cloud, no tracking, total privacy by design." },
  { title: "No-Code Logic", desc: "Build complex data transformations using a visual interface. No coding required." },
  { title: "Windows Native", desc: "Optimized for Windows 10 and 11 with low memory footprint and high execution speed." },
];

const Features = () => (
  <section id="features" className="py-24 px-[5%]">
    <h2 className="reveal font-display text-4xl">Core Capabilities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {features.map((f, i) => (
        <div
          key={i}
          className="feature-card reveal bg-card border border-border p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent-muted"
        >
          <span className="font-mono text-primary mb-4 block text-sm">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-3xl mb-4">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
