import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuItem, { IMenuItem } from "./MenuItem";

const Container = styled.div`
  width: 400px;
  height: 750px;
  position: absolute;
  z-index: 300;
  top: 70px;
  left: 0;
  padding: 35px 25px 35px 30px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid 1px #eee;
  border-top: none;
`;

const data: IMenuItem[] = [
  {
    label: "NEW",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "BEST",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "SALE",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "의류",
    subItem: [
      { label: "전체", url: "/" },
      { label: "상의", url: "/" },
      { label: "바지/스커트", url: "/" },
      { label: "아우터", url: "/" },
      { label: "홈웨어", url: "/" },
      { label: "언더웨어", url: "/" },
    ],
  },
  {
    label: "소품",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "잡화",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "홈리빙",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "뷰티",
    subItem: [{ label: "전체", url: "/" }],
  },
  {
    label: "브랜드",
    subItem: [{ label: "전체", url: "/" }],
  },
];

const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  padding: 10px;
  margin-top: 77px;

  a {
    color: #888;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export default function Menu() {
  return (
    <Container>
      {data.map((menu, i) => (
        <MenuItem key={i} label={menu.label} subItem={menu.subItem} />
      ))}
      <Auth>
        <Link to="login">로그인</Link>
        <RxDividerVertical size={12} color="#888" />
        <Link to="join">회원가입</Link>
      </Auth>
    </Container>
  );
}
