import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getProductDetail } from "@/api/ProductApi";
import { PRODUCT_DETAIL_INFO } from "@/constants";

export default function useProductDetail() {
  const [productData, setProductData] = useState<ProductDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<ColorOptionObject>({});
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("name");

  const fetchProductDetail = async () => {
    try {
      setIsLoading(true);
      if (productName) {
        const data = await getProductDetail(productName);
        setProductData(data);
      }
    } catch (error) {
      console.log("Error fetching product: ", error);
    }
    setIsLoading(false);
  };

  const createColorObject = (productData: ProductDetail) => {
    const colorMap: ColorOptionObject = {};

    productData.clothesInfoList.forEach((item: ClothesInfo) => {
      const { id, color, size } = item;
      if (color) {
        if (!colorMap[color]) {
          colorMap[color] = [];
        }
        colorMap[color].push({ id, size });
      }
    });
    return colorMap;
  };

  useEffect(() => {
    fetchProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productData) {
      const createdOptions = createColorObject(productData);
      setOptions(createdOptions);
      PRODUCT_DETAIL_INFO[0].description = productData.description;
    }
  }, [productData]);

  return {
    isLoading,
    productData,
    options,
  };
}
