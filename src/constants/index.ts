import { IMenuItem } from "@/components/Menu/MenuItem";

export const CATEGORY: Category[] = [
  {
    id: 1,
    name: "의류",
    subCategory: [
      { id: 1, name: "상의" },
      { id: 2, name: "바지/스커트" },
      { id: 3, name: "아우터" },
      { id: 4, name: "홈웨어" },
      { id: 5, name: "언더웨어" },
    ],
  },
  { id: 2, name: "소품" },
  { id: 3, name: "잡화" },
  { id: 4, name: "홈리빙" },
  { id: 5, name: "뷰티" },
];

export const CategoryMenu: IMenuItem[] = CATEGORY.map((item) => {
  const menu: IMenuItem = {
    label: item.name,
    url: `/products?category=${item.id}`,
  };
  if (item.subCategory)
    menu.subItem = item.subCategory.map((subItem) => ({
      label: subItem.name,
      url: `/products?category=${item.id}&sub-category=${subItem.id}`,
    }));
  return menu;
});

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
  ...CategoryMenu,
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
  confirmPassword: "",
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

export const DEFAULT_ORDER_FORM_DATA: OrderForm = {
  name: "",
  phoneNumber: "",
  addressInfo: {
    postcode: "",
    address: "",
    addressDetail: "",
  },
  deliveryRequest: "",
  selectedMethod: null,
};

export const DELIVERY_OPTIONS = [
  "직접 입력",
  "빠른배송 바랍니다",
  "부재시 경비실에 맡겨주세요",
  "배송 전에 연락주세요",
];

export const RATING_LABEL = [
  "아주 좋아요",
  "맘에 들어요",
  "보통이에요",
  "그냥 그래요",
  "별로예요",
];

export const PRODUCT_DETAIL_INFO = [
  { id: 1, name: "상세정보", description: "" },
  { id: 2, name: "배송안내", description: "배송안내2" },
  { id: 3, name: "교환 및 반품안내", description: "교환 및 반품안내3" },
  { id: 4, name: "품질 보증 및 A/S", description: "품질 보증 및 A/S4" },
  { id: 5, name: "취급주의사항", description: "취급주의사항5" },
];
