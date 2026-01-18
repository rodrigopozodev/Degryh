"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  brand: string;
  brandHref?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  rightSlot?: React.ReactNode;
}

const CardNav: React.FC<CardNavProps> = ({
  brand,
  brandHref = "/",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "var(--card)",
  menuColor = "var(--foreground)",
  rightSlot,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 56;

    const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement | null;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = "visible";
      contentEl.style.pointerEvents = "auto";
      contentEl.style.position = "static";
      contentEl.style.height = "auto";

      contentEl.offsetHeight;

      const topBar = 44;
      const padding = 4;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }

    return 56;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 44, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, "-=0.1");

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 top-[0.9rem] z-[99] w-[92%] max-w-[820px] -translate-x-1/2 lg:top-[1.2rem] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[44px] rounded-xl p-0 shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 z-[2] flex h-[44px] items-center justify-between p-2">
          <div className="flex w-full items-center">
            <div className="flex w-1/3 items-center justify-start pl-3">
              <button
                type="button"
                className={`hamburger-menu ${
                  isHamburgerOpen ? "open" : ""
                } group flex h-full cursor-pointer flex-col items-center justify-center gap-[6px]`}
                onClick={toggleMenu}
                aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
                style={{ color: menuColor }}
              >
                <div
                  className={`hamburger-line h-[2px] w-[30px] origin-center bg-current transition-all duration-300 ease-linear ${
                    isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
                  } group-hover:opacity-75`}
                />
                <div
                  className={`hamburger-line h-[2px] w-[30px] origin-center bg-current transition-all duration-300 ease-linear ${
                    isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
                  } group-hover:opacity-75`}
                />
              </button>
            </div>
            <div className="flex w-1/3 items-center justify-center">
              <a
                href={brandHref}
                className="text-sm font-semibold tracking-tight text-foreground transition hover:text-[#7ad3ff]"
              >
                {brand}
              </a>
            </div>
            <div className="flex w-1/3 items-center justify-end pr-2">{rightSlot}</div>
          </div>
        </div>

        <div
          className={`card-nav-content absolute bottom-0 left-0 right-0 top-[44px] flex flex-col items-stretch justify-start gap-2 p-2 ${
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } lg:flex-row lg:items-stretch lg:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card relative flex h-full min-h-[64px] select-none flex-col gap-2 rounded-[calc(0.75rem-0.2rem)] p-2 flex-[1_1_auto] md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label text-[18px] font-normal tracking-[-0.5px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex cursor-pointer items-center gap-[6px] no-underline text-[15px] transition-colors duration-300 hover:text-[#7ad3ff] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
