import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { getBrandList, getLikeBrands } from "@/api/BrandApi";

export default function useBrandList() {
  const [brands, setBrands] = useState<BrandListDto>([]);
  const location = useLocation().pathname.split("/")[1];

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    name: "좋아요순",
    value: "like",
  });

  const fetchData = useCallback(
    async (sortId: number) => {
      if (location === "brands") {
        const { data } = await getBrandList(sortId);
        setBrands(data);
      } else {
        const { data } = await getLikeBrands(sortId);
        setBrands(data);
      }
    },
    [location],
  );

  useEffect(() => {
    fetchData(selectedOption.id);
  }, [selectedOption, fetchData]);

  return { brands, selectedOption, setSelectedOption };
}
