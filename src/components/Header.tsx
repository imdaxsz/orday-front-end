import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Menu from "./Menu";

const Container = styled.div<{ $hasBorder: boolean }>`
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 15px 30px;
  border-bottom: solid 1px
    ${({ $hasBorder, theme }) =>
      $hasBorder ? "white" : theme.colors["primary"]["60"]};
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    display: block;
  }
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
  const pathname = useLocation().pathname.split("/");
  // 랜딩 페이지, 브랜드 상세 페이지에서만 border bottom 제거
  const hasBorder =
    pathname[1] === "" || (pathname[1] === "brands" && Boolean(pathname[2]));
  return (
    <Container $hasBorder={hasBorder}>
      <Content>
        <Group>
          <Item onClick={() => setMenuIsVisible((prev) => !prev)}>SHOP</Item>
          <Item>COMMUNITY</Item>
        </Group>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
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
