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

declare interface BaseUserInfo {
  email: string;
  name: string;
  phoneNumber: string;
  birthDate: BirthDate;
  addressInfo: Address;
}

declare interface UserInfoForm extends BaseUserInfo {
  password: string;
  confirmPassword: string;
}

/**
 * @description 서버에서 받아온 회원 정보 타입
 */
declare interface UserInfoDto extends BaseUserInfo {
  id: number;
  socialType: string;
  infoSet: boolean;
}

declare interface UserInfoFormError {
  name: boolean;
  password: number;
  confirmPassword: boolean;
  phoneNumber: number;
  birthDate: boolean;
  address: boolean;
}

declare interface JoinFormError extends UserInfoFormError {
  email: number;
  terms: boolean;
}

declare interface Category {
  name: string;
  id: number;
  subCategory?: Category[];
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

declare interface ClothesInfo {
  id: number;
  color: string;
  size: string;
}

declare interface ProductOptionInfo extends ClothesInfo {
  amount: number;
}

declare interface ColorOptionObject {
  [key: string]: { id: number; size: string }[];
}

declare interface ProductDetail extends Omit<Product, "id" | "score"> {
  clothesInfoList: ClothesInfo[];
  discountPrice: number;
}

declare interface BrandCategory {
  categoryId: number;
  subCategoryId: number;
}

declare interface Brand {
  id: number;
  name: string;
  categoryIds: BrandCategory[];
  logoUrl: string;
  imageUrl: string;
  liked: boolean;
}

declare type BrandListDto = Pick<Brand, "id" | "name" | "imageUrl">[];

/**
 * @description 상품 목록 조회 요청 params
 */
declare interface ProductListRequestParams {
  brandId?: number;
  categoryId?: number;
  subCategoryId?: number;
  sortId: number;
  key?: number | null;
  size?: number;
}

/**
 * @description 좋아요 기능 적용 가능 대상
 */
declare type LikeTarget = "product" | "brand" | "review";

declare interface CursorPage<T> {
  cursorRequest: {
    key: number;
    size: number;
  };
  body: T[];
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

declare type ReviewStatus = "WRITABLE" | "WRITTEN";

interface ReviewProductBaseInfo {
  productId: number;
  name: string;
  color: string;
  size: string;
}

declare interface WritableReview extends ReviewProductBaseInfo {
  orderId: number;
  imageUrl: string; // 상품 이미지 (후기 이미지 X)
}

declare interface WrittenReview extends WritableReview {
  reviewId: number;
  content: string;
  rating: number;
  createdAt: string;
}

declare interface ReviewDetail extends ReviewProductBaseInfo {
  reviewId: number;
  content: string;
  rating: number;
  productImageUrl: string;
  reviewImageUrl: string;
}

declare interface ReviewEditContent {
  content?: string;
  rating?: number;
}

declare interface ReviewForm {
  content: string;
  rating: number;
  file: File | null;
  fileUrl: string;
}

declare interface ReviewStatics {
  totalCount: number;
  photoReviewCount: number;
  averageRating: number;
  proportion: number[];
}

declare type ReviewInfo = Omit<
  WrittenReview,
  "imageUrl" | "name" | "productId" | "orderId"
> & {
  userName: string;
  reviewImageUrl: string;
  reviewLikeCount: number;
  liked: boolean;
};
