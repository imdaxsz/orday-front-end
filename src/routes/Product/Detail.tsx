import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import Modal from "@/components/Modal";
import SelectBox from "@/components/SelectBox";
import { PRODUCT_DETAIL_INFO } from "@/constants";
import useProductAction from "@/hooks/useProductAction";
import useProductInfo from "@/hooks/useProductInfo";

import OptionProductBox from "./OptionProduct";

interface DetailInfoProps {
  productData: ProductDetail;
  options: ColorOptionObject;
}

export default function DetailInfo({ productData, options }: DetailInfoProps) {
  const navigate = useNavigate();
  const isEmptyOptions = !Object.keys(options).length;

  const {
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
  } = useProductInfo(productData.id, isEmptyOptions);

  const { isModalOpen, closeModal, goOrderPage, addProductToCart } =
    useProductAction(isEmptyOptions, productData, selectedOptions);

  return (
    <ProductDetail>
      {productData && (
        <>
          <Head
            title={`[${productData.brandInfo.name}] ${productData.name} | Orday`}
          />
          <ProductCode
            onClick={() => navigate(`/brands/${productData.brandInfo.id}`)}
            style={{ cursor: "pointer" }}
          >
            {productData.brandInfo.name}
          </ProductCode>
          <ProductInfo>{productData.name}</ProductInfo>

          {productData.discountPrice > 0 && (
            <div>
              <ProductPrice $discount={!!productData.discountPrice}>
                ₩ {productData.price.toLocaleString()}
              </ProductPrice>
              <ProductPrice>
                ₩{" "}
                {(
                  productData.price - productData.discountPrice
                ).toLocaleString()}
              </ProductPrice>
            </div>
          )}
          {productData.discountPrice === 0 && (
            <ProductPrice>₩ {productData.price.toLocaleString()}</ProductPrice>
          )}
          <ProductColor>
            {!isEmptyOptions && options && (
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
                      handleOptionChange(option.id, selectedColor, option.size)
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
                price={
                  !productData.discountPrice
                    ? productData.price
                    : productData.price - productData.discountPrice
                }
                addProductAmount={addProductAmount}
                reduceProductAmount={reduceProductAmount}
                handleRemoveOption={handleRemoveOption}
              />
            ))}

          <Modal isOpen={isModalOpen}>
            <ModalCloseBtn onClick={closeModal}>
              <IoMdClose />
            </ModalCloseBtn>
            <ModalText>상품이 장바구니에 추가되었습니다.</ModalText>
            <ModalButton>
              <Button color="neutral" onClick={closeModal}>
                쇼핑 계속하기
              </Button>
              <Button onClick={() => navigate("/cart")}>장바구니 확인</Button>
            </ModalButton>
          </Modal>

          <ButtonBox>
            <Button $variant="solid" color="primary" onClick={goOrderPage}>
              구매하기
            </Button>
            <Button
              $variant="outline"
              color="primary"
              onClick={addProductToCart}
            >
              장바구니
            </Button>
            <div>
              <LikeButton
                isLiked={productData.liked}
                target="product"
                id={productData.id}
              />
            </div>
          </ButtonBox>
        </>
      )}
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

export const ProductPrice = styled.div<{ $discount?: boolean }>`
  margin-top: 10px;
  color: ${({ theme, $discount = false }) =>
    $discount && theme.colors["neutral"]["40"]};
  font-weight: ${({ theme, $discount }) =>
    $discount ? theme.typo["body-1-m"] : theme.typo["body-1-b"]};
  text-decoration: ${({ $discount }) => $discount && "line-through"};
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

export const ModalCloseBtn = styled.div`
  margin-bottom: 24px;
  font-size: 20px;
  cursor: pointer;
  text-align: right;
`;

export const ModalText = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const ModalButton = styled.div`
  margin: 28px 0;
  display: flex;
  justify-content: center;
  gap: 28px;
  & > button {
    width: 148px;
    height: 50px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  width: 496px;
  height: 50px;
  margin-top: 20px;
  & > button {
    width: 213px;
    height: 50px;
  }
  & > div {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors["primary"][80]};
      border-radius: 10px;
      width: 50px;
      height: 50px;
    }
    svg {
      color: ${({ theme }) => theme.colors["primary"][80]};
      width: 20px;
      height: 20px;
    }
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
