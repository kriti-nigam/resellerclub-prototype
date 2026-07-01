import * as React from "react";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface MethodTagProps {
  method: HttpMethod;
  /** "sm" | "md". Default "md". */
  size?: "sm" | "md";
}

/** Color-coded HTTP-method chip for API reference rows. */
export function MethodTag(props: MethodTagProps): JSX.Element;
