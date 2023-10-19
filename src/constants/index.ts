import { IMenuItem } from "@/components/Menu/MenuItem";

export const menuData: IMenuItem[] = [
  {
    label: "NEW",
    subItem: [
      { label: "전체", url: "/new" },
      { label: "의류", url: "/new?category=1" },
      { label: "소품", url: "/new?category=2" },
      { label: "잡화", url: "/new?category=3" },
      { label: "홈리빙", url: "/new?category=4" },
      { label: "뷰티", url: "/new?category=5" },
    ],
  },
  {
    label: "BEST",
    subItem: [
      { label: "전체", url: "/best" },
      { label: "의류", url: "/best?category=1" },
      { label: "소품", url: "/best?category=2" },
      { label: "잡화", url: "/best?category=3" },
      { label: "홈리빙", url: "/best?category=4" },
      { label: "뷰티", url: "/best?category=5" },
    ],
  },
  {
    label: "SALE",
    subItem: [
      { label: "전체", url: "/sale" },
      { label: "의류", url: "/sale?category=1" },
      { label: "소품", url: "/sale?category=2" },
      { label: "잡화", url: "/sale?category=3" },
      { label: "홈리빙", url: "/sale?category=4" },
      { label: "뷰티", url: "/sale?category=5" },
    ],
  },
  {
    label: "의류",
    subItem: [
      { label: "전체", url: "/products?category=1" },
      { label: "상의", url: "/products?category=6" },
      { label: "바지/스커트", url: "/products?category=7" },
      { label: "아우터", url: "/products?category=8" },
      { label: "홈웨어", url: "/products?category=9" },
      { label: "언더웨어", url: "/products?category=10" },
    ],
  },
  {
    label: "소품",
    url: "/products?category=2",
  },
  {
    label: "잡화",
    url: "/products?category=3",
  },
  {
    label: "홈리빙",
    url: "/products?category=4",
  },
  {
    label: "뷰티",
    url: "/products?category=5",
  },
  {
    label: "브랜드",
    url: "/brands",
  },
];

const currentYear = new Date().getFullYear();

export const DATE = {
  year: Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => currentYear - i,
  ),
  month: Array.from({ length: 12 }, (_, i) => i + 1),
  day: Array.from({ length: 31 }, (_, i) => i + 1),
};
