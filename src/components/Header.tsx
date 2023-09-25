import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Menu from "./Menu";

const Container = styled.div<{ $isHome: boolean }>`
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 15px 30px;
  border-bottom: solid 1px
    ${({ $isHome, theme }) =>
      $isHome ? "white" : theme.colors["primary"]["60"]};
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Group = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Item = styled.li`
  float: left;
  cursor: pointer;
  ${({ theme }) => theme.typo["body-2-r"]};
  letter-spacing: -0.16px;
`;

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const pathname = useLocation().pathname.split("/")[1];
  const isHome = pathname === "";
  return (
    <Container $isHome={isHome}>
      <Content>
        <Group>
          <Item onClick={() => setMenuIsVisible((prev) => !prev)}>SHOP</Item>
          <Item>COMMUNITY</Item>
        </Group>
        <img src="/logo.svg" alt="Logo" />
        <Group>
          <Item>SEARCH</Item>
          <Item>BAG</Item>
          <Item>MY</Item>
        </Group>
      </Content>
      {menuIsVisible && <Menu />}
    </Container>
  );
}
