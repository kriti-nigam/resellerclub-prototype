import * as React from "react";

/** 7px status dot in the semantic palette. */
export function StatusDot({ status }) {
  const map = {
    active: "var(--rc-green)", pending: "var(--rc-amber)", failed: "var(--rc-red)",
    live: "var(--rc-green)", test: "var(--rc-amber)", suspended: "var(--rc-text-3)",
  };
  return (
    <span style={{
      width: 7, height: 7, borderRadius: 999,
      background: map[status] || "var(--rc-text-3)",
      display: "inline-block", flexShrink: 0,
    }} />
  );
}
