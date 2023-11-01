declare interface Phone {
  first: string;
  second: string;
  third: string;
}

declare type PHONEPART = keyof Phone;

declare interface BirthDate {
  year: string;
  month: string;
  day: string;
}

declare interface Address {
  postcode: string;
  address: string;
  addressDetail: string;
}

declare interface UserInfoForm {
  email: string;
  password: string;
  confirmPw: string;
  name: string;
  phoneNumber: string;
  birthDate: BirthDate;
  addressInfo: Address;
}

declare interface UserInfoFormError {
  name: boolean;
  password: number;
  confirmPw: boolean;
  phoneNumber: number;
  birthDate: boolean;
  address: boolean;
}

declare interface JoinFormError extends UserInfoFormError {
  email: number;
  terms: boolean;
}

// 임시
declare interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  description: string;
  imageUrl: string;
  brandInfo: { id: number; name: string };
  liked: boolean;
}

declare interface Brand {
  id: number;
  name: string;
  categoryIds: number[];
  logoUrl: string;
  imageUrl: string;
  isLiked: boolean;
}

declare type BrandListDto = Pick<Brand, "id" | "name" | "imageUrl">[];

/**
 * @description 좋아요 기능 적용 가능 대상
 */
declare type LikeTarget = "product" | "brand" | "post";

declare interface ProductListDto {
  cursorRequest: {
    key: number;
    size: number;
  };
  body: Product[];
}

declare interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  color: string;
  size: string;
  price: number;
  amount: number;
  discountPrice: number;
}

declare type ProductInfo = Pick<CartItem, "id", "amount">;

declare interface CartProductInfo {
  data: ProductInfo;
}

declare interface OrderForm {
  name: string;
  phoneNumber: string;
  addressInfo: Address;
  deliveryRequest: string | null;
  selectedMethod: number | null;
}

declare interface OrderInfo extends OrderForm {
  productsInfo: ProductInfo[];
}
