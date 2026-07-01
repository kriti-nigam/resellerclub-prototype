import * as React from "react";

/** Inline monospace code token. `onDark` flips colors for dark surfaces. */
export function Code({ children, onDark }) {
  return (
    <code style={{
      fontFamily: "var(--rc-font-mono)", fontSize: "0.86em", fontWeight: 500,
      background: onDark ? "rgba(255,255,255,.12)" : "var(--rc-bg-subtle)",
      color: onDark ? "#fff" : "var(--rc-accent-700)",
      border: onDark ? "none" : "1px solid var(--rc-line)",
      padding: "1.5px 6px", borderRadius: 6, whiteSpace: "nowrap",
    }}>{children}</code>
  );
}
