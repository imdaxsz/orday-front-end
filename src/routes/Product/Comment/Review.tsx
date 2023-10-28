import Action from "@/components/CommunityCard/Review/Action";
import CommunityHeader from "@/components/CommunityCard/Review/Header";

import Rating from "../../Review/Rating";

import { graphData } from "./graphdata";
import {
  DetailReview,
  RatingDate,
  ReviewContent,
  ReviewPhoto,
} from "./Review.style";

export default function Review() {
  return (
    <>
      {graphData
        .filter((item) => item.count !== 0)
        .map((item, index) => (
          <DetailReview key={index}>
            <RatingDate>
              <Rating rating={item.point} text={item.evaluation} />
              {"2023.10.13"}
            </RatingDate>
            <CommunityHeader
              info={{ name: "김환경", update: "Color:Brown Size:L" }}
            />
            <ReviewContent>{"너무 좋아요"}</ReviewContent>
            <ReviewPhoto />
            <Action />
          </DetailReview>
        ))}
    </>
  );
}
