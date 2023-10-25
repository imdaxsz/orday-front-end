import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { join } from "@/api/AuthApi";

import useEditProfile from "./useEditProfile";

interface Agree {
  mandatory: boolean; // 필수 항목 여부
  userAgreed: boolean;
}

export default function useJoin() {
  const navigate = useNavigate();

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
  };

  const [error, setError] = useState<JoinFormError>(INIT_ERROR);

  useEffect(() => {
    setError((prev) => ({ ...prev, ...formError }));
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
    setError(INIT_ERROR);

    // 이메일, 비밀번호 제외 form 유효성 검사
    isValidate = validateFormData();

    // 이메일 패턴 및 빈 문자열 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      setError((prev) => ({ ...prev, email: 2 }));
      isValidate = false;
    }
    if (form.email.trim().length === 0)
      setError((prev) => ({ ...prev, email: 1 }));

    // 비밀번호 패턴 검사
    isValidate = validatePassword();
    if (form.password.trim().length === 0)
      setError((prev) => ({ ...prev, password: 1 }));

    // 필수 약관 동의 여부 확인
    const hasDisagree = agree.find(
      (item) => item.mandatory && !item.userAgreed,
    );
    if (hasDisagree) {
      setError((prev) => ({ ...prev, terms: true }));
      isValidate = false;
    }

    return isValidate;
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidate = validateForm();
    console.log(isValidate);
    console.log(form);
    // TODO: API 요청
    if (isValidate) {
      const res = await join(form);
      // if (성공) window.alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return {
    form,
    phone,
    agree,
    error,
    handleAddressChange,
    handleInputChange,
    handleConfirmPwChange,
    handleSelectChange,
    handleAgreeChange,
    handleSubmit,
  };
}
