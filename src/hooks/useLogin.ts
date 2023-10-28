import { useState } from "react";

import { login } from "@/api/AuthApi";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const INIT_ERROR = {
    email: false,
    password: false,
    result: false,
  };
  const [error, setError] = useState(INIT_ERROR);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: "email" | "password",
  ) => {
    if (target === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const validateForm = () => {
    setError(INIT_ERROR);
    const isEmailEmpty = email.trim().length === 0;
    const isPasswordEmpty = password.trim().length === 0;

    if (isEmailEmpty) setError((prev) => ({ ...prev, email: true }));
    if (isPasswordEmpty) setError((prev) => ({ ...prev, password: true }));
    if (isEmailEmpty || isPasswordEmpty) return false;

    return true;
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidate = validateForm();
    if (isValidate) {
      const result = await login(email, password);
      // TODO: 로그인 결과 확인
      // 성공 시
      // navigate("/");
      // 실패 시
      // error.result = true;
    }
  };

  return {
    email,
    password,
    error,
    handleInputChange,
    onSubmit,
  };
}
