import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import SelectBox from "@/components/SelectBox";

import ProductQuantity from "./Quantity";

const productData: ProductDetail = {
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

interface ColorMap {
  [key: string]: { id: number; size: string }[];
}

function createColorObject(productData: ProductDetail) {
  const colorMap: ColorMap = {};

  productData.clothesInfo.forEach((item: ClothesInfo) => {
    const { id, color, size } = item;
    if (!colorMap[color]) {
      colorMap[color] = [];
    }
    colorMap[color].push({ id, size });
  });
  return colorMap;
}

const DetailInfoData = [
  { id: 1, name: "상세정보", description: productData.description },
  { id: 2, name: "배송안내", description: "배송안내2" },
  { id: 3, name: "교환 및 반품안내", description: "교환 및 반품안내3" },
  { id: 4, name: "품질 보증 및 A/S", description: "품질 보증 및 A/S4" },
  { id: 5, name: "취급주의사항", description: "취급주의사항5" },
];

export default function DetailInfo() {
  const navigate = useNavigate();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [toggleDetailInfo, setToggleDetailInfo] = useState([0]);

  const [selectedColor, setSelectedColor] = useState<string | null>("");
  const [selectedOptions, setSelectedOptions] = useState<ClothesInfo[]>([]);
  const options = createColorObject(productData);
  console.log(options);

  useEffect(() => {
    const selectedColorOption = selectedOptions.filter(
      (option) => option.color === selectedColor,
    );
    setSelectedSizes(selectedColorOption.map((option) => option.size));
  }, [selectedColor, selectedOptions]);

  const CustomButton = ({ ...props }) => (
    <Button {...props} style={{ width: "213px", height: "50px" }} />
  );

  const LikeButton = ({ ...props }) => (
    <Button {...props} style={{ width: "50px", height: "50px" }} />
  );

  const handleSelection = (id: number, color: string, size: string) => {
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

  return (
    <ProductDetail>
      <ProductCode
        onClick={() => navigate(`/brands/${productData.brandInfo.id}`)}
        style={{ cursor: "pointer" }}
      >
        {productData.brandInfo.name}
      </ProductCode>
      <ProductInfo>{productData.name}</ProductInfo>

      <ProductPrice>₩ {productData.price.toLocaleString()}</ProductPrice>
      <ProductColor>
        <SelectBox
          options={Object.keys(options)}
          id="colors"
          text="색상을 선택해주세요"
          selected={selectedColor}
          setSelected={setSelectedColor}
          className="colorOption"
        />
      </ProductColor>
      {selectedColor && (
        <ProductSize>
          {options[selectedColor]?.map((option) => (
            <SizeBox
              key={option.id}
              onClick={() =>
                handleSelection(option.id, selectedColor, option.size)
              }
              selected={selectedSizes.includes(option.size)}
            >
              {option.size}
            </SizeBox>
          ))}
        </ProductSize>
      )}
      {selectedOptions.length > 0 &&
        selectedOptions.map((option) => (
          <ProductQuantity
            key={option.id}
            price={productData.price}
            selectedSize={option.size}
            selectedColor={option.color}
            handleCancel={() => handleRemoveOption(option.id, option.size)}
          />
        ))}
      <ProductBtn>
        <CustomButton $variant="solid" color="primary">
          구매하기
        </CustomButton>
        <CustomButton
          $variant="outline"
          color="primary"
          onClick={() => navigate("/cart")}
        >
          장바구니
        </CustomButton>
        <LikeButton
          $variant="outline"
          size="md"
          color="primary"
          onClick={() => navigate("/myPage")}
        >
          <BsHeartFill />
        </LikeButton>
      </ProductBtn>
      <ProductDetailInfo>
        {DetailInfoData.map((info) => (
          <DetailInfoKey
            key={info.id}
            onClick={() => handleToggleDetailInfo(info.id)}
          >
            {toggleDetailInfo.includes(info.id) ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
            {info.name}
            {toggleDetailInfo.includes(info.id) && (
              <DetailInfoValue>{info.description}</DetailInfoValue>
            )}
          </DetailInfoKey>
        ))}
      </ProductDetailInfo>
    </ProductDetail>
  );
}

export const ProductDetail = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  width: 490px;
  margin-top: 30px;
`;

export const ProductCode = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  ${({ theme }) => theme.typo["body-2-r"]};
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  margin-top: 5px;
  ${({ theme }) => theme.typo["body-1-r"]};
`;

export const ProductPrice = styled.div`
  margin-top: 10px;
  ${({ theme }) => theme.typo["body-1-b"]};
`;

export const ProductSize = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ProductColor = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;

  .colorOption {
    width: 100%;
  }
`;

export const SizeBox = styled.button<{ selected: boolean }>`
  width: 65px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors["primary"]["80"] : theme.colors["neutral"]["20"]};
  color: ${({ theme, selected }) =>
    selected ? theme.colors["neutral"]["10"] : theme.colors["neutral"]["100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProductBtn = styled.div`
  display: flex;
  gap: 10px;
  width: 496px;
  height: 50px;
  margin-top: 20px;
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  height: auto;
  margin-top: 65px;
  gap: 40px;
  user-select: none;
`;

export const DetailInfoKey = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  cursor: pointer;
  & svg {
    margin-right: 10px;
  }
`;

export const DetailInfoValue = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
