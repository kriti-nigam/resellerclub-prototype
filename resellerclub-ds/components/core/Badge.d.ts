import * as React from "react";

export type BadgeTone = "neutral" | "accent" | "success" | "teal" | "warning" | "danger" | "violet" | "dark";

export interface BadgeProps {
  children: React.ReactNode;
  /** Color treatment. Default "neutral". */
  tone?: BadgeTone;
  style?: React.CSSProperties;
}

/** Pill-shaped status / category label. */
export function Badge(props: BadgeProps): JSX.Element;
