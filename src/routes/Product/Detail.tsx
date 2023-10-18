import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";

import {
  ProductDetail,
  ProductCode,
  ProductInfo,
  ProductPrice,
  ProductSize,
  SizeBox,
  ProductBtn,
  ProductDetailInfo,
  DetailInfoKey,
  DetailInfoValue,
} from "./Detail.style";
import ProductQuantity from "./Quantity";

const ProductData = {
  color: "BROWN",
  name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
  code: "23056-PEBG",
  price: "198000",
};

const sizes = ["S", "M", "L"];

const CautionData = [
  { key: "상세정보", value: "상세정보1" },
  { key: "배송안내", value: "배송안내2" },
  { key: "교환 및 반품안내", value: "교환 및 반품안내3" },
  { key: "품질 보증 및 A/S", value: "품질 보증 및 A/S4" },
  { key: "취급주의사항", value: "취급주의사항5" },
];

export default function DetailComponent() {
  const navigate = useNavigate();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCautionIndices, setSelectedCautionIndices] = useState([0]);

  const CustomButton = ({ ...props }) => (
    <Button {...props} style={{ width: "213px", height: "50px" }} />
  );

  const LikeButton = ({ ...props }) => (
    <Button {...props} style={{ width: "50px", height: "50px" }} />
  );

  const handleSelection = (selection: string) => {
    if (selectedSizes.includes(selection)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== selection));
    } else {
      setSelectedSizes([...selectedSizes, selection]);
    }
  };

  const handleCancel = (sizeToCancel: string) => {
    setSelectedSizes(selectedSizes.filter((size) => size !== sizeToCancel));
  };

  const handleToggleCaution = (index: number) => {
    if (selectedCautionIndices.includes(index)) {
      setSelectedCautionIndices(
        selectedCautionIndices.filter((i) => i !== index),
      );
    } else {
      setSelectedCautionIndices([...selectedCautionIndices, index]);
    }
  };

  return (
    <ProductDetail>
      <ProductCode>PATAGONIA {ProductData.code}</ProductCode>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <ProductInfo key={index}>
            {Object.values(ProductData)[index]}
          </ProductInfo>
        ))}
      <ProductPrice>
        ₩ {parseInt(ProductData.price).toLocaleString()}
      </ProductPrice>
      <ProductSize>
        {sizes.map((size, index) => (
          <SizeBox
            key={index}
            onClick={() => handleSelection(size)}
            selected={selectedSizes.includes(size)}
          >
            {size}
          </SizeBox>
        ))}
      </ProductSize>
      {selectedSizes.length > 0 &&
        selectedSizes.map((selectedSize) => (
          <ProductQuantity
            key={selectedSize}
            price={ProductData.price}
            selectedSize={selectedSize}
            handleCancel={() => handleCancel(selectedSize)}
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
        {CautionData.map((caution, index) => (
          <DetailInfoKey key={index} onClick={() => handleToggleCaution(index)}>
            {selectedCautionIndices.includes(index) ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
            {caution.key}
            {selectedCautionIndices.includes(index) && (
              <DetailInfoValue>{caution.value}</DetailInfoValue>
            )}
          </DetailInfoKey>
        ))}
      </ProductDetailInfo>
    </ProductDetail>
  );
}
