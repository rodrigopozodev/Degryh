import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceExample } from "@/components/service-example";
import { getServiceBySlug, services } from "@/lib/services";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="h-full overflow-hidden px-6">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-10">
        <div className="space-y-4">
          <Link href="/servicios" className="text-sm font-semibold text-primary">
            ← Volver a servicios
          </Link>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">{service.title}</h1>
            <p className="text-lg text-muted-foreground">{service.tagline}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="rounded-3xl border border-border/70 bg-card/80 p-4 shadow-lg md:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Objetivo</h2>
            <p className="mt-3 text-sm text-foreground md:text-lg">{service.goal}</p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/80 p-4 shadow-lg md:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Ideal para</h2>
            <p className="mt-3 text-sm text-foreground md:text-lg">{service.idealFor}</p>
          </div>
        </div>

        <ServiceExample title={service.example.title} description={service.example.description} />
      </div>
    </div>
  );
}
