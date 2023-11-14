import { useState, useEffect, useCallback } from "react";

import { getWritableReivews, getWrittenReivews } from "@/api/ReviewApi";
export default function useReviewList(status: number) {
  const [reviews, setReviews] = useState<WritableReview[] | WrittenReview[]>(
    [],
  );

  const fetchData = useCallback(async () => {
    let data: WritableReview[] | WrittenReview[] = [];
    try {
      if (status === 1) data = await getWritableReivews();
      else data = await getWrittenReivews();
      setReviews(data);
    } catch (error) {
      console.log("Error fetching review list: ", error);
    }
  }, [status]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { reviews };
}
