import { useEffect, useState } from "react";

const DOWNLOAD_LINK = "https://github.com/OUSSAMA-GATTAOUI/pichalyze-releases/releases/latest/download/Pichalyze_v1.0.zip";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[1000] flex justify-between items-center transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4 px-[5%]" : "py-6 px-[5%]"
    }`}>
      <a href="#" className="font-display text-3xl text-primary no-underline">PICHALYZE</a>
      <div className="hidden md:flex gap-8">
        {["features", "how", "pricing", "faq"].map((s) => (
          <a key={s} href={`#${s}`} className="no-underline text-muted-foreground text-sm font-semibold hover:text-primary transition-colors uppercase">
            {s === "how" ? "WORKFLOW" : s}
          </a>
        ))}
      </div>
      <a href={DOWNLOAD_LINK} className="font-mono text-xs px-5 py-3 bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all inline-flex items-center gap-2">
        DOWNLOAD.EXE
      </a>
    </nav>
  );
};

export default Navbar;
