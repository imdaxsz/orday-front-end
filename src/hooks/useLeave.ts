import { useState } from "react";

import { leave } from "@/api/AuthApi";

export default function useLeave() {
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  const handleClickConfirm = () => {
    setConfirm((prev) => !prev);
  };

  const requestLeave = async (openModal: () => void) => {
    setError(!confirm);
    if (confirm) {
      try {
        await leave();
        openModal();
      } catch (error) {
        console.log("Error leave: ", error);
      }
    }
  };

  return {
    confirm,
    error,
    handleClickConfirm,
    requestLeave,
  };
}
