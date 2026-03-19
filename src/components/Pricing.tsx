const GUMROAD_MONTHLY_LINK = "https://pichalyze.gumroad.com/l/yxvos";
const GUMROAD_YEARLY_LINK  = "https://pichalyze.gumroad.com/l/bdtmm";
const DOWNLOAD_FREE_LINK   = "https://github.com/OUSSAMA-GATTAOUI/pichalyze-releases/releases/latest/download/Pichalyze_v1.0.zip";

const freeFeatures = [
  "CSV, Excel & JSON (up to 8 MB)",
  "Basic filter & sort",
  "10 standard clean operations",
  "1 dataset open at a time",
  "Summary statistics",
];

const proFeatures = [
  "Everything in Free",
  "Unlimited file size",
  "Unlimited datasets simultaneously",
  "All 30+ clean operations",
  "Charts & visualisation engine",
  "Advanced analytics dashboard",
  "Parquet & Excel export",
  "Priority email support",
];

const Pricing = () => (
  <section id="pricing" className="py-24 px-[5%]">
    <h2 className="reveal font-display text-4xl text-center">Pricing Plans</h2>
    <p className="reveal text-center text-muted-foreground mt-4 mb-16 max-w-[500px] mx-auto text-sm">
      Start free forever. Upgrade to Pro when you need more power.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">

      {/* FREE */}
      <div className="reveal bg-card border border-border p-12 text-center flex flex-col">
        <h3 className="font-mono-display text-2xl mb-2">Free</h3>
        <p className="text-muted-foreground text-xs mb-6 font-mono">FOREVER</p>
        <span className="font-mono text-5xl text-primary block mb-8">$0</span>
        <ul className="list-none text-left space-y-3 mb-10 flex-1">
          {freeFeatures.map((f) => (
            <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-0.5">→</span>
              {f}
            </li>
          ))}
        </ul>
        <a href={DOWNLOAD_FREE_LINK} className="font-mono text-xs px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full inline-flex justify-center">
          DOWNLOAD FREE
        </a>
      </div>

      {/* PRO */}
      <div className="reveal bg-card border border-border border-t-4 border-t-primary p-12 text-center flex flex-col relative">
        <h3 className="font-mono-display text-2xl mb-2">Professional</h3>
        <p className="text-muted-foreground text-xs mb-6 font-mono">CANCEL ANYTIME</p>
        <div className="mb-8">
          <span className="font-mono text-5xl text-primary">$10</span>
          <span className="text-muted-foreground text-sm font-mono">/mo</span>
          <p className="text-muted-foreground text-xs mt-1 font-mono">or $99/year — save 17%</p>
        </div>
        <ul className="list-none text-left space-y-3 mb-8 flex-1">
          {proFeatures.map((f) => (
            <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-0.5">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 mb-4">
          <a href={GUMROAD_MONTHLY_LINK} target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-6 py-3 bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all w-full inline-flex justify-center">
            GET PRO MONTHLY — $10/MO
          </a>
          <a href={GUMROAD_YEARLY_LINK} target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full inline-flex justify-center">
            GET PRO YEARLY — $99/YR  (SAVE 17%)
          </a>
        </div>
        <p className="text-muted-foreground text-xs font-mono">
          Visa · Mastercard · PayPal · Apple Pay · Google Pay
        </p>
      </div>

    </div>
  </section>
);

export default Pricing;
