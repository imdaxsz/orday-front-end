import { get, post, put } from "@/libs/api";

/**
 @description 새로운 리뷰 작성 요청
  * @returns 생성된 review id
 */
export const createReview = async (review: FormData) => {
  return await post<number>("product/review/add", review, {
    headers: { "Content-Type": "multipart/form-data" },
  });
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

/**
 @description 리뷰 수정을 위한 특정 리뷰 상세 조회
 * @returns 리뷰 상세 정보
 */
export const getReviewDetail = async (reviewId: number) => {
  return await get<ReviewDetail>("product/review/detail/list", {
    params: { reviewId },
  });
};

/**
 @description 리뷰 수정 (리뷰 내용, 별점)
 */

export const updateReview = async (
  reviewId: number,
  contents: ReviewEditContent,
): Promise<void> => {
  return await put(`product/review/update/${reviewId}`, contents);
};

/**
 @description 리뷰 수정 (첨부 이미지)
 */
export const updateReviewImage = async (
  reviewId: number,
  image?: File,
): Promise<void> => {
  const formData = new FormData();
  if (image) formData.append("image", image);
  return await put(`product/review/update/${reviewId}/image`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
