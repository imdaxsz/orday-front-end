import styled from "styled-components";

import ProductComment from "./Comment/index";
import DetailComponent from "./Detail";

export default function Product() {
  return (
    <Container>
      <ProductImg alt="productImage" />
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

const ProductImg = styled.img`
  width: 650px;
  height: 900px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  grid-row: 1 / 3;
`;
