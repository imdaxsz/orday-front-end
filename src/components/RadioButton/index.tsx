import { InputHTMLAttributes } from "react";

import { StrictPropsWithChildren } from "@/types";

import { RadioInput, RadioText } from "./style";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RadioButton({
  value,
  name,
  id,
  disabled,
  handleRadio,
  children,
}: StrictPropsWithChildren<RadioButtonProps>) {
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
      <span>{children}</span>
    </RadioText>
  );
}
