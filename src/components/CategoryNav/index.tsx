import { useLocation } from "react-router-dom";

import RightIcon from "@/assets/chevron_right.svg?react";
import { CATEGORY, menuData } from "@/constants";

import { CategoryNavBox, CategoryItem } from "./style";

interface Props {
  brand?: boolean;
  categories?: number[];
}

export default function CategoryNav({ brand, categories }: Props) {
  const { pathname, search } = useLocation();
  const path = pathname + search;
  const currentCategory = search.split("=")[1];

  const foundItem = menuData.find((item) => {
    if (item.subItem)
      return item.subItem.some((subItem) => subItem.url === path);
    else return item.url === path;
  });

  // 브랜드 상세페이지 내 카테고리 nav
  if (brand && categories)
    return (
      <CategoryNavBox>
        브랜드
        <RightIcon />
        <CategoryItem $current={Boolean(!currentCategory)} to="">
          전체
        </CategoryItem>
        {categories.map((data, idx) => (
          <div key={idx}>
            <CategoryItem
              $current={data === Number(currentCategory)}
              to={`?category=${data}`}
            >
              {CATEGORY[data - 1]}
            </CategoryItem>
          </div>
        ))}
      </CategoryNavBox>
    );

  if (!foundItem) return null;

  // products 카테고리 nav
  return (
    <CategoryNavBox>
      {foundItem.label}
      <RightIcon />
      {foundItem.subItem?.map((data, idx) => (
        <CategoryItem key={idx} $current={data.url === path} to={data.url}>
          {data.label}
        </CategoryItem>
      ))}
      {!foundItem.subItem && foundItem.url && (
        <CategoryItem $current to={foundItem.url}>
          전체
        </CategoryItem>
      )}
    </CategoryNavBox>
  );
}
