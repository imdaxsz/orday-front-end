import { useEffect, useState } from "react";

import { getBestAllProducts, getNewOrSaleProducts } from "@/api/ProductApi";

export default function useHomeProductList() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [bestProducts, setBestProducts] = useState<Product[]>([]);

  const fetchNewProducts = async () => {
    try {
      const { body } = await getNewOrSaleProducts({ sortId: 0 }, "new");
      setNewProducts(body);
    } catch (error) {
      console.log("Error fetching NEW products: ", error);
    }
  };

  const fetchBestProducts = async () => {
    try {
      const data = await getBestAllProducts();
      setBestProducts(data.slice(0, 12));
    } catch (error) {
      console.log("Error fetching BEST products: ", error);
    }
  };

  useEffect(() => {
    fetchNewProducts();
    fetchBestProducts();
  }, []);

  return { newProducts, bestProducts };
}
