import { get, post, put } from "@/libs/api";

/**
 @description 새로운 리뷰 작성 요청
  * @returns 생성된 review id
 */
export const createReview = async (
  review: CreateReviewDto,
): Promise<number> => {
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
  const dto = image ? { image } : {};
  return await put(`product/review/update/${reviewId}/image`, dto);
};

// 리뷰 목록 조회 테스트용 api
const ProductMockData = {
  productId: 1,
  imageUrl: "",
  name: "파타고니아 레트로 X 양털 후리스 뽀글이 플리스 자켓 파타고니아 레트로 X 양털 후리스 뽀글이 플리스 자켓",
  size: "L",
  color: "BROWN",
};

export const getMockWritableReviews = async () => {
  const reviewMockData1 = {
    ...ProductMockData,
    orderId: 1,
  };
  const reviewMockData2 = {
    ...ProductMockData,
    orderId: 2,
  };
  return [reviewMockData2, reviewMockData1];
};

export const getMockWrittenReviews = async () => {
  const reviewMockData3 = {
    ...ProductMockData,
    reviewId: 1,
    orderId: 1000000000,
    content: "리뷰1입니다. 리뷰1입니다.",
    rating: 4,
    createdAt: "2023-10-24T01:12:12.887305",
  };
  const reviewMockData4 = {
    ...ProductMockData,
    reviewId: 2,
    orderId: 2000000000,
    content:
      "리뷰2입니다. 리뷰2입니다. 리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리",
    rating: 5,
    createdAt: "2023-10-27T01:12:12.887305",
  };
  return [reviewMockData4, reviewMockData3];
};

// 수정할 리뷰 데이터 조회 test api
export const testGetEditReviewData = async (id: number) => {
  const dto: ReviewDetail = {
    reviewId: id,
    productId: 1000,
    content: "정말 좋아요",
    rating: 5,
    name: "자켓",
    color: "BLACK",
    size: "L",
    productImageUrl:
      "https://image.msscdn.net/images/goods_img/20220203/2338457/2338457_1_500.jpg",
    reviewImageUrl:
      "https://image.msscdn.net/images/goods_img/20230913/3555856/3555856_16945764091440_big.jpg",
  };

  return dto;
};

export const testGetReviewProductInfo = async (id: number) => {
  const dto = {
    id: id,
    name: "모자 모자 모자",
    imageUrl:
      "https://image.msscdn.net/images/goods_img/20220203/2338457/2338457_1_500.jpg",
    color: "RED",
    size: "L",
    price: 15000,
    amount: 1,
    discountPrice: 0,
  };
  return [dto];
};
