import { post } from "@/libs/api";

/**
 @description 상품 주문 추가
 * @returns 브랜드 리스트
 */
export const createOrderProduct = async (orderInfo: OrderInfo) => {
  return await post("order/product", orderInfo);
};
