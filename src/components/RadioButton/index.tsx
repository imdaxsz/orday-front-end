import { StrictPropsWithChildren } from "@/types";

import { RadioInput, RadioText } from "./style";

interface RadioButtonProps {
  value: string;
  name: string;
  id: string;
  disabled?: boolean;
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
