import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

import {
  CostBox,
  QuantityBox,
  Size,
  Count,
  Decrease,
  Increase,
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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
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
          <Decrease onClick={decreaseQuantity}>-</Decrease>
          {quantity}
          <Increase onClick={increaseQuantity}>+</Increase>
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
