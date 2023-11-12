import { useCallback, useEffect, useState } from "react";

import { getProductReviews, getReviewStatics } from "@/api/ReviewApi";

const INIT_STATICS: ReviewStatics = {
  totalCount: 0,
  averageRating: 0,
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

  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const fetchStatics = useCallback(async () => {
    try {
      const data = await getReviewStatics(productId);
      setStatics(data);
    } catch (error) {
      console.log("Error fetching review statics: ", error);
    }
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const params = {
        key: nextKey,
        productId,
        size: 12,
        sortId: selectedOption.id,
      };
      const {
        cursorRequest: { key },
        body,
      } = await getProductReviews(params);
      setNextKey(key);
      setReviews(body);
    } catch (error) {
      console.log("Error fetching product reviews: ", error);
    }
  };

  useEffect(() => {
    fetchStatics();
  }, [fetchStatics]);

  return { statics, selectedOption, setSelectedOption };
}
