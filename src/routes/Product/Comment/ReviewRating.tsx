import { useState, useEffect } from "react";
import { PiStarFill } from "react-icons/pi";

import { graphData } from "./graphdata";
import {
  ReviewRating,
  RateAveragePart,
  RateAverage,
  RateGraphPart,
  RateGraph,
  Graph,
} from "./ReviewRating.style";

export default function ReviewRatingComponent() {
  const [isAverage, setAverage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const calculateAverage = () => {
    let totalPoints = 0;
    let totalCount = 0;

    graphData.forEach((item) => {
      totalPoints += item.count * item.point;
      totalCount += item.count;
    });

    if (totalCount > 0) {
      const average = totalPoints / totalCount;
      setAverage(average);
    } else {
      setAverage(0);
    }
  };

  useEffect(() => {
    calculateAverage();
    setTotalCount(graphData.reduce((acc, item) => acc + item.count, 0));
  }, []);

  return (
    <>
      <ReviewRating>
        <RateAveragePart>
          구매자 평점
          <RateAverage>
            <PiStarFill />
            {isAverage.toFixed(1)}
          </RateAverage>
        </RateAveragePart>
        <RateGraphPart>
          {graphData.map((item, index) => (
            <RateGraph key={index} item={item}>
              {item.evaluation}
              <Graph item={item} totalCount={totalCount} />
              {item.count}
            </RateGraph>
          ))}
        </RateGraphPart>
      </ReviewRating>
    </>
  );
}
