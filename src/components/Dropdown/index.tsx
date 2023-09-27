import { useState } from "react";

import DropdownIcon from "@/assets/arrow_drop_down.svg?react";
import DropupIcon from "@/assets/arrow_drop_up.svg?react";

import { DropdownBox, Label, DropdownOptions, Option } from "./style";

interface DropdownProps {
  type: "product" | "brand";
}

interface OptionType {
  name: string;
  value: string;
}

export default function Dropdown({ type }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    name: "정렬방식",
    value: "",
  });
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectChange = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    console.log(e.target);
    const value = e.currentTarget.getAttribute("value");
    const option =
      type == "product"
        ? productOptions.find((option) => option.value === value)
        : brandOptions.find((option) => option.value === value);
    if (value && option) setSelectedOption({ name: option.name, value });
  };

  const productOptions = [
    { name: "전체", value: "option1" },
    { name: "인기순", value: "option2" },
    { name: "추천순", value: "option3" },
    { name: "낮은 가격순", value: "option4" },
    { name: "높은 가격순", value: "option5" },
    { name: "할인순", value: "option6" },
  ];

  const brandOptions = [
    { name: "전체", value: "option1" },
    { name: "인기순", value: "option2" },
    { name: "최근 입점순", value: "option3" },
    { name: "가나다순", value: "option4" },
    { name: "ABC순", value: "option5" },
  ];

  return (
    <DropdownBox
      role="presentation"
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Label>
        {selectedOption.name}
        {showOptions ? <DropupIcon /> : <DropdownIcon />}
      </Label>
      <DropdownOptions show={showOptions}>
        {type === "product" &&
          productOptions.map((option) => (
            <Option
              role="presentation"
              key={option.value}
              value={option.value}
              onClick={handleSelectChange}
            >
              {option.name}
            </Option>
          ))}
        {type === "brand" &&
          brandOptions.map((option) => (
            <Option
              role="presentation"
              key={option.value}
              value={option.value}
              onClick={handleSelectChange}
            >
              {option.name}
            </Option>
          ))}
      </DropdownOptions>
    </DropdownBox>
  );
}
