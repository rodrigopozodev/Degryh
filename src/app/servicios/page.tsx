"use client";

import { useEffect, useRef, useState } from "react";
import { FlipCard, type FlipCardData } from "@/components/animate-ui/components/community/flip-card";

const examples: FlipCardData[] = [
  {
    title: "Peluquería",
    subtitle: "Reserva inmediata",
    description: "Imagen moderna, reservas rápidas y estilo premium.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/peluqueria",
  },
  {
    title: "Restaurante",
    subtitle: "Menú y reservas",
    description: "Menú atractivo, reservas en un clic y ambiente visual.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/restaurante",
  },
  {
    title: "Academia",
    subtitle: "Cursos online",
    description: "Oferta clara, calendarios y captación de alumnos.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/academia",
  },
  {
    title: "Clínica",
    subtitle: "Confianza médica",
    description: "Confianza, servicios médicos y contacto directo.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/clinica",
  },
  {
    title: "Gimnasio",
    subtitle: "Planes claros",
    description: "Planes claros, comunidad y conversiones rápidas.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/gimnasio",
  },
  {
    title: "Estudio creativo",
    subtitle: "Portafolio visual",
    description: "Portafolio visual, servicios y contacto inmediato.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    url: "https://example.com/estudio-creativo",
  },
];

const steps = [
  {
    title: "Contacto inicial",
    description: "Entendemos tu objetivo, tiempos y necesidades clave.",
  },
  {
    title: "Estrategia + diseño",
    description: "Definimos arquitectura, tono visual y jerarquía de contenido.",
  },
  {
    title: "Desarrollo",
    description: "Construimos una web rápida, escalable y lista para convertir.",
  },
  {
    title: "Entrega",
    description: "Revisamos, afinamos detalles y publicamos contigo.",
  },
];

export default function ServiciosPage() {
  const [activeSection, setActiveSection] = useState(0);
  const isAnimatingRef = useRef(false);
  const animationDuration = 700;

  const goToSection = (index: number) => {
    if (isAnimatingRef.current) return;
    if (index < 0 || index > 1) return;
    if (index === activeSection) return;
    isAnimatingRef.current = true;
    setActiveSection(index);
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, animationDuration);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    goToSection(activeSection + direction);
  };

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#proceso") {
        goToSection(1);
      } else {
        goToSection(0);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="h-full overflow-hidden px-6">
      <div
        className="mx-auto h-[calc(100svh-80px)] w-full max-w-6xl overflow-hidden px-10"
        onWheel={handleWheel}
      >
        <div
          className="h-full transition-transform ease-out"
          style={{ transform: `translateY(-${activeSection * 100}%)`, transitionDuration: `${animationDuration}ms` }}
        >
          <section className="flex h-[calc(100svh-80px)] flex-col justify-center gap-10 py-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
                Ejemplos que podemos aplicar a tu negocio.
              </h1>
              <p className="text-base text-muted-foreground">
                Selecciona un tipo de negocio y revisa una web de referencia.
              </p>
              <button
                type="button"
                onClick={() => goToSection(1)}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
              >
                Ver nuestro proceso
                <span>↓</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {examples.map((example) => (
                <FlipCard key={example.title} data={example} />
              ))}
            </div>
          </section>

          <section className="flex h-[calc(100svh-80px)] flex-col justify-center gap-6 py-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Un flujo claro, visual y sin fricciones desde el contacto hasta la entrega.
              </h2>
              <p className="text-base text-muted-foreground">
                Trabajamos contigo en cada fase para que el resultado sea coherente con tu negocio.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-border/70 bg-card/80 p-4 shadow-lg md:p-6"
                >
                  <span className="absolute -top-4 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground shadow-md md:h-8 md:w-8 md:text-xs">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground md:text-lg">{step.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground md:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSection(index)}
            aria-label={index === 0 ? "Ir a ejemplos" : "Ir a proceso"}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
              activeSection === index ? "bg-primary" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
