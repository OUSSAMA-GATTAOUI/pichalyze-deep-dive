const DOWNLOAD_LINK = "https://github.com/OUSSAMA-GATTAOUI/pichalyze-releases/releases/latest/download/Pichalyze_v1.0.zip";

const CTABanner = () => (
  <div className="reveal bg-primary text-primary-foreground text-center py-24 px-[5%]">
    <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] mb-4">Ready to master your data?</h2>
    <p className="text-primary-foreground/70 mb-10 text-sm font-mono max-w-[400px] mx-auto">
      Free to download. No account required to get started.
    </p>
    <a href={DOWNLOAD_LINK} className="font-mono text-xs px-6 py-3 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all inline-flex items-center gap-2">
      DOWNLOAD PICHALYZE.EXE
    </a>
  </div>
);

export default CTABanner;
