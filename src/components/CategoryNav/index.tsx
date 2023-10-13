import { useLocation, useNavigate } from "react-router-dom";

import RightIcon from "@/assets/chevron_right.svg?react";
import { menuData } from "@/constants";

import { CategoryNavBox, CurCategory, CategoryList } from "./style";

export default function CategoryNav() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  // /new/:categoryId
  // /clothes/:categoryId

  const curCategory = menuData.find(
    (menu) => menu.subItem?.find((data) => data.url === location.pathname),
  );

  return (
    <CategoryNavBox>
      {curCategory?.label}
      <RightIcon />
      {curCategory?.subItem?.map((data, idx) => (
        <div key={idx}>
          {data.url === location.pathname ? (
            <CurCategory>{data.label}</CurCategory>
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
