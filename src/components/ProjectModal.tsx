import type { Project } from "../data/projects";
import PlaceholderMedia from "./PlaceholderMedia";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/95 backdrop-blur-sm px-4 py-10 sm:py-16"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="mb-6 flex items-center gap-2 text-sm text-paper/60 hover:text-accent transition"
        >
          ← Cerrar
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderMedia label={`${project.category} — imagen pendiente`} className="h-full w-full" />
          )}
        </div>

        <div className="mt-8 border-b border-paper/15 pb-6">
          <p className="text-xs uppercase tracking-[0.14em] text-accent">
            {project.category}
            {project.client !== "[COMPLETAR]" ? ` · ${project.client}` : ""}
            {project.year !== "[COMPLETAR]" ? ` · ${project.year}` : ""}
          </p>
          <h2 className="mt-2 font-condensed text-3xl uppercase tracking-tight sm:text-4xl">{project.name}</h2>
          <p className="mt-3 max-w-xl text-paper/70">{project.description}</p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3 pb-16">
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] text-paper/50">Problema / objetivo</h4>
            <p className="mt-2 text-sm text-paper/80">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] text-paper/50">Qué hice</h4>
            <p className="mt-2 text-sm text-paper/80">{project.what}</p>
          </div>
          {project.result && (
            <div>
              <h4 className="text-xs uppercase tracking-[0.14em] text-paper/50">Resultado</h4>
              <p className="mt-2 text-sm text-paper/80">{project.result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
