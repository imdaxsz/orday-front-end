import { useState } from "react";

import DropdownIcon from "@/assets/arrow_drop_down.svg?react";
import DropupIcon from "@/assets/arrow_drop_up.svg?react";

import { DropdownBox, Label, DropdownOptions, Option } from "./style";

interface OptionType {
  name: string;
  value: string;
}

interface DropdownProps {
  type: "product" | "brand";
  selectedOption: OptionType;
  setSelectedOption: React.Dispatch<React.SetStateAction<OptionType>>;
}

export default function Dropdown({
  type,
  selectedOption,
  setSelectedOption,
}: DropdownProps) {
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
    { name: "최신순", value: "new" },
    { name: "인기순", value: "popularity" },
    { name: "낮은 가격순", value: "price_asc" },
    { name: "높은 가격순", value: "prcie_desc" },
  ];

  const brandOptions = [
    { name: "인기순", value: "popularity" },
    { name: "이름(오름차순)", value: "name_asc" },
    { name: "이름(내림차순)", value: "name_desc" },
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
      <DropdownOptions $show={showOptions}>
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
