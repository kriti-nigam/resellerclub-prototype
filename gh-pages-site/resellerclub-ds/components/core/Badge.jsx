import * as React from "react";

/**
 * Small pill label. Tones map to the semantic palette; "accent" is the
 * brand-blue soft pill used for "new / AI-ready" flags.
 */
export function Badge({ children, tone = "neutral", style }) {
  const tones = {
    neutral: { fg: "var(--rc-text-2)", bg: "var(--rc-bg-subtle)", bd: "var(--rc-line)" },
    accent:  { fg: "var(--rc-accent-700)", bg: "var(--rc-accent-50)", bd: "var(--rc-accent-100)" },
    success: { fg: "var(--rc-green)", bg: "var(--rc-green-soft)", bd: "transparent" },
    teal:    { fg: "var(--rc-teal)", bg: "var(--rc-teal-soft)", bd: "transparent" },
    warning: { fg: "#9A6406", bg: "var(--rc-amber-soft)", bd: "transparent" },
    danger:  { fg: "var(--rc-red)", bg: "var(--rc-red-soft)", bd: "transparent" },
    violet:  { fg: "var(--rc-violet)", bg: "var(--rc-violet-soft)", bd: "transparent" },
    dark:    { fg: "#fff", bg: "var(--rc-ink)", bd: "transparent" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--rc-font-body)",
      fontSize: 12, fontWeight: 600, color: tones.fg, background: tones.bg,
      border: `1px solid ${tones.bd}`, borderRadius: "var(--rc-r-pill)", padding: "3px 10px",
      letterSpacing: "0.01em", lineHeight: 1.4, ...style,
    }}>{children}</span>
  );
}
