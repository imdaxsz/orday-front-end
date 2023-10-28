import { FaChevronRight } from "react-icons/fa6";
import styled from "styled-components";

import ProductComment from "./Comment/index";
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
      <ProductComment />
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
  gap: 60px;
`;

const ProductImage = styled.div`
  grid-column: 1 / 2;
  width: 650px;
`;

const Image = styled.div`
  width: 650px;
  height: 900px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  grid-row: 1 / 3;
  margin-top: 55px;
`;

const ProductCategory = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
