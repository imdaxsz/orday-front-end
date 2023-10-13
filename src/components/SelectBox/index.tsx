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
  text?: string;
  options: string[] | number[];
  selected: string | null;
  setSelected?: React.Dispatch<React.SetStateAction<string | null>>;
  disabled?: boolean;
  height?: string;
  className?: string;
}

export default function SelectBox({
  label,
  text,
  options,
  selected,
  setSelected,
  disabled,
  height,
  className = "",
}: SelectBoxProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLLIElement).innerText;
    if (setSelected) setSelected(value);
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
          <Option key={i} onClick={(e) => handleOptionClick(e)}>
            {option}
          </Option>
        ))}
      </Options>
    </SelectContainer>
  );
}
