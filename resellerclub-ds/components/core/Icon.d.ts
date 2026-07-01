import * as React from "react";

export interface IconProps {
  /** Lucide icon name, e.g. "arrow-right", "search", "sparkles". */
  name: string;
  /** Pixel size (width & height). Default 18. */
  size?: number;
  /** CSS color for the stroke. Defaults to currentColor. */
  color?: string;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
}

/** Lucide-backed line icon. Requires the lucide CDN script on the page. */
export function Icon(props: IconProps): JSX.Element;
