interface Props {
  url: string;
  className?: string;
}

export default function LiveSitePreview({ url, className = "" }: Props) {
  const domain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={`relative flex flex-col overflow-hidden border border-line bg-surface ${className}`}>
      {/* Barra de navegador */}
      <div className="flex shrink-0 items-center gap-2 border-b border-line bg-ink px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="ml-2 truncate rounded-full bg-white/5 px-3 py-0.5 text-[10px] text-paper/50">
          {domain}
        </span>
      </div>

      {/* Contenido: iframe real por encima del mockup */}
      <div className="relative flex-1 overflow-hidden bg-[linear-gradient(135deg,rgba(224,0,0,0.1),rgba(0,0,0,0.5))]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-condensed text-lg uppercase tracking-wide text-paper/40">
            Ver sitio en vivo
          </span>
        </div>
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
      </div>
    </div>
  );
}
