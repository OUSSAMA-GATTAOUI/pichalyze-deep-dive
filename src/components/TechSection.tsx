import { useEffect, useRef, useState } from "react";

const checks = [
  "LOCAL-ONLY DATA PROCESSING",
  "AES-256 SESSION ENCRYPTION",
  "ZERO EXTERNAL DEPENDENCIES",
  "HARDWARE ACCELERATED RENDERING",
  "MULTI-THREADED ENGINE",
];

const terminalLines = [
  "> Initializing Pichalyze Engine...",
  "> Loading core modules [OK]",
  "> Mounting local filesystem [OK]",
  "> Checking for Windows updates [NONE]",
  "> System ready for ingestion.",
  "> Waiting for data input...",
  "> User connected: ADMIN",
  "> Session encrypted: AES-256",
  "> Ready.",
];

const TechSection = () => {
  const [lines, setLines] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const interval = setInterval(() => {
            if (i < terminalLines.length) {
              setLines((prev) => [...prev, terminalLines[i]]);
              i++;
            } else clearInterval(interval);
          }, 800);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="font-display text-4xl mb-8">Security & Performance</h2>
          <ul className="list-none space-y-4">
            {checks.map((c) => (
              <li key={c} className="font-mono text-muted-foreground text-sm">
                <span className="text-primary mr-2.5">[OK]</span>{c}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal" ref={ref}>
          <div className="bg-background border border-border p-5 font-mono text-xs h-[300px] overflow-hidden relative">
            {lines.map((l, i) => (
              <p key={i} className="mb-1 text-muted-foreground">{l}</p>
            ))}
            <span className="inline-block w-2 h-4 bg-primary align-middle" style={{ animation: "cursor-blink 1s infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
