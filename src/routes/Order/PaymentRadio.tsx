import { useState } from "react";
import { styled } from "styled-components";

import Button from "@/components/Button";

export default function PaymentRadio() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedMethod(index);
  };

  return (
    <>
      <h3>결제수단 선택</h3>
      <PaymentGroup>
        <Button
          color={selectedMethod === 0 ? undefined : "neutral"}
          onClick={() => handleButtonClick(0)}
        >
          카드
        </Button>
        <Button
          color={selectedMethod === 1 ? undefined : "neutral"}
          onClick={() => handleButtonClick(1)}
        >
          계좌이체
        </Button>
        <Button
          color={selectedMethod === 2 ? undefined : "neutral"}
          onClick={() => handleButtonClick(2)}
        >
          카카오페이
        </Button>
      </PaymentGroup>
    </>
  );
}
const PaymentGroup = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 14px;
  button {
    width: 260px;
    height: 40px;
    font-size: 14px;
  }
`;
