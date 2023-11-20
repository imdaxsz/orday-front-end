import { styled } from "styled-components";

import Button from "@/components/Button";

interface PaymentRadio {
  form: OrderForm;
  updateForm: (updates: Partial<OrderForm>) => void;
}

export default function PaymentRadio({ form, updateForm }: PaymentRadio) {
  return (
    <>
      <h3>결제수단 선택</h3>
      <PaymentGroup>
        <Button
          color={form.selectedMethod === 1 ? undefined : "neutral"}
          onClick={() => updateForm({ selectedMethod: 1 })}
        >
          카드
        </Button>
        <Button
          color={form.selectedMethod === 2 ? undefined : "neutral"}
          onClick={() => updateForm({ selectedMethod: 2 })}
        >
          계좌이체
        </Button>
        <Button
          color={form.selectedMethod === 3 ? undefined : "neutral"}
          onClick={() => updateForm({ selectedMethod: 3 })}
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
