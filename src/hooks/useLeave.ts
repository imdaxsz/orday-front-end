import { useState } from "react";

export default function useLeave() {
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  const handleClickConfirm = () => {
    setConfirm((prev) => !prev);
  };

  const leave = (openModal: () => void) => {
    setError(!confirm);
    if (confirm) {
      // TODO: 회원 탈퇴 요청
      openModal();
    }
  };

  return {
    confirm,
    error,
    handleClickConfirm,
    leave,
  };
}
