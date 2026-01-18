"use client";

import { useState } from "react";

export type FlipCardData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
};

type FlipCardProps = {
  data: FlipCardData;
};

export function FlipCard({ data }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group h-[150px] w-full [perspective:1200px] sm:h-[170px] md:h-[188px] lg:h-[206px]">
      <button
        type="button"
        onClick={() => setFlipped((prev) => !prev)}
        className="relative h-full w-full cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        aria-pressed={flipped}
        aria-label={`Ver detalles de ${data.title}`}
      >
        <div
          className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-lg [backface-visibility:hidden]">
            <img src={data.image} alt={data.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-white sm:p-4">
              <p className="neon-text text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                {data.subtitle}
              </p>
              <h3 className="neon-text mt-2 text-base font-semibold sm:text-lg">{data.title}</h3>
              <p className="neon-text mt-2 text-xs text-white/85 sm:text-sm">{data.description}</p>
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card/90 p-3 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-4">
            <div className="scale-100 lg:scale-90 lg:origin-center">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/80 sm:text-xs md:text-[9px] lg:text-[12px]">
                {data.subtitle}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg md:text-sm lg:text-xl">{data.title}</h3>
              <p className="mt-3 text-xs text-foreground/80 sm:text-sm md:text-[11px] lg:text-sm">{data.description}</p>
            </div>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mx-auto mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-2 text-[10px] font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 sm:px-4 sm:text-xs md:text-[10px] lg:text-sm"
            >
              Visitar
              <span>↗</span>
            </a>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
