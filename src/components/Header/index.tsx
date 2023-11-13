import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "@/assets/logo.svg?react";
// import { useAppSelector } from "@/store";

import Backdrop from "../Backdrop";
import Menu from "../Menu";

import MyMenu from "./MyMenu";
import { Container, Content, Group, Item } from "./style";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [myMenuIsVisible, setMyMenuIsVisible] = useState(false);
  // const isLoggedIn = useAppSelector((state) => state.auth.accessToken);
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/");
  // 랜딩 페이지, 브랜드 상세 페이지에서만 border bottom 제거
  const hasBorder =
    pathname[1] === "" || (pathname[1] === "brands" && Boolean(pathname[2]));

  const handleMyClick = () => {
    // 로그인 상태일 때만 드롭다운이 펼쳐집니다.
    if (isLoggedIn) setMyMenuIsVisible(true);
    else navigate("/login");
  };

  useEffect(() => {
    setMenuIsVisible(false);
    setMyMenuIsVisible(false);
  }, [location]);

  return (
    <Container $hasBorder={hasBorder}>
      <Content>
        <Group>
          <Item onClick={() => setMenuIsVisible((prev) => !prev)}>SHOP</Item>
          <Item>
            <Link to="/reviews">REVIEW</Link>
          </Item>
        </Group>
        <Link to="/">
          <Logo />
        </Link>
        <Group>
          <Item>
            <Link to="/cart">CART</Link>
          </Item>
          <Item onClick={handleMyClick}>{isLoggedIn ? "MY" : "LOGIN"}</Item>
        </Group>
      </Content>
      {menuIsVisible && (
        <>
          <Backdrop onClick={() => setMenuIsVisible(false)} />
          <Menu />
        </>
      )}
      {myMenuIsVisible && (
        <>
          <Backdrop onClick={() => setMyMenuIsVisible(false)} />
          <MyMenu />
        </>
      )}
    </Container>
  );
}
