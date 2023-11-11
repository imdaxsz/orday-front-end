import styled from "styled-components";

export const CommentDropDown = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  align-items: center;
  justify-content: flex-start;
  width: 722px;
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
`;

export const DropDownContainer = styled.div<{ isDropdownOpen: boolean }>`
  width: 89px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  position: absolute;
  z-index: 120;
  padding: 8px 0px;
  transform: translateY(${(props) => (props.isDropdownOpen ? "80px" : "0")});
  opacity: ${(props) => (props.isDropdownOpen ? "1" : "0")};
  visibility: ${(props) => (props.isDropdownOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const DropDownList = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  line-height: 120%;
  color: black;
  padding: 8px 25px;
  display: block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
