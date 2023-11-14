import { useState } from "react";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Head from "@/components/Head";
import Tabs, { Tab } from "@/components/Tabs";
import useReviewList from "@/hooks/useReivewList";
import ReviewItem from "@/routes/Review/ReviewItem";

export default function MyReviewList() {
  const [selectedTab, setSelectedTab] = useState(1);
  const { reviews } = useReviewList(selectedTab);

  const handleTabClick = (i: number) => {
    setSelectedTab(i);
  };

  return (
    <Container>
      <Head title="구매 후기 | Orday" />
      <BackButton pageTitle="리뷰 작성/수정" />
      <LikeTabs>
        <Tab
          value={1}
          label="작성 가능한 리뷰"
          onClick={() => handleTabClick(1)}
        />
        <Tab value={2} label="작성한 리뷰" onClick={() => handleTabClick(2)} />
      </LikeTabs>
      {reviews.length === 0 && (
        <Empty>{`작성${
          selectedTab === 1 ? " 가능한 " : "한 "
        }리뷰가 없습니다.`}</Empty>
      )}
      {reviews.length !== 0 &&
        reviews.map((review, i) => (
          <ReviewItem
            key={i}
            status={selectedTab === 1 ? "WRITABLE" : "WRITTEN"}
            review={review}
          />
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 722px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const LikeTabs = styled(Tabs)`
  margin: 30px auto 0;
  height: 52px;
  & > li {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
  line-height: 400px;
`;
