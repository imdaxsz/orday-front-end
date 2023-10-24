import { useState } from "react";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Head from "@/components/Head";
import ReviewItem from "@/components/ReviewItem";
import Tabs, { Tab } from "@/components/Tabs";

const ProductMockData = {
  id: "1",
  image: "",
  name: "파타고니아 레트로 X 양털 후리스 뽀글이 플리스 자켓",
  size: "L",
  color: "BROWN",
};

const reviewMockData1 = {
  productInfo: ProductMockData,
  orderNo: "0000000001",
};
const reviewMockData2 = {
  productInfo: ProductMockData,
  orderNo: "0000000002",
};

const reviewMockData3 = {
  ...reviewMockData1,
  content: "리뷰1입니다. 리뷰1입니다.",
  rating: 4,
  createdAt: "2023-10-24",
};
const reviewMockData4 = {
  ...reviewMockData2,
  content:
    "리뷰2입니다. 리뷰2입니다. 리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리뷰2입니다.리뷰2입니다. 리",
  rating: 5,
  createdAt: "2023-10-26",
};

export default function MyReviewList() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [review, setReviews] = useState([reviewMockData2, reviewMockData1]);

  const handleTabClick = (i: number) => {
    setSelectedTab(i);
    // TODO: fetch data
    // TEST
    if (i === 1) setReviews([reviewMockData2, reviewMockData1]);
    else setReviews([reviewMockData4, reviewMockData3]);
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
      {review.map((review, i) => (
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
