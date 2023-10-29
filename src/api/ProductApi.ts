import { get } from "@/libs/api";

/**
 @description 브랜드 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getBrandProducts = async (
  brandId: number,
  categoryId: number,
  sortId: number,
  key: number | null,
) => {
  const params = key
    ? { key, size: 12, brandId, categoryId }
    : { size: 12, brandId, categoryId };
  return get<ProductListDto>(`product/get/brand/${sortId}`, {
    params,
  });
};

/**
 * @description 테스트용 브랜드 상품 리스트 조회 api
 */
const productMockData: Product = {
  id: 1,
  imageUrl:
    "https://image.msscdn.net/images/goods_img/20230323/3174776/3174776_16795542598248_big.png",
  brandInfo: { id: 1, name: "플라스틱 아크" },
  name: "팻볼 [FB-F1-05]",
  score: 1,
  description: "상품 설명",
  price: 74000,
  liked: false,
};
const productsMockData: Product[] = Array(12).fill(productMockData);

export const testProductsApi = async (
  brandId: number,
  categoryId: number,
  sortId: number,
  key: number | null,
) => {
  const params = key
    ? { key, size: 12, brandId, categoryId }
    : { size: 12, brandId, categoryId };
  return {
    cursorRequest: { key: 1, size: 12 },
    body: productsMockData,
  };
};
