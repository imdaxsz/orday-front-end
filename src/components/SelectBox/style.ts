import styled, { css } from "styled-components";

import { SelectStyleProps } from ".";

export const SelectContainer = styled.div<
  Pick<SelectStyleProps, "$hasLabel" | "height">
>`
  width: 130px;
  height: ${({ $hasLabel = false, height = "50px" }) =>
    $hasLabel ? `calc(${height} + 21.5px)` : height};
  position: relative;

  & > label {
    display: block;
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
    margin-bottom: 5px;
  }
`;

export const Selected = styled.div<
  Pick<SelectStyleProps, "disabled" | "height">
>`
  position: absolute;
  width: 100%;
  height: ${({ height = "50px" }) => height};
  z-index: 2;
  padding: 13px 4px 13px 10px;
  border-radius: 10.2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  cursor: ${({ disabled = false }) => (disabled ? "default" : "pointer")};
  ${({ theme }) => theme.typo["body-3-r"]};
  font-weight: 300;
  color: ${({ theme, disabled = false }) =>
    disabled ? theme.colors["neutral"]["40"] : theme.colors["neutral"]["70"]};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors["neutral"]["40"]};

  svg {
    ${({ theme, disabled = false }) =>
      disabled &&
      css`
        fill: ${theme.colors["neutral"]["40"]};
      `}
  }
`;

export const Options = styled.ul<Omit<SelectStyleProps, "disabled">>`
  width: 100%;
  position: absolute;
  top: ${({ $hasLabel = false, height = "50px" }) =>
    $hasLabel ? `calc(${height} - 10px + 21.5px)` : `calc(${height} - 10px)`};
  z-index: 1;
  background-color: white;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  border-radius: 0px 0px 10.2px 10.2px;
  border: 1px solid #aeaeae;
  padding: 14px 0 4px;
  overflow-y: auto;
  max-height: 150px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-button:vertical:start:increment {
    display: block;
  }

  &::-webkit-scrollbar-button:vertical:end:increment {
    display: block;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5px;
    background: ${({ theme }) => theme.colors["neutral"]["20"]};
    border-radius: 10px;
  }
`;

export const Option = styled.li`
  padding: 5px 20px;
  cursor: pointer;
  ${({ theme }) => theme.typo["body-1-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["100"]};
`;
