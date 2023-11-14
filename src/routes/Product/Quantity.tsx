import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import ReduceBtn from "@/assets/reduce_btn.svg?react";

interface QuantityProps {
  selectedColor: string;
  selectedSize: string;
  price: number;
  handleCancel: () => void;
}

export default function ProductQuantity({
  selectedColor,
  selectedSize,
  price,
  handleCancel,
}: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  const addProductQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceProductQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCancelClick = () => {
    handleCancel();
  };

  return (
    <Container>
      <QuantityBox>
        <p>{selectedColor}</p>
        <p>{selectedSize}</p>
        <Count>
          <ReduceBtn
            onClick={reduceProductQuantity}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
          {quantity}
          <AddBtn
            onClick={addProductQuantity}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
        </Count>
        <CancelBtn onClick={handleCancelClick}>
          <FaXmark />
        </CancelBtn>
      </QuantityBox>
      <ProductTotalCost>
        상품금액
        <TotalCost>
          {(price * quantity).toLocaleString()}원 ({quantity}개)
        </TotalCost>
      </ProductTotalCost>
    </Container>
  );
}

export const Container = styled.div`
  width: 490px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

export const QuantityBox = styled.div`
  width: 490px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  p {
    ${({ theme }) => theme.typo["body-1-r"]};
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 150px;
`;

export const CancelBtn = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.typo["body-1-r"]};
`;

export const ProductTotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typo["body-1-b"]};
  margin-top: 10px;
`;

export const TotalCost = styled.div`
  ${({ theme }) => theme.typo["body-1-b"]};
`;
