import styled from "styled-components";

import DetailInfo from "./Detail";
import ProductReview from "./Review/index";

export default function Product() {
  return (
    <Container>
      <ProductInfo>
        <ProductImg alt="productImage" />
        <DetailInfo />
      </ProductInfo>
      <ProductReview />
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 30px 100px;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 120px;
`;

const ProductImg = styled.img`
  width: 650px;
  height: 900px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  grid-row: 1 / 3;
  margin-top: 55px;
`;
