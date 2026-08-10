interface Props {
  className?: string;
}

export default function PortraitPlaceholder({ className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-surface border border-line ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(180deg,transparent_0%,rgba(224,0,0,0.25)_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,var(--color-paper)_0,var(--color-paper)_1px,transparent_1px,transparent_10px)]" />
      <svg
        viewBox="0 0 200 260"
        className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 text-paper/10"
        fill="currentColor"
      >
        <circle cx="100" cy="78" r="52" />
        <path d="M20 260c0-58 36-104 80-104s80 46 80 104z" />
      </svg>
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-paper/40">
        Foto profesional pendiente
      </span>
    </div>
  );
}
