import { useState } from "react";

import { leave } from "@/api/AuthApi";

export default function useLeave() {
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickConfirm = () => {
    setConfirm((prev) => !prev);
  };

  const requestLeave = async (openModal: () => void) => {
    setError(!confirm);
    if (confirm) {
      setIsLoading(true);
      try {
        await leave();
        openModal();
      } catch (error) {
        console.log("Error leave: ", error);
      }
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    confirm,
    error,
    handleClickConfirm,
    requestLeave,
  };
}
