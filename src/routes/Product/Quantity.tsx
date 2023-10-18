import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

import AddBtn from "@/assets/add_btn.svg?react";
import ReduceBtn from "@/assets/reduce_btn.svg?react";

import {
  CostBox,
  QuantityBox,
  Size,
  Count,
  CancelBtn,
  ProductTotalCost,
  TotalCost,
} from "./Quantity.style";

interface QuantityProps {
  selectedSize: string;
  price: string;
  handleCancel: () => void;
}

export default function ProductQuantity({
  selectedSize,
  price,
  handleCancel,
}: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  const AddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const ReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCancelClick = () => {
    handleCancel();
  };

  return (
    <CostBox>
      <QuantityBox>
        <Size>{selectedSize}</Size>
        <Count>
          <ReduceBtn
            onClick={ReduceQuantity}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
          {quantity}
          <AddBtn
            onClick={AddQuantity}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
        </Count>
        <CancelBtn onClick={handleCancelClick}>
          <FaXmark />
        </CancelBtn>
      </QuantityBox>
      <ProductTotalCost>
        총 상품금액
        <TotalCost>
          {(parseInt(price) * quantity).toLocaleString()}원 ({quantity}개)
        </TotalCost>
      </ProductTotalCost>
    </CostBox>
  );
}
