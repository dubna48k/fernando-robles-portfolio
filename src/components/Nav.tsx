import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#work", label: "Trabajo" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-condensed text-lg uppercase tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.12em] text-paper/60 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-line px-4 py-2 text-xs uppercase tracking-wide hover:border-accent hover:text-accent transition sm:inline-block"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
