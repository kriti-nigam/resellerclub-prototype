import * as React from "react";

const METHOD_COLORS = {
  GET:    { fg: "var(--rc-teal)", bg: "var(--rc-teal-soft)" },
  POST:   { fg: "var(--rc-violet)", bg: "var(--rc-violet-soft)" },
  PUT:    { fg: "var(--rc-amber)", bg: "var(--rc-amber-soft)" },
  PATCH:  { fg: "var(--rc-amber)", bg: "var(--rc-amber-soft)" },
  DELETE: { fg: "var(--rc-red)", bg: "var(--rc-red-soft)" },
};

/** Monospace HTTP-method chip, color-coded per verb. */
export function MethodTag({ method, size = "md" }) {
  const c = METHOD_COLORS[method] || METHOD_COLORS.GET;
  const s = size === "sm"
    ? { fontSize: 10.5, padding: "2px 6px", minWidth: 38 }
    : { fontSize: 12, padding: "4px 9px", minWidth: 50 };
  return (
    <span style={{
      fontFamily: "var(--rc-font-mono)", fontWeight: 600, color: c.fg, background: c.bg,
      borderRadius: "var(--rc-r-sm)", textAlign: "center", letterSpacing: "0.02em",
      display: "inline-block", ...s,
    }}>{method}</span>
  );
}
