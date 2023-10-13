import { BiSolidPencil } from "react-icons/bi";
import { IoWaterSharp } from "react-icons/io5";

import {
  Info,
  InfoUser,
  Image,
  InfoText,
  InfoUp,
  InfoName,
  InfoGrade,
  InfoFollow,
  SideBar,
  SideBarInfo,
  ShoppingText,
  ImageIcon,
} from "./UserInfo.style";

interface SidebarItems {
  [key: string]: string[];
  shopping: string[];
  membership: string[];
  activity: string[];
}

const userData = {
  username: "홍길동 님",
  grade: "물방울 등급",
  followers: 0,
  following: 1,
};

const sidebarItems: SidebarItems = {
  shopping: ["주문내역 조회", "관심 상품", "관심 게시글", "관심 브랜드"],
  membership: ["회원정보 수정", "배송지 관리", "로그아웃"],
  activity: ["재입고알림", "리뷰작성/수정", "1:1 알림"],
};

export default function UserInfo() {
  return (
    <>
      <Info>
        <InfoUser>
          <Image>
            <ImageIcon>
              <BiSolidPencil />
            </ImageIcon>
          </Image>
          <InfoText>
            <InfoUp>
              <InfoName>{userData.username}</InfoName>
              <InfoGrade>
                {userData.grade} <IoWaterSharp />
              </InfoGrade>
            </InfoUp>
            <InfoFollow>
              팔로워 {userData.followers} | 팔로잉 {userData.following}
            </InfoFollow>
          </InfoText>
        </InfoUser>
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
      </Info>
    </>
  );
}
