import type { Project } from "../data/projects";
import PlaceholderMedia from "./PlaceholderMedia";

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <button onClick={() => onOpen(project)} className="group text-left w-full">
      <div className="aspect-[4/3] w-full overflow-hidden border border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderMedia
            label={`${project.category} — imagen pendiente`}
            className="h-full w-full transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="mt-4 flex items-start gap-3 border-t border-line pt-4">
        <span className="font-condensed text-2xl text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="font-condensed text-lg uppercase leading-snug text-paper">
            {project.name}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-paper/50">
            {project.category}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-xl text-accent opacity-0 transition group-hover:opacity-100">
          →
        </span>
      </div>
    </button>
  );
}
