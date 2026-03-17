const steps = [
  { label: "Ingest", desc: "Drag and drop your raw files into the workspace." },
  { label: "Process", desc: "Apply filters and cleaning rules in real-time." },
  { label: "Analyze", desc: "Visualize trends and statistical anomalies." },
  { label: "Deploy", desc: "Export clean data for your production stack." },
];

const Steps = () => (
  <section id="how" className="py-24 px-[5%]">
    <h2 className="reveal font-display text-4xl">The Workflow</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {steps.map((s, i) => (
        <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className="w-[60px] h-[60px] border border-primary flex items-center justify-center font-display text-2xl mb-6 bg-background">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-mono-display mb-2">{s.label}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Steps;
