import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { join } from "@/api/AuthApi";
import { ApiError } from "@/libs/error";

import useEditProfile from "./useEditProfile";

interface Agree {
  mandatory: boolean; // 필수 항목 여부
  userAgreed: boolean;
}

export default function useJoin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    form,
    error: formError,
    phone,
    handleInputChange,
    handleSelectChange,
    handleAddressChange,
    handleConfirmPwChange,
    validatePassword,
    validateFormData,
  } = useEditProfile("join");

  const INIT_ERROR = {
    ...formError,
    email: 0,
    terms: false,
    result: 0,
  };

  const [joinError, setJoinError] = useState<JoinFormError>(INIT_ERROR);

  useEffect(() => {
    setJoinError((prev) => ({ ...prev, ...formError }));
  }, [formError]);

  const [agree, setAgree] = useState<Agree[]>([
    {
      // 전체 동의
      mandatory: false,
      userAgreed: false,
    },
    {
      mandatory: true,
      userAgreed: false,
    },
    {
      mandatory: true,
      userAgreed: false,
    },
    {
      mandatory: false,
      userAgreed: false,
    },
  ]);

  const handleAgreeChange = (i: number) => {
    // 전체 동의 또는 해제
    if (i === 0) {
      setAgree((prev) => {
        const allChecked = prev.every((item) => item.userAgreed);
        return prev.map((item) => ({
          ...item,
          userAgreed: !allChecked,
        }));
      });
    }
    // 개별 동의 또는 해제
    else {
      setAgree((prev) => {
        const updated = [...prev];
        updated[i] = { ...updated[i], userAgreed: !updated[i].userAgreed };
        return updated;
      });
    }
  };

  // 폼 유효성 검사
  const validateForm = () => {
    let isValidate = true;
    setJoinError(INIT_ERROR);

    // 이메일, 비밀번호 제외 form 유효성 검사
    isValidate = validateFormData();

    // 이메일 패턴 및 빈 문자열 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      setJoinError((prev) => ({ ...prev, email: 2 }));
      isValidate = false;
    }
    if (form.email.trim().length === 0)
      setJoinError((prev) => ({ ...prev, email: 1 }));

    // 비밀번호 패턴 검사
    isValidate = validatePassword();
    if (form.password.trim().length === 0)
      setJoinError((prev) => ({ ...prev, password: 1 }));

    // 필수 약관 동의 여부 확인
    const hasDisagree = agree.find(
      (item) => item.mandatory && !item.userAgreed,
    );
    if (hasDisagree) {
      setJoinError((prev) => ({ ...prev, terms: true }));
      isValidate = false;
    }

    return isValidate;
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidate = validateForm();
    console.log(form);

    if (isValidate) {
      setIsLoading(true);
      try {
        await join(form);
        setIsLoading(false);
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } catch (error) {
        if (error instanceof ApiError && error.status === 409) {
          // DB에 이미 존재하는 이메일인 경우
          if (error.code === "U001")
            setJoinError((prev) => ({ ...prev, result: 1 }));
          // 소셜 연동 가입 회원인 경우
          else setJoinError((prev) => ({ ...prev, result: 2 }));
        }
        setIsLoading(false);
        console.log("Error join: ", error);
      }
    }
  };

  return {
    isLoading,
    form,
    phone,
    agree,
    joinError,
    handleAddressChange,
    handleInputChange,
    handleConfirmPwChange,
    handleSelectChange,
    handleAgreeChange,
    handleSubmit,
  };
}
