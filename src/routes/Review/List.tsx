import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Head from "@/components/Head";
import ReviewItem from "@/components/ReviewItem";
import Tabs, { Tab } from "@/components/Tabs";

export default function MyReviewList() {
  const ProductMockData = {
    id: "1",
    image: "",
    name: "파타고니아 레트로 X 양털 후리스 뽀글이 플리스 자켓",
  };

  return (
    <Container>
      <Head title="상품 리뷰 | Orday" />
      <BackButton pageTitle="상품 리뷰" />
      <LikeTabs>
        <Tab value={1} label="작성 가능한 리뷰" />
        <Tab value={2} label="작성한 리뷰" />
      </LikeTabs>
      <ReviewItem
        status="WRITABLE"
        orderNo="0000001"
        productInfo={ProductMockData}
      />
      <ReviewItem
        status="WRITABLE"
        orderNo="0000002"
        productInfo={ProductMockData}
      />
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
