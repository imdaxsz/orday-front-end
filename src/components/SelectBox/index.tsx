import { useState } from "react";

import DropdownIcon from "@/assets/expand_more.svg?react";
import DropupIcon from "@/assets/keyboard_arrow_up.svg?react";

import { SelectContainer, Selected, Option, Options } from "./style";

export interface SelectStyleProps {
  $hasLabel: boolean;
  $isVisible: boolean;
  disabled?: boolean;
  height?: string;
}

interface SelectBoxProps {
  label?: string;
  id?: string;
  text?: string;
  options: string[] | number[];
  selected: string | null;
  setSelected?: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (id: string, value: string) => void;
  disabled?: boolean;
  height?: string;
  className?: string;
}

export default function SelectBox({
  label,
  id,
  text,
  options,
  selected,
  setSelected,
  onChange,
  disabled,
  height,
  className = "",
}: SelectBoxProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const value = target.innerText;
    const { id } = target;
    if (setSelected) setSelected(value);
    if (onChange) onChange(id, value);
  };

  return (
    <SelectContainer
      id="select-box"
      $hasLabel={Boolean(label)}
      onClick={() => !disabled && setIsVisible((prev) => !prev)}
      height={height}
      className={className}
    >
      {label && <label htmlFor="select-box">{label}</label>}
      <Selected disabled={disabled} height={height}>
        {selected ? selected : text}
        {isVisible ? <DropupIcon /> : <DropdownIcon />}
      </Selected>
      <Options
        $hasLabel={Boolean(label)}
        $isVisible={isVisible}
        height={height}
      >
        {options.map((option, i) => (
          <Option key={i} id={id} onClick={(e) => handleOptionClick(e)}>
            {option}
          </Option>
        ))}
      </Options>
    </SelectContainer>
  );
}
