import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { signout } from "@/store/slices/authSlice";

export default function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispatch(signout());
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }, [dispatch, navigate]);

  return { logout };
}
