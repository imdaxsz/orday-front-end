import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import ReduceBtn from "@/assets/reduce_btn.svg?react";

interface OptionProductBoxProps {
  productOption: ProductOptionInfo;
  price: number;
  addProductAmount: (id: number) => void;
  reduceProductAmount: (id: number) => void;
  handleRemoveOption: (id: number, color: string, size: string) => void;
}

export default function OptionProductBox({
  productOption,
  price,
  addProductAmount,
  reduceProductAmount,
  handleRemoveOption,
}: OptionProductBoxProps) {
  const { id, color, size, amount } = productOption;

  return (
    <Container>
      <QuantityBox>
        <p>{color}</p>
        <p>{size}</p>
        <Count>
          <ReduceBtn
            onClick={() => reduceProductAmount(id)}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
          {amount}
          <AddBtn
            onClick={() => addProductAmount(id)}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
        </Count>
        <CancelBtn onClick={() => handleRemoveOption(id, color, size)}>
          <FaXmark />
        </CancelBtn>
      </QuantityBox>
      <ProductTotalCost>
        상품금액
        <TotalCost>
          {(price * amount).toLocaleString()}원 ({amount}개)
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
