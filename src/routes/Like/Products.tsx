import { styled } from "styled-components";

import BackButton from "@/components/BackButton";
import Head from "@/components/Head";
import ProductCard from "@/components/ProductCard";
import useLikedList from "@/hooks/useLikedList";

export default function LikeProductList() {
  const { products } = useLikedList();

  return (
    <Container>
      <BackButton pageTitle="관심상품" />
      <Head title="관심 상품 | Orday" />
      <ProductList>
        {!products.length ? (
          <Empty>관심 상품이 없습니다.</Empty>
        ) : (
          <>
            {products.map((item) => (
              <ProductCard key={item.id} info={item} size="lg" />
            ))}
          </>
        )}
      </ProductList>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin: 40px 0;
`;

const Empty = styled.p`
  margin: 150px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
