import { useMemo, useState } from "react";
import { categories, projects, type Project, type ProjectCategory } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function SelectedWork() {
  const [active, setActive] = useState<ProjectCategory | "Todos">("Todos");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="border-b border-line px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-6 sm:flex-row sm:items-end">
          <h2 className="font-condensed text-4xl uppercase tracking-tight sm:text-5xl">
            Selected <span className="text-accent">Projects</span>
          </h2>
          <p className="max-w-xs text-sm text-paper/50">
            Portafolio en construcción — algunas piezas están marcadas como
            pendientes de reemplazar por evidencia real.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(["Todos", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`border px-4 py-1.5 text-[11px] uppercase tracking-wide transition ${
                active === cat
                  ? "border-accent bg-accent text-paper"
                  : "border-line text-paper/50 hover:border-paper/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
