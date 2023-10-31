import { useEffect } from "react";

import useLogout from "@/hooks/useLogout";

export default function Logout() {
  const { logout } = useLogout();

  useEffect(() => {
    logout();
  }, [logout]);

  return <></>;
}
