import { Navigate, useSearchParams } from "react-router-dom";

import NotFound from "@/routes/NotFound";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  // 이미 로그인 상태인 경우 홈으로 리다이렉트
  if (localStorage.getItem("token")) return <Navigate to="/" replace />;

  // 토큰 저장 후 홈으로 리다이렉트
  if (token) {
    localStorage.setItem("token", token);
    return <Navigate to="/" replace />;
  }

  return <NotFound />;
}
