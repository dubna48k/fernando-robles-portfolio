interface Props {
  url: string;
  className?: string;
}

export default function LiveSitePreview({ url, className = "" }: Props) {
  const domain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
      <div className="absolute inset-0 origin-top-left" style={{ width: "300%", height: "300%", transform: "scale(0.3333)" }}>
        <iframe
          src={url}
          title={domain}
          loading="lazy"
          tabIndex={-1}
          className="h-full w-full pointer-events-none"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(5,5,5,0.85)_100%)]" />
      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-paper/80">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(224,0,0,0.9)]" />
        {domain}
      </div>
    </div>
  );
}
