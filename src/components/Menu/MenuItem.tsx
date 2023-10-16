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
  url?: string;
  subItem?: ISubItem[];
}

export default function MenuItem({ label, url, subItem }: IMenuItem) {
  const [isVisible, setIsvisible] = useState(false);
  if (!subItem)
    return (
      <Item>
        <Link to={url ? url : "#"}>{label}</Link>
      </Item>
    );
  return (
    <Container
      $isVisible={isVisible}
      onClick={() => subItem && setIsvisible((prev) => !prev)}
    >
      <Item>
        {label}
        {isVisible ? <DropupIcon /> : <DropdownIcon />}
      </Item>
      <SubMenu $isVisible={isVisible}>
        {subItem &&
          subItem.map((item, i) => (
            <Link key={i} to={item.url}>
              {item.label}
            </Link>
          ))}
      </SubMenu>
    </Container>
  );
}
