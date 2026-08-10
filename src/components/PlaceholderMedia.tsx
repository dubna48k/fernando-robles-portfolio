interface Props {
  label: string;
  className?: string;
}

export default function PlaceholderMedia({ label, className = "" }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line bg-[linear-gradient(135deg,rgba(224,0,0,0.14),rgba(0,0,0,0.4))] ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(45deg,var(--color-paper)_0,var(--color-paper)_1px,transparent_1px,transparent_14px)]" />
      <span className="relative font-condensed text-sm uppercase tracking-wide text-paper/50 px-4 text-center">
        {label}
      </span>
    </div>
  );
}
