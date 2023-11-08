import { get } from "@/libs/api";

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
  const params = { ...paramsInfo, size: 12 };
  return await get<ProductListDto>("product/get/category", {
    params,
  });
};

/**
 @description NEW, SALE 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getProducts = async (
  paramsInfo: ProductListRequestParams,
  pathname: string,
) => {
  const params = { ...paramsInfo, size: 12 };
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
 @description 브랜드 상품 목록 조회 요청
 * @returns 상품 리스트
 */
export const getBrandProducts = async (
  brandId: number,
  categoryId: number,
  subCategoryId: number,
  sortId: number,
  key: number | null,
) => {
  let url = "product/get/brand";
  const params: ProductListRequestParams = key
    ? { key, size: 12, sortId, brandId }
    : { size: 12, sortId, brandId };
  if (categoryId !== 0) {
    params.categoryId = categoryId;
    params.subCategoryId = subCategoryId;
    url = url + "/category";
  }
  return get<ProductListDto>(url, {
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
const productMockData2: Product = {
  id: 2,
  imageUrl:
    "https://image.msscdn.net/images/goods_img/20230913/3555856/3555856_16945764091440_big.jpg",
  brandInfo: { id: 2, name: "브랜드2" },
  name: "상품2",
  score: 1,
  description: "상품 설명",
  price: 30000,
  liked: true,
};
const productsMockData2: Product[] = Array(12).fill(productMockData2);

export const testProductsApi = async (
  brandId: number,
  categoryId: number,
  subCategoryId: number,
  sortId: number,
  key: number | null,
) => {
  let url = "product/get/brand";
  const params: ProductListRequestParams = key
    ? { key, size: 12, sortId, brandId }
    : { size: 12, sortId, brandId };
  if (categoryId !== 0) {
    params.categoryId = categoryId;
    params.subCategoryId = subCategoryId;
    url = url + "/category";
  }
  console.log(url);
  if (categoryId === 3 || sortId === 1)
    return {
      cursorRequest: { key: 1, size: 12 },
      body: productsMockData2,
    };
  return {
    cursorRequest: { key: 1, size: 12 },
    body: productsMockData,
  };
};

// const mockdata: Product[] = Array.from({ length: 3 }, (_, index) => ({
//   id: index + 1,
//   name: "상품명",
//   price: 10000,
//   score: 0,
//   description: "",
//   imageUrl: "",
//   brandInfo: { name: "브랜드명", id: 1 },
//   liked: false,
// }));
