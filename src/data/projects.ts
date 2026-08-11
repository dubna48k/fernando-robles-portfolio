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
  image: string | null; // ruta en /public o null para placeholder
  link?: string; // si existe, la tarjeta abre este enlace externo en vez del modal
  liveUrl?: string; // si existe, la tarjeta muestra un preview en vivo del sitio (iframe)
}

export const projects: Project[] = [
  // Web — sitios en producción, preview en vivo
  {
    id: "web-printspros",
    name: "Prints Pros",
    category: "Web",
    client: "Prints Pros",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://www.printspros.com/",
    liveUrl: "https://www.printspros.com/",
  },
  {
    id: "web-promotora",
    name: "Promotora Internacional Deportiva",
    category: "Web",
    client: "Promotora Internacional Deportiva",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://promotorainternacionaldeportiva.com/",
    liveUrl: "https://promotorainternacionaldeportiva.com/",
  },
  {
    id: "web-emunah",
    name: "Emunah Salud Mental",
    category: "Web",
    client: "Emunah Salud Mental",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://www.emunahsaludmental.com/",
    liveUrl: "https://www.emunahsaludmental.com/",
  },
  {
    id: "web-shadowscale",
    name: "Shadowscale",
    category: "Web",
    client: "Shadowscale",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://shadowscale.pro/",
    liveUrl: "https://shadowscale.pro/",
  },
  {
    id: "web-daathstudio",
    name: "Daath Studio",
    category: "Web",
    client: "Daath Studio",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://daathstudio.com/",
    liveUrl: "https://daathstudio.com/",
  },
  {
    id: "web-aleboutique",
    name: "Ale Boutique",
    category: "Web",
    client: "Ale Boutique",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://www.aleboutiquecol.com/",
    liveUrl: "https://www.aleboutiquecol.com/",
  },
  {
    id: "web-perdomofotografia",
    name: "Perdomo Fotografía",
    category: "Web",
    client: "Perdomo Fotografía",
    year: "[COMPLETAR]",
    description: "Sitio web en producción.",
    problem: "",
    what: "",
    result: null,
    image: null,
    link: "https://perdomofotografia.com/",
    liveUrl: "https://perdomofotografia.com/",
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
    image: "/projects/logo-cocina-oculta.jpg",
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
    image: "/projects/logo-la-tia-elvia.jpg",
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
    image: "/projects/logo-tyson-billar.jpg",
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
    image: "/projects/logo-wendy-eventos.jpg",
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
    image: "/projects/logo-la-cuadra.jpg",
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
    image: "/projects/logo-pundi-barber.jpg",
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
  "Video",
  "Web",
];
