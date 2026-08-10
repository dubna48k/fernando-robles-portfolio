import { Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
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
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-wide text-paper transition hover:bg-paper hover:text-ink hover:shadow-[0_0_28px_rgba(224,0,0,0.5)]"
          >
            Hablemos →
          </a>

          <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-paper/40">
            <span className="text-accent">●</span> Disponible para freelance
          </p>
        </Reveal>

        <Reveal delay={0.1} className="glass divide-y divide-line">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-paper/70 transition hover:text-accent"
          >
            <span className="flex items-center gap-2 text-paper/40">
              <Mail size={15} strokeWidth={1.75} /> Email
            </span>
            {profile.email}
          </a>
          <a
            href={profile.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-paper/70 transition hover:text-accent"
          >
            <span className="flex items-center gap-2 text-paper/40">
              <MessageCircle size={15} strokeWidth={1.75} /> WhatsApp
            </span>
            {profile.whatsappDisplay}
          </a>
          <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-paper/70">
            <span className="flex items-center gap-2 text-paper/40">
              <MapPin size={15} strokeWidth={1.75} /> Ubicación
            </span>
            {profile.location}
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-line pt-8 text-xs text-paper/30">
        © {new Date().getFullYear()} {profile.name}. {profile.location}.
      </footer>
    </section>
  );
}
