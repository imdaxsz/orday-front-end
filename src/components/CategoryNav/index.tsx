import { useLocation } from "react-router-dom";

import RightIcon from "@/assets/chevron_right.svg?react";
import { menuData } from "@/constants";

import { CategoryNavBox, CategoryItem } from "./style";

export default function CategoryNav() {
  const { pathname, search } = useLocation();
  const path = pathname + search;

  const foundItem = menuData.find((item) => {
    if (item.subItem)
      return item.subItem.some((subItem) => subItem.url === path);
    else return item.url === path;
  });

  if (!foundItem) return null;

  return (
    <CategoryNavBox>
      {foundItem.label}
      <RightIcon />
      {foundItem.subItem?.map((data, idx) => (
        <div key={idx}>
          <CategoryItem $current={data.url === path} to={data.url}>
            {data.label}
          </CategoryItem>
        </div>
      ))}
      {!foundItem.subItem && foundItem.url && (
        <CategoryItem $current to={foundItem.url}>
          전체
        </CategoryItem>
      )}
    </CategoryNavBox>
  );
}
