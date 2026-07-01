import * as React from "react";

/**
 * Lucide-backed icon. Renders an <i data-lucide> and lets the global
 * lucide runtime swap it for an SVG. Load lucide via CDN once per page.
 */
export function Icon({ name, size = 18, color, strokeWidth = 2, style, className }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth } });
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", width: size, height: size, color, lineHeight: 0, flexShrink: 0, ...style }}
    />
  );
}
