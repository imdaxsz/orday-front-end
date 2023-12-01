import { useEffect, useState } from "react";

export default function useProductInfo(
  productId: number,
  isEmptyOptions: boolean,
) {
  const [toggleDetailInfo, setToggleDetailInfo] = useState([1]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<ProductOptionInfo[]>(
    [],
  );

  useEffect(() => {
    const selectedColorOption = selectedOptions.filter(
      (option) => option.color === selectedColor,
    );
    setSelectedSizes(selectedColorOption.map((option) => option.size));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor]);

  useEffect(() => {
    if (isEmptyOptions) {
      setSelectedOptions([{ id: productId, color: "", size: "", amount: 1 }]);
    } else {
      setSelectedOptions([]);
    }
  }, [isEmptyOptions, productId]);

  const handleOptionChange = (
    id: number,
    optionColor: string,
    optionSize: string,
  ) => {
    if (!selectedColor) return alert("색상을 선택해주세요");
    if (selectedSizes.includes(optionSize)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== optionSize));
      setSelectedOptions(selectedOptions.filter((option) => option.id !== id));
    } else {
      setSelectedSizes([...selectedSizes, optionSize]);
      setSelectedOptions((prev) => [
        ...prev,
        { id, color: optionColor, size: optionSize, amount: 1 },
      ]);
    }
  };

  const addProductAmount = (id: number) => {
    const changedProductOption = selectedOptions.map((product) =>
      product.id === id ? { ...product, amount: product.amount + 1 } : product,
    );
    setSelectedOptions(changedProductOption);
  };

  const reduceProductAmount = (id: number) => {
    const changedProductOption = selectedOptions.map((product) =>
      product.amount > 1 && product.id === id
        ? { ...product, amount: product.amount - 1 }
        : product,
    );
    setSelectedOptions(changedProductOption);
  };

  const handleRemoveOption = (optionId: number, optionSize: string) => {
    if (isEmptyOptions) return;
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
    selectedColor,
    setSelectedColor,
    handleOptionChange,
    selectedSizes,
    selectedOptions,
    addProductAmount,
    reduceProductAmount,
    handleRemoveOption,
    toggleDetailInfo,
    handleToggleDetailInfo,
  };
}
