import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getBrandDetail } from "@/api/BrandApi";

export default function useBrandDetail() {
  const brandId = useLocation().pathname.split("/")[2];
  const [info, setInfo] = useState<Brand | null>(null);

  const fetchData = async (brandId: number) => {
    try {
      const data = await getBrandDetail(brandId);
      setInfo(data);
    } catch (error) {
      console.error("Error fetching brand detail: ", error);
    }
  };

  useEffect(() => {
    if (brandId) fetchData(Number(brandId));
  }, [brandId]);

  return { info };
}
