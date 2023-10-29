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

// 테스트용 api
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
    orderId: 1000000000,
    content: "리뷰1입니다. 리뷰1입니다.",
    rating: 4,
    createdAt: "2023-10-24",
  };
  const reviewMockData4 = {
    ...ProductMockData,
    orderId: 2000000000,
    content:
      "리뷰2입니다. 리뷰2입니다. 리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리",
    rating: 5,
    createdAt: "2023-10-26",
  };
  return [reviewMockData4, reviewMockData3];
};

// 수정을 위한 리뷰 정보 조회

// 리뷰 수정
