import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  getProductPhotoReviews,
  getProductReviews,
  getReviewStatics,
} from "@/api/ReviewApi";

const INIT_STATICS: ReviewStatics = {
  totalCount: 0,
  averageRating: 0,
  photoReviewCount: 0,
  proportion: [0, 0, 0, 0, 0],
};

const initialOption = {
  id: 0,
  name: "최신순",
  value: "new",
};

export default function useProductReviews(productId: number) {
  const [statics, setStatics] = useState<ReviewStatics>(INIT_STATICS);
  const [reviews, setReviews] = useState<ReviewInfo[]>([]);
  const [photoReviews, setPhotoReviews] = useState<ReviewInfo[]>([]);
  const [isPhotoDetail, setIsPhotoDetail] = useState(false);

  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [nextKey, setNextKey] = useState<number | null>(null);
  const [nextPhotoKey, setNextPhotoKey] = useState<number | null>(null);

  const [ref, inView] = useInView();

  const toggleIsPhotoDetail = () => {
    setIsPhotoDetail((prev) => !prev);
  };

  // 리뷰 통계 조회
  const fetchStatics = useCallback(async () => {
    try {
      const data = await getReviewStatics(productId);
      setStatics(data);
    } catch (error) {
      console.log("Error fetching review statics: ", error);
    }
  }, [productId]);

  // 리뷰 목록 조회
  const fetchReviews = useCallback(async () => {
    try {
      const params = {
        key: nextKey,
        productId,
        size: 6,
        sortId: selectedOption.id,
      };
      const {
        cursorRequest: { key },
        body,
      } = await getProductReviews(params);
      setReviews((prev) => [...prev, ...body]);
      setNextKey(key);
    } catch (error) {
      console.log("Error fetching product reviews: ", error);
    }
  }, [nextKey, productId, selectedOption.id]);

  // 포토 리뷰 조회
  const fetchPhotoReviews = useCallback(async () => {
    try {
      const params = {
        key: nextPhotoKey,
        productId,
        size: 9,
      };
      const {
        cursorRequest: { key },
        body,
      } = await getProductPhotoReviews(params);
      setPhotoReviews((prev) => [...prev, ...body]);
      setNextPhotoKey(key);
    } catch (error) {
      console.log("Error fetching product photo reviews: ", error);
    }
  }, [nextPhotoKey, productId]);

  useEffect(() => {
    fetchStatics();
  }, [fetchStatics]);

  // 최초 렌더링 시 리뷰/포토리뷰 조회
  useEffect(() => {
    fetchPhotoReviews();
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 무한스크롤 리뷰/포토리뷰 목록 조회
  useEffect(() => {
    // 전체 리뷰 목록 조회
    if (inView && nextKey !== -1 && !isPhotoDetail) fetchReviews();
    // 포토 리뷰 목록 조회
    if (inView && nextPhotoKey !== -1 && isPhotoDetail) fetchPhotoReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isPhotoDetail]);

  // 정렬 옵션이 바뀌면 key, 리뷰 목록 초기화
  useEffect(() => {
    setReviews([]);
    setNextKey(null);
  }, [selectedOption.id]);

  return {
    ref,
    statics,
    reviews,
    photoReviews,
    selectedOption,
    setSelectedOption,
    isPhotoDetail,
    toggleIsPhotoDetail,
  };
}
