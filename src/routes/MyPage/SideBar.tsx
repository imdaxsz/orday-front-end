import styled from "styled-components";

interface SidebarItems {
  [key: string]: string[];
  shopping: string[];
  membership: string[];
  activity: string[];
}

const sidebarItems: SidebarItems = {
  shopping: [
    "주문내역 조회",
    "취소/교환/환불 내역",
    "관심 상품",
    "관심 게시글",
    "관심 브랜드",
  ],
  membership: ["회원정보 수정", "배송지 관리", "로그아웃"],
  activity: ["재입고알림", "리뷰작성/수정", "1:1 알림"],
};

export default function SideBarComponent() {
  return (
    <>
      {Object.keys(sidebarItems).map((sidebarKey, index) => (
        <SideBar key={index}>
          <SideBarInfo>
            {sidebarKey === "shopping"
              ? "쇼핑 정보"
              : sidebarKey === "membership"
              ? "회원 정보"
              : "활동 정보"}
          </SideBarInfo>
          {sidebarItems[sidebarKey].map((item, subIndex) => (
            <ShoppingText key={subIndex}>{item}</ShoppingText>
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

const ShoppingText = styled.div`
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
  cursor: pointer;
`;
