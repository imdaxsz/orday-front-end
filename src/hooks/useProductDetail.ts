import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getProductDetail } from "@/api/ProductApi";
import { PRODUCT_DETAIL_INFO } from "@/constants";

const data: ProductDetail = {
  id: 8,
  name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
  imageUrl: "string",
  clothesInfoList: [
    {
      id: 8,
      color: "brown",
      size: "S",
    },
    {
      id: 1001,
      color: "brown",
      size: "M",
    },
    {
      id: 1256,
      color: "brown",
      size: "L",
    },
    {
      id: 1452,
      color: "red",
      size: "S",
    },
    {
      id: 1767,
      color: "red",
      size: "M",
    },
    {
      id: 1963,
      color: "red",
      size: "L",
    },
    {
      id: 2159,
      color: "black",
      size: "S",
    },
    {
      id: 2355,
      color: "black",
      size: "M",
    },
    {
      id: 2790,
      color: "black",
      size: "L",
    },
  ],
  description: "상세정보1",
  brandInfo: {
    name: "파타고니아",
    id: 1,
  },
  liked: false,
  price: 198000,
  discountPrice: 0,
};

export default function useProductDetail() {
  const { state } = useLocation();
  const [productData, setProductData] = useState<ProductDetail>();
  const [options, setOptions] = useState<ColorOptionObject>();

  const fetchProductDetail = async () => {
    try {
      const data = await getProductDetail(state.name);
      setProductData(data);
    } catch (error) {
      console.log("Error fetching product: ", error);
    }
  };

  const createColorObject = (productData: ProductDetail) => {
    const colorMap: ColorOptionObject = {};

    productData.clothesInfoList.forEach((item: ClothesInfo) => {
      const { id, color, size } = item;
      if (!colorMap[color]) {
        colorMap[color] = [];
      }
      colorMap[color].push({ id, size });
    });
    return colorMap;
  };

  useEffect(() => {
    setTimeout(() => {
      setProductData(data);
    }, 300);
    // fetchProductDetail();
  }, [state.name]);

  useEffect(() => {
    if (productData) {
      const createdOptions = createColorObject(productData);
      setOptions(createdOptions);
      PRODUCT_DETAIL_INFO[0].description = data.description;
    }
  }, [productData]);

  return {
    productData,
    options,
  };
}
