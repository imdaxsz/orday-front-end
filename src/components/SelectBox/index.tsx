import { useState } from "react";

import ExpandIcon from "@/assets/expand_more.svg?react";

import { SelectContainer, Selected, Option, Options } from "./style";

export interface SelectStyleProps {
  $hasLabel: boolean;
  $isVisible: boolean;
  disabled?: boolean;
  height?: string;
}

interface SelectBoxProps {
  label?: string;
  text: string;
  options: string[];
  onChange?: (value: string) => void; // 값이 설정되면 수행할 함수
  disabled?: boolean;
  height?: string;
  className?: string;
}

export default function SelectBox({
  label,
  text,
  options,
  onChange,
  disabled,
  height,
  className = "",
}: SelectBoxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(text);

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLLIElement).innerText;
    setSelected(value);
    if (onChange) onChange(value);
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
        {selected}
        <ExpandIcon />
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
