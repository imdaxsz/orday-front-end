import { useState } from "react";
import { Link } from "react-router-dom";

import DropdownIcon from "@/assets/arrow_drop_down.svg?react";
import DropupIcon from "@/assets/arrow_drop_up.svg?react";

import { Container, Item, SubMenu } from "./MenuItem.style";

interface ISubItem {
  label: string;
  url: string;
}

export interface IMenuItem {
  label: string;
  subItem: ISubItem[];
}

export default function MenuItem({ label, subItem }: IMenuItem) {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <Container
      isVisible={isVisible}
      onClick={() => setIsvisible((prev) => !prev)}
    >
      <Item>
        {label}
        {isVisible ? <DropupIcon /> : <DropdownIcon />}
      </Item>
      <SubMenu isVisible={isVisible}>
        {subItem.map((item, i) => (
          <Link key={i} to={item.url}>
            {item.label}
          </Link>
        ))}
      </SubMenu>
    </Container>
  );
}
