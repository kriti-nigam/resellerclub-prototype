import * as React from "react";

/** The brand mark — the ResellerClub crown. Pass `src` if the asset lives
 *  elsewhere relative to the page consuming the component. */
export function Mark({ size = 32, src = "../../assets/resellerclub-mark.png" }) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt="ResellerClub"
      style={{ display: "inline-block", flexShrink: 0, objectFit: "contain" }}
    />
  );
}

/** Full lockup: mark + "ResellerClub" wordmark + optional mono product tag. */
export function Logo({ size = 30, dark = false, tag = "Developers" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Mark size={size} />
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: size * 0.62, letterSpacing: "-0.02em", color: dark ? "#fff" : "var(--rc-text)" }}>
          ResellerClub
        </span>
        {tag && (
          <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: size * 0.4, fontWeight: 500, color: "var(--rc-accent)", letterSpacing: "-0.01em" }}>
            {tag}
          </span>
        )}
      </span>
    </span>
  );
}
