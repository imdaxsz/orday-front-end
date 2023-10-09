import { ComponentProps } from "react";

import { Container, Input } from "./style";

interface TextInputProps extends ComponentProps<"input"> {
  label?: string;
  id: string;
  warn?: boolean;
  message?: string; // 오류 메시지
  $frmInfo?: boolean;
  $size?: "md" | "lg";
}

export default function TextInput({
  label,
  id,
  warn,
  message,
  className,
  style,
  ...props
}: TextInputProps) {
  return (
    <Container className={className} style={style}>
      {label && <label htmlFor={id}>{label}</label>}
      <Input id={id} {...props} />
      {warn && message && <span>{message}</span>}
    </Container>
  );
}
