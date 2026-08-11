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

      {/* Contenido: iframe real de fondo; algunos sitios bloquean el embebido (CSP) y quedan en blanco, por eso la etiqueta va SIEMPRE encima */}
      <div className="relative flex-1 overflow-hidden bg-[linear-gradient(135deg,rgba(224,0,0,0.1),rgba(0,0,0,0.5))]">
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
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded-full bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-wide text-paper/80 backdrop-blur-md">
          Ver sitio en vivo ↗
        </div>
      </div>
    </div>
  );
}
