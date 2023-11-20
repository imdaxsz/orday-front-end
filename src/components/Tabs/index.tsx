import { ComponentProps, useState } from "react";
import { Link } from "react-router-dom";

import { StrictPropsWithChildren } from "@/types";

import { Container, TabContainer } from "./style";

export interface TabStyleProps {
  $activeId: number;
}

export interface TabProps extends ComponentProps<"li"> {
  value: number;
  label: string;
  url?: string;
}

interface TabsProps extends ComponentProps<"ul"> {
  defaultActiveId?: number;
}

export default function Tabs({
  defaultActiveId = 1,
  children,
  ...props
}: StrictPropsWithChildren<TabsProps>) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveId);

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const clickedItem = e.target as HTMLElement;
    if (clickedItem.tagName === "A")
      setActiveIndex(Number(clickedItem.parentElement?.id));
    else if (clickedItem.tagName === "LI")
      setActiveIndex(Number(clickedItem.getAttribute("id")));
  };

  return (
    <Container onClick={handleClick} $activeId={activeIndex} {...props}>
      {children}
    </Container>
  );
}

export function Tab({ value, label, url, onClick }: TabProps) {
  return (
    <TabContainer id={value.toString()} onClick={onClick}>
      <Link to={url ? url : "#"}>{label}</Link>
    </TabContainer>
  );
}
