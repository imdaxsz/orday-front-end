import { ComponentProps } from "react";

import { Container, IconButton } from "./style";

export type Variant = "solid" | "outline";
export type Color = "primary" | "neutral";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentProps<"button"> {
  $variant?: Variant;
  color?: Color;
  size?: Size;
  iconOnly?: boolean;
}

export default function Button({
  $variant = "solid",
  color = "primary",
  size = "md",
  iconOnly = false,
  children,
  ...props
}: ButtonProps) {
  if (iconOnly) return <IconButton {...props}>{children}</IconButton>;
  return (
    <Container $variant={$variant} color={color} size={size} {...props}>
      {children}
    </Container>
  );
}
