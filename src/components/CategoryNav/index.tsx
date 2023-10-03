import { useLocation, useNavigate } from "react-router-dom";

import RightIcon from "@/assets/chevron_right.svg?react";
import { menuData } from "@/constants";

import { CategoryNavBox, CurCategoryList, CategoryList } from "./style";

export default function CategoryNav() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  // /new/:categoryId
  // /clothes/:categoryId

  const curCategory = menuData.find((menu) =>
    menu.subItem.find((data) => data.url === location.pathname),
  );

  return (
    <CategoryNavBox>
      {curCategory?.label}
      <RightIcon />
      {curCategory?.subItem.map((data, idx) => (
        <div key={idx}>
          {data.url === location.pathname ? (
            <CurCategoryList>{data.label}</CurCategoryList>
          ) : (
            <CategoryList
              role="presentation"
              onClick={() => navigate(data.url)}
            >
              {data.label}
            </CategoryList>
          )}
        </div>
      ))}
    </CategoryNavBox>
  );
}
