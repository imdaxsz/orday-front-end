import { useState, useEffect } from "react";

import { useModal } from "./useModal";

const MOCK_DATA = {
  email: "test@naver.com",
  password: "",
  confirmPw: "",
  name: "홍길동",
  phone: "010-1234-5678",
  birthDate: {
    year: "2023",
    month: "10",
    day: "19",
  },
  addressInfo: {
    postcode: "12345",
    address: "서울시 강남구 어쩌고",
    addressDetail: "102동 203호",
  },
};

export default function useEditProfile() {
  const { isModalOpen, openModal, closeModal } = useModal(); // 수정 완료 모달

  const [phone, setPhone] = useState<Phone>({
    first: MOCK_DATA.phone.split("-")[0],
    second: MOCK_DATA.phone.split("-")[1],
    third: MOCK_DATA.phone.split("-")[2],
  });

  const [form, setForm] = useState<UserInfoForm>(MOCK_DATA);

  // phone number form에 update
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      phone: `${phone.first}-${phone.second}-${phone.third}`,
    }));
  }, [phone]);

  const INIT_ERROR = {
    password: 0,
    confirmPw: false,
    phone: 0,
    birthDate: false,
    address: false,
  };

  const [error, setError] = useState<UserInfoFormError>(INIT_ERROR);

  // 이메일, 이름, 비번, 비번확인, 휴대폰, 상세 주소
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    target?: "phone" | "address",
    part?: PHONEPART,
  ) => {
    const { id, value } = e.target;
    if (target === "address")
      setForm((prev) => ({
        ...prev,
        addressInfo: { ...prev.addressInfo, addressDetail: value },
      }));
    if (part && part in phone) setPhone((prev) => ({ ...prev, [part]: value }));
    else setForm((prev) => ({ ...prev, [id]: value }));

    // 비밀번호 & 비밀번호 확인 일치 여부 확인, 오류 설정
    if (id === "confirmPw") {
      if (value !== form.password)
        setError((prev) => ({ ...prev, confirmPw: true }));
      else setError((prev) => ({ ...prev, confirmPw: false }));
    }
  };

  // 생년월일
  const handleSelectChange = (id: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      birthDate: { ...prev.birthDate, [id]: value },
    }));
  };

  // 주소
  const handleAddressChange = (postcode: string, address: string) => {
    setForm((prev) => ({
      ...prev,
      addressInfo: {
        ...prev.addressInfo,
        postcode,
        address,
      },
    }));
  };

  // 비밀번호 유효성 검사
  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,16}$/;
    if (!passwordPattern.test(form.password)) {
      setError((prev) => ({ ...prev, password: 2 }));
      return false;
    }
    if (form.password !== form.confirmPw) {
      setError((prev) => ({ ...prev, confirmPw: false }));
      return false;
    }
    return true;
  };

  // 비밀번호 제외 폼 유효성 검사
  const validateFormData = () => {
    let isValidate = true;
    setError(INIT_ERROR);

    /* 빈 항목 검사 */
    // 연락처
    for (const key in phone) {
      if (phone[key as keyof Phone].trim().length === 0) {
        setError((prev) => ({ ...prev, phone: 1 }));
        isValidate = false;
      } else if (!/^\d+$/.test(phone[key as keyof Phone])) {
        setError((prev) => ({ ...prev, phone: 2 }));
        isValidate = false;
      }
    }

    // 상세 주소
    if (form.addressInfo.addressDetail.trim().length === 0) {
      setError((prev) => ({ ...prev, address: true }));
      isValidate = false;
    }

    return isValidate;
  };

  // 변경 취소
  const cancelUpdate = () => {
    setPhone({
      first: MOCK_DATA.phone.split("-")[0],
      second: MOCK_DATA.phone.split("-")[1],
      third: MOCK_DATA.phone.split("-")[2],
    });
    setForm(MOCK_DATA);
    setError(INIT_ERROR);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormDataValidate = validateFormData();
    let isPasswordValidate = true;
    if (form.password !== "") isPasswordValidate = validatePassword();
    console.log(form);
    if (isFormDataValidate && isPasswordValidate) {
      // TODO 회원정보 수정 요청
      openModal();
    }
  };

  return {
    form,
    phone,
    error,
    handleInputChange,
    handleSelectChange,
    handleAddressChange,
    cancelUpdate,
    onSubmit,
    successModal: {
      isModalOpen,
      closeModal,
    },
  };
}
