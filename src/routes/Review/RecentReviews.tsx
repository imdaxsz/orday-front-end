import styled from "styled-components";

import Head from "@/components/Head";
import ReviewCard from "@/components/ReviewCard";
import useRecentReviews from "@/hooks/useRecentReviews";

export default function RecentReviews() {
  const { ref, leftContents, rightContents } = useRecentReviews();

  return (
    <Container>
      <Head title="최신 리뷰 | Orday" />
      <h1>최신 리뷰</h1>
      <ReviewContainer>
        <Section>
          {leftContents.map((review) => (
            <ReviewCard review={review} key={review.reviewId} />
          ))}
        </Section>
        <Section>
          {rightContents.map((review) => (
            <ReviewCard review={review} key={review.reviewId} />
          ))}
        </Section>
      </ReviewContainer>
      <div ref={ref}></div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  gap: 20px;

  h1 {
    font-size: 24px;
    font-weight: 400;
    width: 722px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 24px;
  width: 722px;
  height: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  &:last-of-type {
    margin-top: 122px;
  }
`;
