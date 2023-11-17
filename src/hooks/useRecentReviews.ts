import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { getRecentReviews } from "@/api/ReviewApi";

export default function useRecentReviews() {
  const [reviews, setReviews] = useState<RecentReview[]>([]);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const leftContents = reviews.filter((_, index) => index % 2 === 0);
  const rightContents = reviews.filter((_, index) => index % 2 === 1);

  const [ref, inView] = useInView();

  const fetchData = async () => {
    try {
      const {
        cursorRequest: { key },
        body,
      } = await getRecentReviews({ key: nextKey, size: 6 });
      setReviews((prev) => [...prev, ...body]);
      setNextKey(key);
    } catch (error) {
      console.log("Error fetching recent reviews: ", error);
    }
  };

  useEffect(() => {
    if (inView && nextKey !== -1) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return { leftContents, rightContents, ref };
}
