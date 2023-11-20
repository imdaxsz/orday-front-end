import { get, post } from "@/libs/api";

/**
 @description 브랜드 목록 조회 요청
 * @returns 브랜드 리스트
 */
export const getBrandList = async (sortId: number) => {
  return await get<BrandListDto>("brand/get/all", { params: { sortId } });
};

/**
 @description 브랜드 상세 조회 요청
 * @returns Brand 타입 객체
 */
export const getBrandDetail = async (brandId: number) => {
  return await get<Brand>(`brand/get/${brandId}`);
};

/**
 @description 회원 관심 브랜드 조회 요청
 * @returns 브랜드 리스트
 */
export const getLikeBrands = async (sortId: number) => {
  return await get<BrandListDto>("brand/like/get", { params: { sortId } });
};

/**
 @description 관심 브랜드 추가 또는 삭제 요청
 */
export const toggleLikeBrand = async (brandId: number): Promise<void> => {
  return await post(`brand/like/${brandId}`);
};
