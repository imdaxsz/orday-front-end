import styled from "styled-components";

interface MenuProps {
  isVisible: boolean;
}

export const Container = styled.div<MenuProps>`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  overflow: ${({ isVisible = false }) => (isVisible ? "visible" : "hidden")};
`;

export const Item = styled.div`
  padding: 8px 0 8px 8px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.colors["neutral"]["80"]};
  ${({ theme }) => theme.typo["body-2-r"]};
`;

export const SubMenu = styled.div<MenuProps>`
  width: 100%;
  height: fit-content;
  height: ${({ isVisible = false }) => (isVisible ? "fit-content" : "0px")};
  transition: height 0.5s;
  padding: ${({ isVisible = false }) =>
    isVisible ? "9px 10px 5px 10px" : "0px"};
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > a {
    width: fit-content;
    color: ${({ theme }) => theme.colors["neutral"][70]};
    ${({ theme }) => theme.typo["body-3-r"]};
    font-weight: 300;
    line-height: 120%;
  }
`;
