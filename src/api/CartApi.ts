import { get, put, post, del } from "@/libs/api";

/**
 @description 장바구니 상품 조회 요청
 * @returns 장바구니 리스트
 */
export const getCartList = async () => {
  return await get<CartItem[]>("cart/get/all");
};

/**
 @description 장바구니 상품 추가
 * @returns 장바구니 리스트
 */
export const addCartItems = async (productInfo: ProductInfo[]) => {
  return await post<CartItem[]>("cart/product/add", productInfo);
};

/**
 @description 장바구니 상품 개수 감소 요청
 * @returns productId
 */
export const decreaseCartProduct = async (productId: number) => {
  return await put<number>(`cart/product/minus/${productId}`);
};
/**
 @description 장바구니 상품 개수 증가 요청
 * @returns productId
 */
export const increaseCartProduct = async (productId: number) => {
  return await put<number>(`cart/product/plus/${productId}`);
};

/**
 @description 장바구니 상품 삭제
 * @returns productIds
 */
export const deleteCartItems = async (productIds: number[]) => {
  return await del<number[]>("cart/product/delete", {
    params: { productIds: productIds.join(",") },
  });
};
