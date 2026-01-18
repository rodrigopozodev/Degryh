export type Service = {
  slug: string;
  title: string;
  tagline: string;
  goal: string;
  idealFor: string;
  example: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "web-basica",
    title: "Web básica",
    tagline: "Presencia clara, rápida y con foco en lo esencial.",
    goal: "Crear una web profesional que comunique tu propuesta de valor en segundos.",
    idealFor: "Proyectos que necesitan credibilidad inmediata sin complejidades.",
    example: {
      title: "Landing para consultora creativa",
      description: "Hero impactante, servicios clave y CTA directo en una sola vista.",
    },
  },
  {
    slug: "web-corporativa",
    title: "Web corporativa",
    tagline: "Estructura sólida para marcas con múltiples públicos.",
    goal: "Organizar tu oferta y generar confianza con una narrativa clara.",
    idealFor: "Empresas que requieren comunicar servicios, equipo y casos de éxito.",
    example: {
      title: "Sitio institucional para firma tecnológica",
      description: "Secciones por verticales y recorrido guiado con tono premium.",
    },
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    tagline: "Experiencias de compra fluidas que convierten.",
    goal: "Optimizar el recorrido de compra con diseño centrado en conversión.",
    idealFor: "Marcas que necesitan vender más con una tienda moderna y confiable.",
    example: {
      title: "Tienda de lifestyle con catálogo dinámico",
      description: "Home inmersiva, categorías claras y checkout simplificado.",
    },
  },
  {
    slug: "desarrollo-a-medida",
    title: "Desarrollo a medida",
    tagline: "Soluciones únicas alineadas a tus procesos.",
    goal: "Crear una plataforma adaptada a tu negocio y a tus objetivos.",
    idealFor: "Equipos que necesitan flujos personalizados y escalables.",
    example: {
      title: "Plataforma interna para operaciones",
      description: "Dashboards claros y módulos flexibles según roles.",
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
