import { useEffect, useState } from "react";

import { PRODUCT_DETAIL_INFO } from "@/constants";

const data: ProductDetail = {
  id: 100,
  name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
  imageUrl: "string",
  clothesInfo: [
    {
      id: 101,
      color: "BROWN",
      size: "S",
    },
    {
      id: 102,
      color: "BROWN",
      size: "M",
    },
    {
      id: 103,
      color: "BROWN",
      size: "L",
    },
    {
      id: 104,
      color: "BLACK",
      size: "M",
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
  const [productData, setProductData] = useState<ProductDetail>(data);
  const [options, setOptions] = useState<ColorOptionObject>();
  const [toggleDetailInfo, setToggleDetailInfo] = useState([0]);

  const [selectedColor, setSelectedColor] = useState<string | null>("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<ClothesInfo[]>([]);

  const createColorObject = (productData: ProductDetail) => {
    const colorMap: ColorOptionObject = {};

    productData.clothesInfo.forEach((item: ClothesInfo) => {
      const { id, color, size } = item;
      if (!colorMap[color]) {
        colorMap[color] = [];
      }
      colorMap[color].push({ id, size });
    });
    return colorMap;
  };

  useEffect(() => {
    // 상품상세 조회
    setProductData(data);
    if (productData) {
      const createdOptions = createColorObject(productData);
      setOptions(createdOptions);
      PRODUCT_DETAIL_INFO[0].description = data.description;
    }
  }, []);

  useEffect(() => {
    const selectedColorOption = selectedOptions.filter(
      (option) => option.color === selectedColor,
    );
    setSelectedSizes(selectedColorOption.map((option) => option.size));
  }, [selectedColor, selectedOptions]);

  const handleSelectOption = (id: number, color: string, size: string) => {
    if (!selectedColor) return alert("색상을 선택해주세요");
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== size));
      setSelectedOptions(selectedOptions.filter((option) => option.id !== id));
    } else {
      setSelectedSizes([...selectedSizes, size]);
      setSelectedOptions((prev) => [...prev, { id, color, size }]);
    }
  };

  const handleRemoveOption = (optionId: number, optionSize: string) => {
    setSelectedSizes(selectedSizes.filter((size) => size !== optionSize));
    setSelectedOptions(
      selectedOptions.filter((options) => options.id !== optionId),
    );
  };

  const handleToggleDetailInfo = (infoId: number) => {
    if (toggleDetailInfo.includes(infoId)) {
      setToggleDetailInfo(toggleDetailInfo.filter((id) => id !== infoId));
    } else {
      setToggleDetailInfo([...toggleDetailInfo, infoId]);
    }
  };
  return {
    productData,
    options,
    selectedColor,
    setSelectedColor,
    handleSelectOption,
    selectedSizes,
    selectedOptions,
    handleRemoveOption,
    toggleDetailInfo,
    handleToggleDetailInfo,
  };
}
