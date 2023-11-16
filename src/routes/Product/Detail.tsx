import { BsHeartFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import SelectBox from "@/components/SelectBox";
import { PRODUCT_DETAIL_INFO } from "@/constants";
import useProductDetail from "@/hooks/useProductDetail";
import useProductInfo from "@/hooks/useProductInfo";

import OptionProductBox from "./OptionProduct";

export default function DetailInfo() {
  const navigate = useNavigate();

  const { productData, options } = useProductDetail();

  const {
    selectedColor,
    setSelectedColor,
    handleSelectOption,
    selectedSizes,
    selectedOptions,
    addProductAmount,
    reduceProductAmount,
    handleRemoveOption,
    toggleDetailInfo,
    handleToggleDetailInfo,
  } = useProductInfo();

  return (
    <ProductDetail>
      {productData && (
        <>
          <ProductCode
            onClick={() => navigate(`/brands/${productData.brandInfo.id}`)}
            style={{ cursor: "pointer" }}
          >
            {productData.brandInfo.name}
          </ProductCode>
          <ProductInfo>{productData.name}</ProductInfo>

          <ProductPrice>₩ {productData.price.toLocaleString()}</ProductPrice>
          <ProductColor>
            {options && (
              <SelectBox
                options={Object.keys(options)}
                id="colors"
                text="색상을 선택해주세요"
                selected={selectedColor}
                setSelected={setSelectedColor}
                className="colorOption"
              />
            )}
          </ProductColor>
          {selectedColor && (
            <ProductSize>
              {options &&
                options[selectedColor]?.map((option) => (
                  <SizeBox
                    key={option.id}
                    onClick={() =>
                      handleSelectOption(option.id, selectedColor, option.size)
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
              <OptionProductBox
                key={option.id}
                productOption={option}
                price={productData.price}
                addProductAmount={addProductAmount}
                reduceProductAmount={reduceProductAmount}
                handleRemoveOption={handleRemoveOption}
              />
            ))}
        </>
      )}
      <ButtonBox>
        <Button $variant="solid" color="primary">
          구매하기
        </Button>
        <Button
          $variant="outline"
          color="primary"
          onClick={() => navigate("/cart")}
        >
          장바구니
        </Button>
        <Button
          $variant="outline"
          size="md"
          color="primary"
          onClick={() => navigate("/myPage")}
          style={{ width: "50px", height: "50px" }}
        >
          <BsHeartFill />
        </Button>
      </ButtonBox>
      <ProductDetailInfo>
        {PRODUCT_DETAIL_INFO.map((info) => (
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

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  width: 496px;
  height: 50px;
  margin-top: 20px;
  button {
    width: 213px;
    height: 50px;
  }
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
