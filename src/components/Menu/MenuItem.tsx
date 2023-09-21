import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DropdownIcon from "@/components/Icon/DropdownIcon";
import DropupIcon from "@/components/Icon/DropupIcon";

interface MenuProps {
  isVisible: boolean;
}

const Container = styled.div<MenuProps>`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  overflow: ${({ isVisible = false }) => (isVisible ? "visible" : "hidden")};
`;

const Item = styled.div`
  padding: 8px 0 8px 8px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #444;
  font-size: 16px;
  font-weight: 400;
`;

const SubMenu = styled.div<MenuProps>`
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
    color: #6c6c6c;
    font-size: 14px;
    font-weight: 300;
    line-height: 120%;
  }
`;

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
