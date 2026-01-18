"use client";

import { useState } from "react";

type ServiceExampleProps = {
  title: string;
  description: string;
};

export function ServiceExample({ title, description }: ServiceExampleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 w-full max-w-3xl">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-expanded={open}
      >
        Ver web de ejemplo
      </button>

      <div
        className={`mt-6 overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-xl transition-all duration-500 ${
          open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visual de referencia</p>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="relative min-h-[160px] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 via-primary/20 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/60 bg-background/80 p-4 shadow-md backdrop-blur">
              <div className="h-3 w-24 rounded-full bg-foreground/80" />
              <div className="mt-3 h-2 w-32 rounded-full bg-muted-foreground/60" />
              <div className="mt-2 h-2 w-20 rounded-full bg-muted-foreground/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
