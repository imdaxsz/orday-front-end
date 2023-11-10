import { useEffect, useState } from "react";

import { getLikedProducts } from "@/api/ProductApi";

export default function useLikedList() {
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

  return { products };
}
