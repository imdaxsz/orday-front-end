import { useLocation, useSearchParams } from "react-router-dom";

import RightIcon from "@/assets/chevron_right.svg?react";
import { menuData, CATEGORY } from "@/constants";

import { CategoryNavBox, CategoryItem } from "./style";

interface Props {
  brand?: boolean;
  categories?: BrandCategory[];
}

interface BrandCategoryInfo extends Omit<Category, "subCategory"> {
  subId?: number;
}

export default function CategoryNav({ brand, categories }: Props) {
  const { pathname, search } = useLocation();
  const path = pathname + search;

  const [searchParams] = useSearchParams();
  const currentCategory = Number(searchParams.get("category"));
  const currentSubCategory = Number(searchParams.get("sub-category"));

  const brandCategoryIds = [
    ...new Set(categories?.map((item) => item.categoryId)),
  ];

  const brandCategories: BrandCategoryInfo[] = [];
  brandCategoryIds.forEach((item) => {
    const ca = CATEGORY.find((c) => c.id === item); // 상위 카테고리
    ca && brandCategories.push({ id: ca.id, name: ca.name });
    const sub = categories
      ?.filter((f) => f.categoryId === item && f.subCategoryId !== -1)
      ?.map((s) => s.subCategoryId);
    if (ca && ca.subCategory && sub) {
      // 하위 카테고리
      const subCategories = ca.subCategory
        .filter((c) => sub.includes(c.id))
        .map((item) => ({ id: ca.id, name: item.name, subId: item.id }));
      subCategories && brandCategories.push(...subCategories);
    }
  });

  const foundItem = menuData.find((item) => {
    if (item.subItem) {
      return item.url === path
        ? item.url === path
        : item.subItem.some((subItem) => subItem.url === path);
    } else return item.url === path;
  });

  // 브랜드 상세페이지 카테고리 nav
  if (brand && categories)
    return (
      <CategoryNavBox>
        브랜드
        <RightIcon />
        <CategoryItem $current={Boolean(!currentCategory)} to="">
          전체
        </CategoryItem>
        {brandCategories.map((a, i) => (
          <div key={i}>
            <CategoryItem
              $current={
                a.id === currentCategory &&
                (a.subId ?? 0) === currentSubCategory
              }
              to={
                !a.subId
                  ? `?category=${a.id}`
                  : `?category=${a.id}&sub-category=${a.subId}`
              }
            >
              {a.name}
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
      <CategoryItem $current={foundItem.url === path} to={foundItem.url}>
        전체
      </CategoryItem>
      {foundItem.subItem?.map((data, idx) => (
        <CategoryItem key={idx} $current={data.url === path} to={data.url}>
          {data.label}
        </CategoryItem>
      ))}
    </CategoryNavBox>
  );
}
