import { get, post } from "@/libs/api";

/**
 @description 리뷰 작성에 사용되는 상품 id를 통한 상품 조회
 * @returns 상품 리스트
 */
export const getProductsInfo = async (idList: number[]) => {
  return get<CartItem[]>("product/get", {
    params: { productIds: idList.join(",") },
  });
};

/**
 @description 카테고리 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getCategoryProducts = async (
  paramsInfo: ProductListRequestParams,
) => {
  const params = { size: 12, ...paramsInfo };
  return await get<ProductListDto>("product/get/category", {
    params,
  });
};

/**
 @description NEW, SALE 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getNewOrSaleProducts = async (
  paramsInfo: ProductListRequestParams,
  pathname: string,
) => {
  const params = { size: 12, ...paramsInfo };
  return await get<ProductListDto>(`product/get/${pathname}`, {
    params,
  });
};

/**
 @description BEST 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getBestAllProducts = async () => {
  return await get<Product[]>("product/get/best/all");
};

/**
 @description 카테고리별 BEST 상품 3개 조회 요청
 * @returns 상품 리스트
 */
export const getBestCategoryProducts = async (
  categoryId: number,
  subCategoryId: number,
) => {
  const params = { categoryId, subCategoryId };
  return await get<Product[]>("product/get/best", {
    params,
  });
};

/**
 @description 관심 상품 조회 요청
 * @returns 상품 리스트
 */
export const getLikedProducts = async (key: number | null) => {
  const params = { key, size: 12 };
  return await get<ProductListDto>("product/like/get/all", {
    params,
  });
};

/**
 @description 관심 상품 추가 또는 삭제 요청
 */
export const toggleLikeProducts = async (productId: number) => {
  return await post(`product/like/${productId}`);
};

/**
 @description 브랜드 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getBrandProducts = async (
  paramsInfo: ProductListRequestParams,
) => {
  const { key, sortId, brandId, categoryId, subCategoryId } = paramsInfo;

  let url = "product/get/brand";
  const params: ProductListRequestParams = { key, size: 12, sortId, brandId };
  if (categoryId !== 0) {
    params.categoryId = categoryId;
    params.subCategoryId = subCategoryId;
    url = url + "/category";
  }
  return get<ProductListDto>(url, {
    params,
  });
};
