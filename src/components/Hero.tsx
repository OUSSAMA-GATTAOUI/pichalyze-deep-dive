const DOWNLOAD_LINK = "https://github.com/OUSSAMA-GATTAOUI/pichalyze-releases/releases/latest/download/Pichalyze_v1.0.zip";

const tableRows = [
  { id: "#8842", time: "2023-10-24 14:02:11", ip: "192.168.1.45", size: "1,420 KB", status: "ACTIVE", color: "primary", latency: "12ms" },
  { id: "#8843", time: "2023-10-24 14:02:15", ip: "10.0.0.122", size: "844 KB", status: "PENDING", color: "warning", latency: "45ms" },
  { id: "#8844", time: "2023-10-24 14:02:18", ip: "172.16.0.1", size: "2,105 KB", status: "ACTIVE", color: "primary", latency: "08ms" },
  { id: "#8845", time: "2023-10-24 14:02:22", ip: "192.168.1.12", size: "112 KB", status: "REVIEW", color: "destructive", latency: "112ms" },
];

const statusColors: Record<string, string> = {
  primary: "border-primary text-primary",
  warning: "border-warning text-warning",
  destructive: "border-destructive text-destructive",
};

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center pt-[150px] pb-[100px] px-[5%] relative">
    <div className="grid-bg" />
    <div className="reveal bg-accent-muted border border-primary px-4 py-1.5 rounded-sm mb-8 flex items-center gap-2.5">
      <div className="led-dot" />
      <span className="font-mono-display">System Status: Operational</span>
    </div>
    <h1 className="reveal font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-6">
      Turn raw data into
      <br />
      <span className="text-primary">clean insights</span>
    </h1>
    <p className="reveal max-w-[600px] text-muted-foreground mb-10 text-lg">
      Professional-grade data analysis for Windows. Your files stay on your machine — lightning fast, no Python scripts required.
    </p>
    <div className="reveal flex gap-4 mb-16 flex-wrap justify-center">
      <a href={DOWNLOAD_LINK} className="font-mono text-xs px-6 py-3 bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all">
        DOWNLOAD FOR WINDOWS
      </a>
      <a href="#features" className="font-mono text-xs px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
        EXPLORE FEATURES
      </a>
    </div>
    <div className="reveal w-full max-w-[1000px] bg-surface border border-border rounded-md overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.5)]" style={{ transitionDelay: "0.2s" }}>
      {[
        "top-[-10px] left-[-10px] border-r-0 border-b-0",
        "top-[-10px] right-[-10px] border-l-0 border-b-0",
        "bottom-[-10px] left-[-10px] border-r-0 border-t-0",
        "bottom-[-10px] right-[-10px] border-l-0 border-t-0",
      ].map((pos, i) => (
        <div key={i} className={`absolute w-[30px] h-[30px] border-2 border-primary z-10 pointer-events-none ${pos}`} />
      ))}
      <div className="bg-surface-elevated px-5 py-2.5 flex justify-between items-center border-b border-border">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-muted" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted" />
        </div>
        <span className="font-mono-display text-[0.6rem]">pichalyze_v1.0 — session_active</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-mono text-xs text-left">
          <thead>
            <tr>
              {["ID", "TIMESTAMP", "SOURCE_IP", "PAYLOAD_SIZE", "STATUS", "LATENCY"].map((h) => (
                <th key={h} className="bg-surface-elevated text-muted-foreground px-5 py-3 border-b border-border">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((r) => (
              <tr key={r.id}>
                <td className="px-5 py-3 border-b border-border text-primary">{r.id}</td>
                <td className="px-5 py-3 border-b border-border text-primary">{r.time}</td>
                <td className="px-5 py-3 border-b border-border text-primary">{r.ip}</td>
                <td className="px-5 py-3 border-b border-border text-primary">{r.size}</td>
                <td className="px-5 py-3 border-b border-border">
                  <span className={`px-1.5 py-0.5 border text-[0.6rem] ${statusColors[r.color]}`}>{r.status}</span>
                </td>
                <td className="px-5 py-3 border-b border-border text-primary">{r.latency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Hero;
