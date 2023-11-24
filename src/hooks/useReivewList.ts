import { useState, useEffect, useCallback } from "react";

import { getWritableReivews, getWrittenReivews } from "@/api/ReviewApi";
export default function useReviewList(status: number) {
  const [reviews, setReviews] = useState<WritableReview[] | WrittenReview[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    let data: WritableReview[] | WrittenReview[] = [];
    setIsLoading(true);
    try {
      if (status === 1) data = await getWritableReivews();
      else data = await getWrittenReivews();
      setReviews(data);
    } catch (error) {
      console.log("Error fetching review list: ", error);
    }
    setIsLoading(false);
  }, [status]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, reviews };
}
