import { InputHTMLAttributes } from "react";

import { CheckboxContainer, CheckboxInput, CheckboxText } from "./style";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function CheckBox({
  name,
  text,
  onChange,
  type,
  checked,
}: CheckBoxProps) {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        $isCircle={type === "circle"}
        checked={checked}
      />
      <CheckboxText htmlFor={text}>{text}</CheckboxText>
    </CheckboxContainer>
  );
}
