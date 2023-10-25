import { useState } from "react";

import useForm from "./useForm";
import { useModal } from "./useModal";

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

  const { form, phone, socialInfo, handleInputChange, updateForm, resetInfo } =
    useForm<UserInfoForm>(DEFAULT_DATA);

  const [error, setError] = useState<UserInfoFormError>(INIT_ERROR);

  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateForm({ confirmPw: value });
    setError((prev) => ({ ...prev, confirmPw: value !== form.password }));
  };

  // 생년월일
  const handleSelectChange = (id: string, value: string) => {
    updateForm({ birthDate: { ...form.birthDate, [id]: value } });
  };

  // 주소
  const handleAddressChange = (postcode: string, address: string) => {
    updateForm({
      addressInfo: {
        ...form.addressInfo,
        postcode,
        address,
      },
    });
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
      if (phone[key as keyof Phone].trim().length === 0) {
        setError((prev) => ({ ...prev, phoneNumber: 1 }));
        isValidate = false;
      } else if (!/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(form.phoneNumber)) {
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
    resetInfo();
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
    handleConfirmPwChange,
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
