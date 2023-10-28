import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getBrandDetail } from "@/api/BrandApi";

export default function useBrandDetail() {
  const brandId = useLocation().pathname.split("/")[2];
  const [info, setInfo] = useState<Brand | null>(null);

  const fetchData = async (brandId: number) => {
    const { data } = await getBrandDetail(brandId);
    setInfo(data);
  };

  useEffect(() => {
    if (brandId) fetchData(Number(brandId));
  }, [brandId]);

  return { info };
}
