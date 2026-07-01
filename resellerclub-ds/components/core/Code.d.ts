import * as React from "react";

export interface CodeProps {
  children: React.ReactNode;
  /** Use light-on-dark styling for dark surfaces. */
  onDark?: boolean;
}

/** Inline monospace code token. */
export function Code(props: CodeProps): JSX.Element;
