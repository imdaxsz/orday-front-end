import { useEffect, useState } from "react";

import { getNewOrSaleProducts } from "@/api/ProductApi";

export default function useHomeProductList() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  const fetchNewProducts = async () => {
    try {
      const { body } = await getNewOrSaleProducts({ sortId: 0 }, "new");
      setNewProducts((prev) => [...prev, ...body]);
    } catch (error) {
      console.log("Error fetching NEW products: ", error);
    }
  };

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return { newProducts };
}
