import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="font-condensed text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Trabajemos
            <br />
            <span className="text-accent">Juntos</span>
          </h2>
          <p className="mt-6 max-w-md text-paper/60">
            Estoy disponible para nuevos proyectos y colaboraciones.
            Escríbeme y hablamos de tu idea.
          </p>

          <a
            href={profile.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-wide text-paper transition hover:bg-paper hover:text-ink"
          >
            Hablemos →
          </a>

          <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-paper/40">
            <span className="text-accent">●</span> Disponible para freelance
          </p>
        </div>

        <div className="space-y-0 border-t border-line">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between border-b border-line py-4 text-sm text-paper/70 transition hover:text-accent"
          >
            <span className="text-paper/40">Email</span>
            {profile.email}
          </a>
          <a
            href={profile.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-line py-4 text-sm text-paper/70 transition hover:text-accent"
          >
            <span className="text-paper/40">WhatsApp</span>
            {profile.whatsappDisplay}
          </a>
          <div className="flex items-center justify-between border-b border-line py-4 text-sm text-paper/70">
            <span className="text-paper/40">Ubicación</span>
            {profile.location}
          </div>
          <div className="flex items-center justify-between border-b border-line py-4 text-sm text-paper/70">
            <span className="text-paper/40">Portfolio</span>
            {profile.portfolioUrl}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-line pt-8 text-xs text-paper/30">
        © {new Date().getFullYear()} {profile.name}. {profile.location}.
      </footer>
    </section>
  );
}
