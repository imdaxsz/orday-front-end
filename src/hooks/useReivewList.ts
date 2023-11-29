import { useState, useEffect, useCallback } from "react";

import { getWritableReviews, getWrittenReviews } from "@/api/ReviewApi";
export default function useReviewList(status: number) {
  const [reviews, setReviews] = useState<WritableReview[] | WrittenReview[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    let data: WritableReview[] | WrittenReview[] = [];
    setIsLoading(true);
    try {
      if (status === 1) data = await getWritableReviews();
      else data = await getWrittenReviews();
      setReviews(data);
    } catch (error) {
      console.log("Error fetching review list: ", error);
    }
    setIsLoading(false);
  }, [status]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, reviews, fetchData };
}
