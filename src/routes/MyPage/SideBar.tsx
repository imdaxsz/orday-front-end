import { Link } from "react-router-dom";
import styled from "styled-components";

interface Item {
  title: string;
  url: string;
}

interface Sidebar {
  [key: string]: Item[];
  shopping: Item[];
  membership: Item[];
  activity: Item[];
}

const sidebar: Sidebar = {
  shopping: [
    { title: "주문내역 조회", url: "/myPage/order" },
    { title: "관심 상품", url: "/like/products" },
    { title: "관심 브랜드", url: "/like/brands" },
  ],
  membership: [
    { title: "회원정보 수정", url: "/myPage/editProfile" },
    { title: "로그아웃", url: "/logout" },
  ],
  activity: [{ title: "상품 리뷰", url: "/myPage/reviews" }],
};

export default function SideBarComponent() {
  return (
    <>
      {Object.keys(sidebar).map((sidebarKey, index) => (
        <SideBar key={index}>
          <SideBarInfo>
            {sidebarKey === "shopping"
              ? "쇼핑 정보"
              : sidebarKey === "membership"
              ? "회원 정보"
              : "활동 정보"}
          </SideBarInfo>
          {sidebar[sidebarKey].map((item, subIndex) => (
            <SidebarItem key={subIndex} to={item.url}>
              {item.title}
            </SidebarItem>
          ))}
        </SideBar>
      ))}
    </>
  );
}

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SideBarInfo = styled.div`
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const SidebarItem = styled(Link)`
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
  cursor: pointer;
`;
