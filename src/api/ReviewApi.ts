import { get, post } from "@/libs/api";

/**
 @description 새로운 리뷰 작성 요청
 */
export const createReview = async (review: CreateReviewDto): Promise<void> => {
  return await post("product/review/add", review);
};

/**
 @description 회원의 작성 가능한 리뷰 목록 조회
 * @returns WritableReview Array
 */
export const getWritableReivews = async () => {
  return await get<WritableReview[]>("product/review/writeable/list");
};

/**
 @description 회원의 작성한 리뷰 목록 조회
 * @returns WrittenReivew Array
 */
export const getWrittenReivews = async () => {
  return await get<WrittenReview[]>("product/review/written/list");
};

// 수정을 위한 리뷰 정보 조회

// 리뷰 수정
