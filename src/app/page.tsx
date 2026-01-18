import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(109,74,255,0.18),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(139,123,255,0.2),_transparent_55%)]" />
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-center text-center">
        <div className="w-full space-y-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Creamos la web que tu negocio necesita
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Soluciones web claras y efectivas. Desde páginas simples hasta tiendas online completas. Sin complicaciones,
            solo resultados.
          </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-xl"
              >
                Contactar
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-xl"
              >
                Servicios
              </Link>
              <Link
                href="/servicios#proceso"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-xl"
              >
                Proceso
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
