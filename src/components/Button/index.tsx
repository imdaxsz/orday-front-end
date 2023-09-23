import { ComponentProps } from "react";

import { Container } from "./style";

export type Variant = "solid" | "outline";
export type Color = "primary" | "neutral";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentProps<"button"> {
  $variant?: Variant;
  color?: Color;
  size?: Size;
}

export default function Button({
  $variant = "solid",
  color = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <Container $variant={$variant} color={color} size={size} {...props}>
      {children}
    </Container>
  );
}
