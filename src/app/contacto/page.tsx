export default function ContactoPage() {
  return (
    <div className="h-full overflow-hidden px-6">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center">
        <div className="grid w-full gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
              Cuéntanos sobre tu proyecto y te respondemos con claridad.
            </h1>
            <p className="text-base text-muted-foreground">
              Selecciona el servicio que más se ajusta a tu objetivo y comparte el contexto esencial.
            </p>
            <div className="hidden rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lg sm:block">
              <h2 className="text-lg font-semibold text-foreground">Lo que podemos resolver</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>✔ Claridad en tu propuesta de valor.</li>
                <li>✔ Diseño moderno alineado a tu marca.</li>
                <li>✔ Experiencia de usuario optimizada.</li>
              </ul>
            </div>
          </div>

          <form className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-xl md:p-6">
            <div className="grid gap-4 md:gap-5">
              <div>
                <label className="text-sm font-medium text-foreground">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-2xl border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground outline-none transition focus:border-primary/60 md:py-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  className="mt-2 w-full rounded-2xl border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground outline-none transition focus:border-primary/60 md:py-3"
                />
              </div>
            <div>
              <label className="text-sm font-medium text-foreground">Servicio de interés</label>
              <select className="mt-2 w-full rounded-2xl border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground outline-none transition focus:border-primary/60 md:py-3">
                <option value="">Selecciona un servicio</option>
                <option value="peluqueria">Peluquería</option>
                <option value="restaurante">Restaurante</option>
                <option value="academia">Academia</option>
                <option value="clinica">Clínica</option>
                <option value="gimnasio">Gimnasio</option>
                <option value="estudio-creativo">Estudio creativo</option>
                <option value="otra-propuesta">Otra propuesta</option>
              </select>
            </div>
              <div>
                <label className="text-sm font-medium text-foreground">Mensaje</label>
                <textarea
                  placeholder="Cuéntanos lo esencial del proyecto"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-2xl border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground outline-none transition focus:border-primary/60 md:py-3"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Enviar consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
