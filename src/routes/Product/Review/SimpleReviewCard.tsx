import styled from "styled-components";

import ReviewAction from "@/components/ReviewCard/Action";
import { RATING_LABEL } from "@/constants";
import Rating from "@/routes/Review/Rating";

interface Props {
  review: ReviewInfo;
  type?: "default" | "modal";
}

export default function SimpleReviewCard({ review, type }: Props) {
  return (
    <DetailReview type={type}>
      <Header type={type}>
        <Rating rating={review.rating} text={RATING_LABEL[5 - review.rating]} />
        <span>{review.createdAt.split("T")[0]}</span>
      </Header>
      <Info>
        <UserImage />
        <div>
          <h3>{review.userName}</h3>
          <span>
            {Boolean(review.color) && (
              <>
                <strong>Color </strong>
                {review.color}&nbsp;&nbsp;
              </>
            )}
            {Boolean(review.size) && (
              <>
                <strong>Size </strong>
                {review.size}
              </>
            )}
          </span>
        </div>
      </Info>
      <Content>{review.content}</Content>
      {review.reviewImageUrl && (
        <Photo src={review.reviewImageUrl} alt={review.reviewId.toString()} />
      )}

      <ReviewAction
        reviewId={review.reviewId}
        likeCount={review.reviewLikeCount}
        isLiked={review.liked}
      />
    </DetailReview>
  );
}

export const DetailReview = styled.div<Pick<Props, "type">>`
  width: ${({ type = "default" }) => (type === "default" ? "722px" : "460px")};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 8px;
`;

export const Header = styled.div<Pick<Props, "type">>`
  width: 100%;
  height: ${({ type = "default" }) => (type === "default" ? "76px" : "45px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};

  span {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  h3 {
    ${({ theme }) => theme.typo["body-2-m"]};
  }

  span {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }
`;

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #b7d2f1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => theme.typo["body-3-r"]};
`;

export const Photo = styled.img`
  display: block;
  margin-top: 20px;
  margin-bottom: -32px;
  height: 130px;
  width: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  object-fit: cover;
`;
