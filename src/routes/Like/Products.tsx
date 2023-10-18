import styled from "styled-components";

import ProductCard from "@/components/ProductCard";

const mockData = [
  {
    id: 1,
    image: "",
    url: "",
    brand: { name: "브랜드명", pathname: "test" },
    name: "상품1",
    price: 10000,
  },
  {
    id: 2,
    image: "",
    url: "",
    brand: { name: "브랜드명", pathname: "test" },
    name: "상품2",
    price: 10000,
  },
  {
    id: 3,
    image: "",
    url: "",
    brand: { name: "브랜드명", pathname: "test" },
    name: "상품3",
    price: 10000,
  },
  {
    id: 4,
    image: "",
    url: "",
    brand: { name: "브랜드명", pathname: "test" },
    name: "상품4",
    price: 10000,
  },
];

export default function LikeProductList() {
  return (
    <ProductList>
      {!mockData.length ? (
        <Empty>관심 상품이 없습니다.</Empty>
      ) : (
        <>
          {mockData.map((item) => (
            <ProductCard key={item.id} info={item} size="lg" $remove />
          ))}
        </>
      )}
    </ProductList>
  );
}
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
