const Pricing = () => (
  <section id="pricing" className="py-24 px-[5%]">
    <h2 className="reveal font-display text-4xl text-center">Pricing Plans</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto mt-16">
      <div className="reveal bg-card border border-border p-12 text-center">
        <h3 className="font-mono-display text-2xl mb-4">Basic</h3>
        <span className="font-mono text-5xl text-primary block mb-8">$0</span>
        <ul className="list-none text-left space-y-3 mb-10">
          {["Open CSV & JSON files", "Basic filtering & sorting", "Standard Excel export", "Community support"].map((f) => (
            <li key={f} className="text-muted-foreground text-sm">{f}</li>
          ))}
        </ul>
        <a href="#" className="font-mono text-xs px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full inline-flex justify-center">
          DOWNLOAD FREE
        </a>
      </div>

      <div className="reveal bg-card border border-border border-t-4 border-t-primary p-12 text-center">
        <h3 className="font-mono-display text-2xl mb-4">Professional</h3>
        <span className="font-mono text-5xl text-primary block mb-8">
          $10<span className="text-base">/mo</span>
        </span>
        <ul className="list-none text-left space-y-3 mb-10">
          {["All Basic features", "Parquet & Large file support", "30+ Advanced operations", "Visual charting engine", "Priority email support"].map((f) => (
            <li key={f} className="text-muted-foreground text-sm">{f}</li>
          ))}
        </ul>
        <a
          href="mailto:gattaouioussama@gmail.com?subject=Pichalyze%20Pro%20Inquiry"
          className="font-mono text-xs px-6 py-3 bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all w-full inline-flex justify-center"
        >
          GET PRO ACCESS
        </a>
      </div>
    </div>
  </section>
);

export default Pricing;
