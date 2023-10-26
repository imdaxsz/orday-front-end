import styled from "styled-components";

import ReviewCard from "@/components/CommunityCard";

const mockData = [
  {
    id: 1,
    content: "",
  },
];

export default function LikePostsList() {
  return (
    <ProductList>
      {!mockData.length ? (
        <Empty>관심 게시글이 없습니다.</Empty>
      ) : (
        <>
          <ReviewCard isMainTitle={false} />
          <ReviewCard isMainTitle={false} />
          <ReviewCard isMainTitle={false} />
        </>
      )}
    </ProductList>
  );
}
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 74px;
  margin: 40px 0;
`;
const Empty = styled.p`
  margin: 150px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
