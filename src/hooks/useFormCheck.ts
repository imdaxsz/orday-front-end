import { useState } from "react";

import useCheckBox from "./useCheckBox";

export default function useFormCheck(form: OrderForm) {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const { checkedListById, handleCheckChange } = useCheckBox();
  const AGREEMENT_1 = 1;
  const AGREEMENT_2 = 2;

  const validateForm = () => {
    const { name, phoneNumber, addressInfo, selectedMethod } = form;

    if (name.trim().length === 0) {
      setModalMessage("이름을 입력해주세요.");
      return false;
    }
    if (!/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(phoneNumber)) {
      setModalMessage("연락처를 입력해주세요.");
      return false;
    }
    if (
      !addressInfo.postcode ||
      !addressInfo.address ||
      addressInfo.addressDetail.trim().length === 0
    ) {
      setModalMessage("주소를 입력해주세요.");
      return false;
    }
    if (!selectedMethod) {
      setModalMessage("결제수단을 선택해주세요.");
      return false;
    }

    if (!checkedListById.includes(AGREEMENT_1)) {
      setModalMessage("주문정보에 동의해주세요.");
      return false;
    }
    if (!checkedListById.includes(AGREEMENT_2)) {
      setModalMessage("제 3자 제공에 동의해주세요.");
      return false;
    }

    setModalMessage(null);
    return true;
  };

  return { modalMessage, validateForm, handleCheckChange };
}
