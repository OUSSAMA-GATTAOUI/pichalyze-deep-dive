import { useState } from "react";

const faqs = [
  { q: "Is my data uploaded to any server?", a: "No. Pichalyze is a 100% offline desktop application. All data processing happens locally on your machine. We have no servers that store or receive your data." },
  { q: "What are the system requirements?", a: "Pichalyze requires Windows 10 or 11 (64-bit), 4GB of RAM (8GB recommended for large datasets), and approximately 200MB of disk space." },
  { q: "Do I need to know Python or SQL?", a: "Not at all. Pichalyze is designed as a no-code tool. You can perform complex joins, filters, and transformations using our intuitive visual interface." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-[5%]">
      <h2 className="reveal font-display text-4xl text-center">Frequently Asked</h2>
      <div className="max-w-[800px] mx-auto mt-16">
        {faqs.map((f, i) => (
          <div key={i} className="reveal border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-6 bg-transparent border-none text-foreground text-left flex justify-between items-center font-body font-semibold text-lg cursor-pointer"
            >
              {f.q}
              <span
                className="text-2xl text-primary transition-transform duration-300"
                style={{ transform: open === i ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden text-muted-foreground text-sm transition-all duration-300"
              style={{ maxHeight: open === i ? "200px" : "0", paddingBottom: open === i ? "1.5rem" : "0" }}
            >
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
