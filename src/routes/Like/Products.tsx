import { useEffect, useState } from "react";
import styled from "styled-components";

import { getLikedProducts } from "@/api/ProductApi";
import ProductCard from "@/components/ProductCard";

export default function LikeProductList() {
  const [nextKey, setNextKey] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        const {
          cursorRequest: { key },
          body,
        } = await getLikedProducts(nextKey);
        setNextKey(key);
        setProducts((prev) => [...prev, ...body]);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchLikedProducts();
  }, [nextKey]);

  return (
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
