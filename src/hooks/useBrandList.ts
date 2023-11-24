import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { getBrandList, getLikeBrands } from "@/api/BrandApi";

export default function useBrandList() {
  const [brands, setBrands] = useState<BrandListDto>([]);
  const location = useLocation().pathname.split("/")[1];

  const [isLoading, setIsLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    name: "좋아요순",
    value: "like",
  });

  const fetchData = useCallback(
    async (sortId: number) => {
      setIsLoading(true);
      try {
        let data: BrandListDto = [];
        if (location === "brands") data = await getBrandList(sortId);
        else data = await getLikeBrands(sortId);
        setBrands(data);
      } catch (error) {
        console.log("Error fetching brand list: ", error);
      }
      setIsLoading(false);
    },
    [location],
  );

  useEffect(() => {
    fetchData(selectedOption.id);
  }, [selectedOption, fetchData]);

  return { isLoading, brands, selectedOption, setSelectedOption };
}
