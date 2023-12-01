import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { logout as request } from "@/api/AuthApi";

export default function useLogout() {
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    try {
      await request();
      localStorage.removeItem("token");
    } catch (error) {
      console.log("Logout Error", error);
      alert("오류가 발생했어요. 다시 시도해 주세요");
    }
    navigate("/", { replace: true });
  }, [navigate]);

  return { logout };
}
