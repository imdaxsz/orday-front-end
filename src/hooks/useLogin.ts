import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "@/api/AuthApi";
import { ApiError } from "@/libs/error";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const INIT_ERROR = {
    email: false,
    password: false,
    result: 0,
  };
  const [loginError, setLoginError] = useState(INIT_ERROR);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: "email" | "password",
  ) => {
    if (target === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const validateForm = () => {
    setLoginError(INIT_ERROR);
    const isEmailEmpty = email.trim().length === 0;
    const isPasswordEmpty = password.trim().length === 0;

    if (isEmailEmpty) setLoginError((prev) => ({ ...prev, email: true }));
    if (isPasswordEmpty) setLoginError((prev) => ({ ...prev, password: true }));
    if (isEmailEmpty || isPasswordEmpty) return false;

    return true;
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidate = validateForm();
    if (isValidate) {
      setIsLoading(true);
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        if (error instanceof ApiError && error.status === 400) {
          // 소셜 연동 가입 회원인 경우
          if (error.code === "U004")
            setLoginError((prev) => ({ ...prev, result: 2 }));
          // 해당되는 사용자 정보가 없는 경우
          else setLoginError((prev) => ({ ...prev, result: 1 }));
        }
        console.log("Error login: ", error);
      }
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    email,
    password,
    loginError,
    handleInputChange,
    onSubmit,
  };
}
