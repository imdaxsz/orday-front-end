import { post } from "@/libs/api";

/**
 @description 상품 주문 추가
 */
export const createOrderProduct = async (orderInfo: OrderInfo) => {
  return await post("order/product", orderInfo);
};
