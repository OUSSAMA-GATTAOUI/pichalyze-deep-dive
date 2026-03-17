const items = ["CSV SUPPORT", "PARQUET EXPORT", "JSON PARSING", "30+ OPERATIONS", "100% OFFLINE", "NO PYTHON NEEDED", "ADVANCED ANALYTICS"];

const Ticker = () => (
  <div className="bg-primary py-4 overflow-hidden whitespace-nowrap flex">
    <div className="flex" style={{ animation: "ticker-scroll 30s linear infinite" }}>
      {[...items, ...items].map((t, i) => (
        <span key={i} className="font-display text-2xl text-primary-foreground mr-16">{t}</span>
      ))}
    </div>
  </div>
);

export default Ticker;
