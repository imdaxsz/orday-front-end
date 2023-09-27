import { styled } from "styled-components";

import Dropdown from "@/components/Dropdown";
import ProductCard from "@/components/ProductCard";

const mockdata = [
  {
    id: 1,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품1",
    price: 10000,
  },
  {
    id: 2,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품2",
    price: 10000,
  },
  {
    id: 3,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품3",
    price: 10000,
  },
];

const mockdata2 = [
  {
    id: 1,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품1",
    price: 10000,
  },
  {
    id: 2,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품2",
    price: 10000,
  },
  {
    id: 3,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품3",
    price: 10000,
  },
  {
    id: 4,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품1",
    price: 10000,
  },
  {
    id: 5,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품2",
    price: 10000,
  },
  {
    id: 6,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품3",
    price: 10000,
  },
  {
    id: 7,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품2",
    price: 10000,
  },
  {
    id: 8,
    image: "",
    url: "",
    brand: "브랜드명",
    name: "상품3",
    price: 10000,
  },
];

export default function Category() {
  return (
    <>
      <CategoryNewList>
        {mockdata.map((item) => (
          <ProductCard key={item.id} info={item} size="xl" $tag="NEW" />
        ))}
      </CategoryNewList>

      <CategoryItems>
        <Dropdown type="product" />
        <ItemList>
          {mockdata2.map((item) => (
            <ProductCard key={item.id} info={item} size="md" />
          ))}
        </ItemList>
      </CategoryItems>

      <Dropdown type="product" />
      <Dropdown type="brand" />
    </>
  );
}

const CategoryNewList = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 15rem;
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5rem 0;
`;
