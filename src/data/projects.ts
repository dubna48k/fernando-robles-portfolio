// ─────────────────────────────────────────────────────────────
// Sistema de proyectos del portfolio.
// Para agregar un proyecto nuevo, copia un objeto y edítalo.
// Si no tienes imagen todavía, deja `image: null` y se mostrará
// un placeholder elegante con el nombre de la categoría.
// NO se inventan clientes ni resultados: si no existe evidencia,
// deja el campo vacío o usa "[COMPLETAR]".
// ─────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Branding"
  | "Social Media"
  | "Diseño gráfico"
  | "Video"
  | "Web"
  | "Campañas";

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
  image: string | null; // ruta en /public o null para placeholder
}

export const projects: Project[] = [
  {
    id: "litoempaque-piezas",
    name: "Piezas gráficas — Litoempaque América",
    category: "Diseño gráfico",
    client: "Litoempaque América",
    year: "[COMPLETAR]",
    description: "Diseño de piezas gráficas para producción e impresión.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño y ajuste de piezas gráficas para impresión, siguiendo estándares técnicos de producción.",
    result: null,
    image: null,
  },
  {
    id: "postobon-tat",
    name: "Desarrollo de marca en punto de venta",
    category: "Branding",
    client: "Postobón (vía IPAL)",
    year: "[COMPLETAR]",
    description: "Desarrollo de marca y negociación directa en punto de venta.",
    problem: "Detalle pendiente de agregar.",
    what: "Gestión de presencia de marca en terreno y negociación con clientes.",
    result: null,
    image: null,
  },
  {
    id: "neten-institucional",
    name: "Video institucional",
    category: "Video",
    client: "NETEN",
    year: "[COMPLETAR]",
    description: "Producción y edición de pieza audiovisual institucional.",
    problem: "Detalle pendiente de agregar.",
    what: "Edición y montaje del video institucional.",
    result: null,
    image: null,
  },
  {
    id: "freelance-web",
    name: "Sitio web freelance",
    category: "Web",
    client: "[COMPLETAR]",
    year: "[COMPLETAR]",
    description: "Diseño y desarrollo de sitio web para cliente independiente.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de interfaz y desarrollo del sitio.",
    result: null,
    image: null,
  },
];

export const categories: ProjectCategory[] = [
  "Branding",
  "Social Media",
  "Diseño gráfico",
  "Video",
  "Web",
  "Campañas",
];
