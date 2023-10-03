import styled, { css } from "styled-components";

import { TabStyleProps } from ".";

export const Container = styled.ul<TabStyleProps>`
  height: 48px;
  display: flex;
  ${({ $activeId = 1, theme }) => css`
    li:nth-child(${$activeId}) {
      border-bottom: solid 2px ${theme.colors["primary"]["100"]};
      color: ${({ theme }) => theme.colors["primary"]["100"]};
      font-weight: 700;
    }
  `};
`;

export const TabContainer = styled.li`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: white;
  border-bottom: solid 2px white;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  font-size: 16px;
  font-weight: 300;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: inherit;
  }
`;
