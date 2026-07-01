import * as React from "react";

export type DotStatus = "active" | "pending" | "failed" | "live" | "test" | "suspended";

export interface StatusDotProps {
  status: DotStatus;
}

/** Tiny colored status indicator dot. */
export function StatusDot(props: StatusDotProps): JSX.Element;
