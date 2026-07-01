import * as React from "react";

export interface MarkProps {
  /** Pixel size of the square mark. Default 32. */
  size?: number;
  /** Override the asset path (relative to the consuming page). */
  src?: string;
}

/** The standalone ResellerClub crown mark. */
export function Mark(props: MarkProps): JSX.Element;

/**
 * @startingPoint section="Brand" subtitle="ResellerClub logo lockup" viewport="700x120"
 */
export interface LogoProps {
  /** Pixel size driving the whole lockup. Default 30. */
  size?: number;
  /** White wordmark for dark surfaces. */
  dark?: boolean;
  /** Mono product tag after the wordmark. Default "Developers". Pass "" to hide. */
  tag?: string;
}

/** Full ResellerClub logo: mark + wordmark + product tag. */
export function Logo(props: LogoProps): JSX.Element;
