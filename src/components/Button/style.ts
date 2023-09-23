import styled, { css, DefaultTheme } from "styled-components";

import { ButtonProps, Color, Variant } from ".";

const baseStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
`;

const buttonSizes = {
  sm: css`
    height: 40px;
    padding: 10px 8px;
    border-radius: 4px;
    font-size: 12px;
  `,
  md: css`
    height: 50px;
    padding: 18px 10px;
    border-radius: 10px;
    font-size: 18px;
  `,
  lg: css`
    height: 60px;
    padding: 17px;
    border-radius: 10px;
    font-size: 16px;
  `,
};

const getButtonStyle = (
  variant: Variant,
  color: Color,
  theme: DefaultTheme,
) => {
  const styles = {
    solid: css`
      background-color: ${color === "primary"
        ? theme.colors["primary"]["100"]
        : theme.colors["neutral"]["10"]};
      border: solid 1px
        ${color === "primary"
          ? theme.colors["primary"]["100"]
          : theme.colors["neutral"]["40"]};
      color: ${color === "primary" ? "white" : theme.colors["neutral"]["70"]};
    `,
    outline: css`
      background-color: white;
      border: solid 1px
        ${color === "primary"
          ? theme.colors["primary"]["100"]
          : theme.colors["neutral"]["40"]};
      color: ${theme.colors[color]["100"]};
    `,
  };
  return styles[variant];
};

export const Container = styled.button<
  Pick<ButtonProps, "color" | "size"> & { $variant?: Variant }
>`
  ${baseStyle};
  ${({ size = "md" }) => buttonSizes[size]};
  ${({ $variant = "solid", color = "primary", theme }) =>
    getButtonStyle($variant, color, theme)};
  ${({ theme }) => css`
    &:disabled {
      color: ${theme.colors["neutral"]["40"]};
      border: 1px solid ${theme.colors["neutral"]["40"]};
      background-color: ${theme.colors["neutral"]["10"]};
      cursor: default;
    }
  `}
`;
