import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import ReviewCard from "@/components/CommunityCard";
import Head from "@/components/Head";

export default function RecentReviews() {
  const [mainContents, setMainContents] = useState<number[]>([0, 1, 2, 3, 4]);
  const [ref, inView] = useInView();
  const leftContents = mainContents.filter((_, index) => index % 2 === 0);
  const rightContents = mainContents.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    if (inView) {
      setMainContents((prevContents) => [
        ...prevContents,
        prevContents.length + 1,
      ]);
    }
  }, [inView]);

  return (
    <Container>
      <Head title="최근 리뷰 | Orday" />
      <h1>최근 리뷰</h1>
      <ReviewContainer>
        <Section>
          {leftContents.map((contentId) => (
            <ReviewCard key={contentId} />
          ))}
        </Section>
        <Section>
          {rightContents.map((contentId) => (
            <ReviewCard key={contentId} />
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
