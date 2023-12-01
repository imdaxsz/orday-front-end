import { useEffect, useState } from "react";

import { getLikedProducts } from "@/api/ProductApi";

export default function useLikedList() {
  const [nextKey, setNextKey] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchLikedProducts = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLikedProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextKey]);

  return { isLoading, products };
}
