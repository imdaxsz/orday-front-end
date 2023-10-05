import { IMenuItem } from "@/components/Menu/MenuItem";

export const menuData: IMenuItem[] = [
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
    url: "/brands",
  },
];
