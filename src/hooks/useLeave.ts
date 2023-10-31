import { useState } from "react";

import { leave } from "@/api/AuthApi";

import useLogout from "./useLogout";

export default function useLeave() {
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  const { logout } = useLogout();

  const handleClickConfirm = () => {
    setConfirm((prev) => !prev);
  };

  const requestLeave = async (openModal: () => void) => {
    setError(!confirm);
    if (confirm) {
      try {
        await leave();
        logout();
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
