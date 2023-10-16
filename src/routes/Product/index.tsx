import { BiSolidPencil } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";
import styled from "styled-components";

import DetailComponent from "./Detail";

const categories = [
  "전체",
  "상의",
  "바지/스커트",
  "아우터",
  "홈웨어",
  "언더웨어",
];

export default function Product() {
  return (
    <Container>
      <ProductImage>
        <ProductCategory>
          의류 <FaChevronRight />
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </ProductCategory>
        <Image />
      </ProductImage>
      <DetailComponent />
      <ProductComment>
        <ProductReview>
          리뷰(0)
          <BiSolidPencil />
        </ProductReview>
        <ProductPhoto>
          사진/동영상(0)
          <BiSolidPencil />
        </ProductPhoto>
      </ProductComment>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto 1fr;
  align-items: flex-start;
  padding: 20px;
  margin-top: 75px;
  height: 1120px;
  gap: 60px;
`;

const ProductImage = styled.div`
  grid-column: 1 / 2;
  width: 650px;
  height: 970px;
`;

const Image = styled.div`
  width: 650px;
  height: 900px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  margin-top: 40px;
`;

const ProductCategory = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const ProductComment = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  width: 1220px;
  height: 133px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typo["body-1-b"]};
`;

const ProductReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  padding-bottom: 10px;
`;

const ProductPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  padding-bottom: 10px;
`;
