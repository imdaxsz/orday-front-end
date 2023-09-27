import styled from "styled-components";

export const DropdownBox = styled.div`
  position: relative;
  width: 8rem;
  padding: 0.5rem;
  border-radius: 12px;
  background-color: transparent;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5d5d5d;
  cursor: pointer;
`;
export const DropdownOptions = styled.ul<{ $show: boolean }>`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  overflow: auto;
  padding: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary["60"]};
  color: #fff;
  max-height: ${({ $show }) => ($show ? "none" : "0")};
  z-index: 100;
`;
export const Option = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary["80"]};
  }
`;
