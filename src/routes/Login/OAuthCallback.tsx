import { Navigate, useSearchParams } from "react-router-dom";

import NotFound from "@/routes/NotFound";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const error = searchParams.get("error");

  // 이미 로그인 상태인 경우 홈으로 리다이렉트
  if (localStorage.getItem("token")) return <Navigate to="/" replace />;

  // 이메일 가입한 회원인 경우 로그인 페이지로 리다이렉트
  if (error) {
    alert("이메일 가입 회원입니다! 이메일 로그인을 이용해 주세요.");
    // <Navigate /> 사용 시 alert가 뜨기 전에 리다이렉트 됨
    location.href = "/login";
  }

  // 토큰 저장 후 홈으로 리다이렉트
  if (token) {
    localStorage.setItem("token", token);
    return <Navigate to="/" replace />;
  }

  return <NotFound />;
}
