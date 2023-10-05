import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const CheckboxText = styled.label`
  padding-left: 0.5rem;
  cursor: pointer;
`;

export const CheckboxInput = styled.input<{ $isCircle: boolean }>`
  cursor: pointer;
  appearance: none;
  margin: 0;
  padding: 0;
  width: 1rem;
  height: 1rem;
  border: 1px solid gainsboro;
  border-radius: ${({ $isCircle }) => ($isCircle ? "50%" : "5px")};

  &:checked {
    border-color: transparent;
    background: center url("src/assets/check_icon.svg") no-repeat;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.primary["80"]};
  }
`;
