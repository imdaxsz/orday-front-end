import { InputHTMLAttributes } from "react";

import { RadioInput, RadioText } from "./style";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RadioButton({
  value,
  name,
  id,
  disabled,
  text,
  handleRadio,
}: RadioButtonProps) {
  return (
    <RadioText htmlFor={id}>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        id={id}
        disabled={disabled}
        onChange={handleRadio}
      />
      <span>{text}</span>
    </RadioText>
  );
}
