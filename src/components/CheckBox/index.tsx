import { InputHTMLAttributes } from "react";

import CheckIcon from "@/assets/check_icon.svg?react";

import {
  CheckboxContainer,
  CheckboxBtn,
  CheckboxInput,
  CheckboxText,
  CheckboxIcon,
} from "./style";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function CheckBox({
  id,
  name,
  text,
  onChange,
  type,
  checked,
}: CheckBoxProps) {
  return (
    <CheckboxContainer>
      <CheckboxBtn>
        <CheckboxInput
          type="checkbox"
          id={id}
          name={name}
          onChange={onChange}
          $isCircle={type === "circle"}
          checked={checked}
          aria-label="체크박스"
        />
        {checked && (
          <CheckboxIcon>
            <CheckIcon />
          </CheckboxIcon>
        )}
      </CheckboxBtn>
      <CheckboxText htmlFor={id}>{text}</CheckboxText>
    </CheckboxContainer>
  );
}
