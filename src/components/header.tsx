"use client";

import CardNav, { type CardNavItem } from "@/components/card-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const cardItems: CardNavItem[] = [
    {
      label: "Inicio",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Volver al inicio", href: "/", ariaLabel: "Ir a inicio" },
      ],
    },
    {
      label: "Servicios",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Ver ejemplos", href: "/servicios", ariaLabel: "Ver servicios" },
        { label: "Nuestro proceso", href: "/servicios#proceso", ariaLabel: "Ver proceso" },
      ],
    },
    {
      label: "Contacto",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Enviar mensaje", href: "/contacto", ariaLabel: "Abrir contacto" },
      ],
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative h-[72px]">
        <CardNav brand="Degry" brandHref="/" items={cardItems} rightSlot={<ThemeToggle />} />
      </div>
    </header>
  );
}
