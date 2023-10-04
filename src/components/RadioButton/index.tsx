import { ReactNode } from "react";

import { RadioInput, RadioText } from "./style";

interface RadioButtonProps {
  children: ReactNode;
  value: string;
  name: string;
  id: string;
  checked?: boolean;
  disabled?: boolean;
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RadioButton({
  children,
  value,
  name,
  id,
  checked,
  disabled,
  handleRadio,
}: RadioButtonProps) {
  return (
    <RadioText htmlFor={id}>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleRadio}
      />
      <span>{children}</span>
    </RadioText>
  );
}
