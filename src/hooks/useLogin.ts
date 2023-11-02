import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "@/api/AuthApi";
import { ApiError } from "@/libs/error";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const INIT_ERROR = {
    email: false,
    password: false,
    result: false,
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
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        if (error instanceof ApiError && error.status === 400)
          loginError.result = true;
        console.log("Error login: ", error);
      }
    }
  };

  return {
    email,
    password,
    loginError,
    handleInputChange,
    onSubmit,
  };
}
