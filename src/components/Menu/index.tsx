import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";

import { menuData } from "@/constants";

import MenuItem from "./MenuItem";
import { Auth, Container } from "./style";

export default function Menu() {
  return (
    <Container>
      {menuData.map((menu, i) => (
        <MenuItem
          key={i}
          label={menu.label}
          url={menu.url}
          subItem={menu.subItem}
        />
      ))}
      <Auth>
        <Link to="login">로그인</Link>
        <RxDividerVertical size={12} color="#888" />
        <Link to="join">회원가입</Link>
      </Auth>
    </Container>
  );
}
