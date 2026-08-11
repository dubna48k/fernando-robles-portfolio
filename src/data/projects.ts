// ─────────────────────────────────────────────────────────────
// Los proyectos ya no viven aquí como datos estáticos: se administran
// desde /admin (API en el VPS) y se cargan en runtime con useProjects().
// Este archivo solo define los tipos y las categorías del filtro.
// ─────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Branding"
  | "Social Media"
  | "Video"
  | "Web";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  client: string; // "[COMPLETAR]" si no aplica o no se puede revelar
  year: string; // "[COMPLETAR]"
  description: string; // descripción corta, 1-2 líneas
  problem: string; // problema / objetivo
  what: string; // qué hice
  result: string | null; // solo si hay resultado verificable, si no: null
  image: string | null; // ruta en /public, /uploads o null para placeholder
  link?: string; // si existe, la tarjeta abre este enlace externo en vez del modal
  liveUrl?: string; // si existe, la tarjeta muestra un preview en vivo del sitio (iframe)
}

export const categories: ProjectCategory[] = [
  "Branding",
  "Social Media",
  "Video",
  "Web",
];
