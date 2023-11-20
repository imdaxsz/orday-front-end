import styled from "styled-components";

export const Container = styled.div<{ $hasBorder: boolean }>`
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 15px 30px;
  border-bottom: solid 1px
    ${({ $hasBorder, theme }) =>
      $hasBorder ? "white" : theme.colors["primary"]["60"]};
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    display: block;
  }
`;

export const Group = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 33.3%;

  &:last-of-type {
    justify-content: flex-end;
  }
`;

export const Item = styled.li`
  float: left;
  cursor: pointer;
  ${({ theme }) => theme.typo["body-2-r"]};
  letter-spacing: -0.16px;
  transition: all 0.1s;
  &:hover {
    color: ${({ theme }) => theme.colors["primary"]["60"]};
  }
`;
