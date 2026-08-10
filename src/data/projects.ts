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
  link?: string; // si existe, la tarjeta abre este enlace externo en vez del modal
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

  // Branding / diseño de marca
  {
    id: "logo-cocina-oculta",
    name: "Cocina Oculta — Donde Mafe",
    category: "Branding",
    client: "Cocina Oculta — Donde Mafe",
    year: "[COMPLETAR]",
    description: "Diseño de logo e identidad visual para marca de cocina.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-cocina-oculta.png",
  },
  {
    id: "logo-la-tia-elvia",
    name: "La Tía Elvia",
    category: "Branding",
    client: "La Tía Elvia",
    year: "[COMPLETAR]",
    description: "Diseño de logo para marca con identidad familiar y cercana.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-la-tia-elvia.png",
  },
  {
    id: "logo-tyson-billar",
    name: "Tyson Billar Club",
    category: "Branding",
    client: "Tyson Billar Club",
    year: "[COMPLETAR]",
    description: "Diseño de logo deportivo con identidad fuerte y directa.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-tyson-billar.png",
  },
  {
    id: "logo-wendy-eventos",
    name: "Wendy Eventos",
    category: "Branding",
    client: "Wendy Eventos",
    year: "[COMPLETAR]",
    description: "Diseño de logotipo tipográfico para marca de eventos.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-wendy-eventos.png",
  },
  {
    id: "logo-la-cuadra",
    name: "Club Deportivo La Cuadra",
    category: "Branding",
    client: "Club Deportivo La Cuadra",
    year: "[COMPLETAR]",
    description: "Diseño de escudo para club deportivo barrial.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-la-cuadra.png",
  },
  {
    id: "logo-pundi-barber",
    name: "Pundi Barber Shop",
    category: "Branding",
    client: "Pundi Barber Shop",
    year: "[COMPLETAR]",
    description: "Diseño de logo para barbería con estética urbana clásica.",
    problem: "Detalle pendiente de agregar.",
    what: "Diseño de logo.",
    result: null,
    image: "/projects/logo-pundi-barber.png",
  },

  // Video
  {
    id: "neten-video-1",
    name: "Nuevos Niveles de Conocimiento NETEN",
    category: "Video",
    client: "NETEN",
    year: "[COMPLETAR]",
    description: "Video institucional para NETEN.",
    problem: "",
    what: "",
    result: null,
    image: "https://i.ytimg.com/vi/9dd2nIh9P-k/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=9dd2nIh9P-k",
  },
  {
    id: "neten-video-2",
    name: "5 Razones para estudiar con NETEN",
    category: "Video",
    client: "NETEN",
    year: "[COMPLETAR]",
    description: "Video institucional para NETEN.",
    problem: "",
    what: "",
    result: null,
    image: "https://i.ytimg.com/vi/OQ7ninj2u-8/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=OQ7ninj2u-8",
  },
  {
    id: "neten-video-3",
    name: "Estudia de forma virtual con NETEN y prepárate para el futuro",
    category: "Video",
    client: "NETEN",
    year: "[COMPLETAR]",
    description: "Video institucional para NETEN.",
    problem: "",
    what: "",
    result: null,
    image: "https://i.ytimg.com/vi/yOp6l6HgQFk/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=yOp6l6HgQFk",
  },
  {
    id: "daath-visual-concurso",
    name: "Concurso — Daath Visual",
    category: "Video",
    client: "Daath Visual",
    year: "[COMPLETAR]",
    description: "Pieza de video publicada en el canal Daath Visual.",
    problem: "",
    what: "",
    result: null,
    image: "https://i.ytimg.com/vi/MRE-CrojOYE/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=MRE-CrojOYE",
  },

  // Social Media
  {
    id: "mas-armonia-academia",
    name: "Más Armonía Academia",
    category: "Social Media",
    client: "Más Armonía Academia",
    year: "[COMPLETAR]",
    description: "Contenido y diseño para el Instagram de la marca.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://www.instagram.com/masarmoniaacademia/",
  },
  {
    id: "mas-armonia-estetica",
    name: "Más Armonía Estética",
    category: "Social Media",
    client: "Más Armonía Estética",
    year: "[COMPLETAR]",
    description: "Contenido y diseño para el Instagram de la marca.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://www.instagram.com/masarmoniaestetica/",
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
