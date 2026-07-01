import * as React from "react";

export type ButtonVariant = "primary" | "dark" | "secondary" | "ghost" | "onDark" | "accentSoft";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * @startingPoint section="Core" subtitle="Brand button — 6 variants, 3 sizes" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. Default "primary" (brand-blue fill). */
  variant?: ButtonVariant;
  /** Default "md". */
  size?: ButtonSize;
  /** Leading Lucide icon name. */
  icon?: string;
  /** Trailing Lucide icon name (e.g. "arrow-right"). */
  iconRight?: string;
  /** Render as <a> with this href instead of <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Stretch to 100% width. */
  full?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

/** ResellerClub primary/secondary/ghost button with icon support. */
export function Button(props: ButtonProps): JSX.Element;
