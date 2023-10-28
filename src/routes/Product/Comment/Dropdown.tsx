import { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

import {
  CommentDropDown,
  DropDownContainer,
  DropDownList,
} from "./Dropdown.style";

const options = ["최신순", "추천순", "별점순"];

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (event: React.MouseEvent, option: string) => {
    event.stopPropagation();
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <CommentDropDown onClick={toggleDropdown}>
        {selectedOption}
        {isDropdownOpen && (
          <DropDownContainer isDropdownOpen={isDropdownOpen}>
            {options.map((option, index) => (
              <DropDownList
                key={index}
                onClick={(event) => handleOptionClick(event, option)}
              >
                {option}
              </DropDownList>
            ))}
          </DropDownContainer>
        )}
        {isDropdownOpen ? <BiCaretUp /> : <BiCaretDown />}
      </CommentDropDown>
    </>
  );
}
