import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const CategoryNavBox = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  color: ${({ theme }) => theme.colors.neutral["40"]};
  margin-top: 92px;
  margin-bottom: 24px;
  margin-right: 20px;
`;

export const CategoryItem = styled(Link)<{ $current?: boolean }>`
  margin-left: 15px;
  ${({ $current = false, theme }) =>
    $current &&
    css`
      ${theme.typo["body-2-b"]};
      color: ${theme.colors.neutral["80"]};
    `}
`;
