import { get, post } from "@/libs/api";

/**
 @description 상품 주문 추가
 */
export const createOrderProduct = async (orderInfo: OrderInfo) => {
  return await post("order/product", orderInfo);
};

/**
 @description 사용자 주문 내역 전체 조회
 * @returns 주문 리스트
 */
export const getOrderList = async (key: number | null, size: number) => {
  const params = { key, size };
  return await get<CursorPage<OrderListInfo>>("order/get/all", { params });
};
