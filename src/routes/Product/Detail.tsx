import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

import {
  ProductDetail,
  ProductCode,
  ProductInfo,
  ProductPrice,
  ProductSize,
  SizeBox,
  ProductBtn,
  Button,
  ProductCaution,
  CautionKey,
  CautionValue,
} from "./Detail.style";
import ProductQuantity from "./Quantity";

const ProductData = {
  color: "BROWN",
  name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
  code: "23056-PEBG",
  price: "198000",
};

const sizes = ["S", "M", "L"];

const buttons = ["구매하기", "장바구니", "Heart"];

const CautionData = [
  { key: "상세정보", value: "상세정보1" },
  { key: "배송안내", value: "배송안내2" },
  { key: "교환 및 반품안내", value: "교환 및 반품안내3" },
  { key: "품질 보증 및 A/S", value: "품질 보증 및 A/S4" },
  { key: "취급주의사항", value: "취급주의사항5" },
  { key: "제품후기", value: "제품후기6" },
];

export default function DetailComponent() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBtn, setSelectedBtn] = useState("");
  const [selectedCautionIndex, setSelectedCautionIndex] = useState(0);

  const handleSelection = (selection: string) => {
    if (sizes.includes(selection)) {
      setSelectedSize(selection);
      if (selectedBtn === "") {
        setSelectedBtn("구매하기");
      }
    } else if (buttons.includes(selection)) {
      setSelectedBtn(selection);
      if (selectedSize === "") {
        setSelectedSize("M");
      }
    }
  };

  const handleCancel = () => {
    setSelectedSize("");
    setSelectedBtn("");
  };

  const handleToggleCaution = (index: number) => {
    if (selectedCautionIndex === index) {
      setSelectedCautionIndex(-1);
    } else {
      setSelectedCautionIndex(index);
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
            selected={selectedSize === size}
          >
            {size}
          </SizeBox>
        ))}
      </ProductSize>
      {selectedSize !== "" && (
        <ProductQuantity
          price={ProductData.price}
          selectedSize={selectedSize}
          handleCancel={handleCancel}
        />
      )}
      <ProductBtn>
        {buttons.map((button, index) => (
          <Button
            key={index}
            selectedBtn={selectedBtn === button}
            onClick={() => handleSelection(button)}
          >
            {button === "Heart" ? <BsHeartFill /> : button}
          </Button>
        ))}
      </ProductBtn>
      <ProductCaution>
        {CautionData.map((caution, index) => (
          <CautionKey key={index} onClick={() => handleToggleCaution(index)}>
            {selectedCautionIndex === index ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
            {caution.key}
            {selectedCautionIndex === index && (
              <CautionValue>{caution.value}</CautionValue>
            )}
          </CautionKey>
        ))}
      </ProductCaution>
    </ProductDetail>
  );
}
