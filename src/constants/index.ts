import { IMenuItem } from "@/components/Menu/MenuItem";

export const CATEGORY = [
  "의류",
  "소품",
  "잡화",
  "홈리빙",
  "뷰티",
  "상의",
  "바지/스커트",
  "아우터",
  "홈웨어",
  "언더웨어",
];

export const menuData: IMenuItem[] = [
  {
    label: "NEW",
    url: "/new",
  },
  {
    label: "BEST",
    url: "/best",
  },
  {
    label: "SALE",
    url: "/sale",
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

export const USER_INFO_FORM_ERROR_MESSAGE = {
  email: ["", "이메일을 입력해 주세요.", "이메일 형식이 올바르지 않습니다."],
  password: [
    "",
    "비밀번호를 입력해 주세요.",
    "비밀번호는 8~16자 내로 영어, 숫자, 특수문자~!@#$%^&*를 반드시 포함해 주세요.",
  ],
  phone: ["", "연락처를 입력해 주세요.", "연락처 형식이 올바르지 않습니다."],
};

export const DEFAULT_USER_INFO_DATA: UserInfoForm = {
  email: "",
  password: "",
  confirmPw: "",
  name: "",
  phoneNumber: "",
  birthDate: {
    year: "",
    month: "",
    day: "",
  },
  addressInfo: {
    postcode: "",
    address: "",
    addressDetail: "",
  },
};
