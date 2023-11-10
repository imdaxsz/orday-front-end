import { styled } from "styled-components";

import BackButton from "@/components/BackButton";

import LikeProductList from "./Products";

export default function LikeList() {
  return (
    <Container>
      <BackButton pageTitle="관심상품" />
      <LikeProductList />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
`;
