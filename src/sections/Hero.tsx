import { profile } from "../data/profile";
import PortraitPlaceholder from "../components/PortraitPlaceholder";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line px-6 pt-24 sm:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-line py-4 text-[11px] uppercase tracking-[0.18em] text-paper/60">
        <div className="leading-tight">
          <div className="text-accent">Diseñador Gráfico</div>
          <div>Creativo Digital</div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          Disponible para freelance
          <span className="text-accent">✦</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <h2
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap font-condensed uppercase leading-none tracking-tight text-[22vw] text-accent/90 sm:text-[13rem]"
          style={{
            WebkitTextStroke: "1px rgba(224,0,0,0.9)",
          }}
        >
          Portfolio
        </h2>

        <div className="relative -mt-[16vw] grid gap-8 pb-16 sm:-mt-40 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:gap-10 sm:pb-20">
          <div className="relative z-10">
            <p className="font-display text-xl italic text-paper/80">Hola, soy</p>
            <h1 className="mt-1 font-condensed text-[15vw] uppercase leading-[0.85] tracking-tight sm:text-7xl">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="mt-4 font-condensed text-xl uppercase tracking-tight text-accent sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-4 max-w-sm text-sm text-paper/60 sm:text-base">
              {profile.bio}
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-paper/50">
              <span className="text-accent">●</span> {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wide text-paper transition hover:bg-paper hover:text-ink"
              >
                Ver portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 text-xs font-semibold uppercase tracking-wide transition hover:border-accent hover:text-accent"
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-sm sm:mx-0 sm:ml-auto">
            <PortraitPlaceholder className="aspect-[3/4] w-full" />
            <div className="absolute -left-6 top-6 hidden max-w-[9rem] items-start gap-2 border border-line bg-ink/80 p-3 text-[11px] leading-snug text-paper/70 backdrop-blur sm:flex">
              <span className="text-accent">✦</span>
              {profile.pitch}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
