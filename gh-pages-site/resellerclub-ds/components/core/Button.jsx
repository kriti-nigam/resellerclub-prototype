import * as React from "react";
import { Icon } from "./Icon.jsx";

/**
 * ResellerClub button. Six variants, three sizes, optional leading/trailing
 * icon. Primary fills with the brand blue and lifts a blue glow on hover;
 * press darkens to accent-700 with no scale transform.
 */
export function Button({ children, variant = "primary", size = "md", icon, iconRight, href, onClick, full, style, type }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, gap: 6, ih: 15 },
    md: { padding: "11px 18px", fontSize: 14.5, gap: 8, ih: 17 },
    lg: { padding: "14px 24px", fontSize: 16, gap: 9, ih: 19 },
  }[size];
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: sizes.gap, padding: sizes.padding, fontSize: sizes.fontSize, fontWeight: 600,
    fontFamily: "var(--rc-font-body)", borderRadius: "var(--rc-r-md)", border: "1px solid transparent",
    cursor: "pointer", transition: "all var(--rc-dur) var(--rc-ease)", textDecoration: "none",
    width: full ? "100%" : "auto", whiteSpace: "nowrap", lineHeight: 1.1, letterSpacing: "-0.01em",
  };
  const variants = {
    primary: {
      background: press ? "var(--rc-accent-700)" : hover ? "var(--rc-accent-600)" : "var(--rc-accent)",
      color: "#fff", boxShadow: hover && !press ? "var(--rc-shadow-accent)" : "none",
    },
    dark: {
      background: hover ? "#1B2740" : "var(--rc-ink)", color: "#fff",
      boxShadow: hover ? "var(--rc-shadow-md)" : "none",
    },
    secondary: {
      background: hover ? "var(--rc-bg-subtle)" : "var(--rc-white)", color: "var(--rc-text)",
      borderColor: "var(--rc-line-strong)", boxShadow: "var(--rc-shadow-xs)",
    },
    ghost: { background: hover ? "var(--rc-bg-subtle)" : "transparent", color: "var(--rc-text)" },
    onDark: {
      background: hover ? "rgba(255,255,255,.16)" : "rgba(255,255,255,.10)", color: "#fff",
      borderColor: "rgba(255,255,255,.18)",
    },
    accentSoft: {
      background: hover ? "var(--rc-accent-100)" : "var(--rc-accent-50)", color: "var(--rc-accent-700)",
    },
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href} onClick={onClick} type={type}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {icon && <Icon name={icon} size={sizes.ih} />}
      {children}
      {iconRight && <Icon name={iconRight} size={sizes.ih} />}
    </Tag>
  );
}
