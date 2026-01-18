"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <label
      htmlFor="themeToggle"
      className="themeToggle st-sunMoonThemeToggleBtn"
      aria-label={mounted ? (isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro") : "Cambiar tema"}
    >
      <input
        id="themeToggle"
        type="checkbox"
        className="themeToggleInput"
        checked={mounted ? isDark : false}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <svg width={18} height={18} viewBox="0 0 20 20" fill="currentColor" stroke="none" aria-hidden="true">
        <mask id="moon-mask">
          <rect x={0} y={0} width={20} height={20} fill="white" />
          <circle cx={11} cy={3} r={8} fill="black" />
        </mask>
        <circle className="sunMoon" cx={10} cy={10} r={8} mask="url(#moon-mask)" />
        <g>
          <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
          <circle className="sunRay sunRay2" cx={14} cy={16.928} r="1.5" />
          <circle className="sunRay sunRay3" cx={6} cy={16.928} r="1.5" />
          <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
          <circle className="sunRay sunRay5" cx={6} cy={3.1718} r="1.5" />
          <circle className="sunRay sunRay6" cx={14} cy={3.1718} r="1.5" />
        </g>
      </svg>
    </label>
  );
}
