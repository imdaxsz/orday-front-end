import { useState, useEffect } from "react";

import { useModal } from "./useModal";

const MOCK_DATA = {
  id: 1,
  email: "test@naver.com",
  name: "홍길동",
  phoneNumber: "010-1234-5678",
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
  socialType: "WEB",
  isInfoSet: true,
};

const GOOGLE_USER_MOCK_DATA = {
  id: 2,
  email: "test@naver.com",
  name: "홍길동",
  phoneNumber: "-",
  birthDate: {
    year: "",
    month: "",
    day: "",
  },
  addressInfo: {
    postcode: "",
    address: "",
    addressDetail: "",
  },
  socialType: "GOOGLE",
  isInfoSet: false,
};

const DEFAULT_DATA: UserInfoForm = {
  email: "",
  password: "",
  confirmPw: "",
  name: "",
  phoneNumber: "",
  birthDate: {
    year: "",
    month: "",
    day: "",
  },
  addressInfo: {
    postcode: "",
    address: "",
    addressDetail: "",
  },
};

const INIT_ERROR = {
  name: false,
  password: 0,
  confirmPw: false,
  phoneNumber: 0,
  birthDate: false,
  address: false,
};

export default function useEditProfile() {
  const { isModalOpen, openModal, closeModal } = useModal(); // 수정 완료 모달

  const [phone, setPhone] = useState<Phone>({
    first: DEFAULT_DATA.phoneNumber.split("-")[0],
    second: DEFAULT_DATA.phoneNumber.split("-")[1],
    third: DEFAULT_DATA.phoneNumber.split("-")[2],
  });

  const [form, setForm] = useState<UserInfoForm>(DEFAULT_DATA);
  const [socialInfo, setSocialInfo] = useState({
    socialType: "",
    isInfoSet: false, // 회원이 가입 시 정보 설정을 했는지
  });

  const [error, setError] = useState<UserInfoFormError>(INIT_ERROR);

  // phone number form에 update
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      phoneNumber: `${phone.first}-${phone.second}-${phone.third}`,
    }));
  }, [phone]);

  // 서버에서 회원 정보 조회
  useEffect(() => {
    // TODO: api 요청
    const { socialType, isInfoSet, ...formData } = GOOGLE_USER_MOCK_DATA;
    setSocialInfo({ socialType, isInfoSet });
    if (isInfoSet) setForm((prev) => ({ ...prev, ...formData }));
    else
      setForm((prev) => ({ ...prev, ...formData, name: "", phoneNumber: "" }));
    setPhone({
      first: formData.phoneNumber.split("-")[0] || "",
      second: formData.phoneNumber.split("-")[1] || "",
      third: formData.phoneNumber.split("-")[2] || "",
    });
  }, []);

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
    else if (part && part in phone)
      setPhone((prev) => ({ ...prev, [part]: value }));
    else setForm((prev) => ({ ...prev, [id]: value }));

    // 비밀번호 & 비밀번호 확인 일치 여부 확인, 오류 설정
    if (id === "confirmPw")
      setError((prev) => ({ ...prev, confirmPw: value !== form.password }));
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
    let isValidate = true;
    setError((prev) => ({ ...prev, password: 0, confirmPw: false }));
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,16}$/;
    if (!passwordPattern.test(form.password)) {
      setError((prev) => ({ ...prev, password: 2 }));
      isValidate = false;
    }
    if (form.password !== form.confirmPw) {
      setError((prev) => ({ ...prev, confirmPw: true }));
      isValidate = false;
    }
    return isValidate;
  };

  // 비밀번호 제외 폼 유효성 검사
  const validateFormData = () => {
    let isValidate = true;
    setError(INIT_ERROR);

    /* 빈 항목 검사 */

    if (form.name.trim().length === 0)
      setError((prev) => ({ ...prev, name: true }));

    // 연락처
    for (const key in phone) {
      console.log(phone);
      console.log(phone[key as keyof Phone].trim().length);
      if (phone[key as keyof Phone].trim().length === 0) {
        setError((prev) => ({ ...prev, phoneNumber: 1 }));
        isValidate = false;
      } else if (!/^\d+$/.test(phone[key as keyof Phone])) {
        setError((prev) => ({ ...prev, phoneNumber: 2 }));
        isValidate = false;
      }
    }

    // 생년월일
    for (const key in form.birthDate) {
      if (form.birthDate[key as keyof BirthDate].trim().length === 0) {
        setError((prev) => ({ ...prev, birthDate: true }));
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
      first: MOCK_DATA.phoneNumber.split("-")[0] || "",
      second: MOCK_DATA.phoneNumber.split("-")[1] || "",
      third: MOCK_DATA.phoneNumber.split("-")[2] || "",
    });
    setForm({ ...DEFAULT_DATA, ...MOCK_DATA });
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
    socialInfo,
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
