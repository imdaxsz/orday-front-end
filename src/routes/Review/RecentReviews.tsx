import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import Head from "@/components/Head";
import ReviewCard from "@/components/ReviewCard";

export default function RecentReviews() {
  const [mainContents, setMainContents] = useState<number[]>([]);
  const [ref, inView] = useInView();

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
      {mainContents.map((contentId) => (
        <MainContent key={contentId}>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ReviewCard i={index} key={index} />
            ))}
        </MainContent>
      ))}
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

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 24px;
  width: 722px;
  height: auto;
  > :nth-child(2) {
    margin-top: 122px;
  }
  > :nth-child(3) {
    margin-top: -122px;
  }
`;
