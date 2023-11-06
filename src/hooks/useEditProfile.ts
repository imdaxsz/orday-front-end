import { useState } from "react";

import { updateUserInfo } from "@/api/AuthApi";
import { DEFAULT_USER_INFO_DATA } from "@/constants";

import useForm from "./useForm";
import { useModal } from "./useModal";

const INIT_ERROR = {
  name: false,
  password: 0,
  confirmPassword: false,
  phoneNumber: 0,
  birthDate: false,
  address: false,
};

export default function useEditProfile(option?: "join") {
  const { isModalOpen, openModal, closeModal } = useModal(); // 수정 완료 모달

  const {
    form,
    phone,
    updatedInfo,
    socialInfo,
    handleInputChange,
    updateForm,
    resetInfo,
  } = useForm<UserInfoForm>(DEFAULT_USER_INFO_DATA, option);

  const [error, setError] = useState<UserInfoFormError>(INIT_ERROR);

  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateForm({ confirmPassword: value });
    setError((prev) => ({ ...prev, confirmPassword: value !== form.password }));
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
    setError((prev) => ({ ...prev, password: 0, confirmPassword: false }));
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,16}$/;
    if (!passwordPattern.test(form.password)) {
      setError((prev) => ({ ...prev, password: 2 }));
      isValidate = false;
    }
    if (form.password !== form.confirmPassword) {
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

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormDataValidate = validateFormData();
    let isPasswordValidate = true;
    if (form.password !== "") isPasswordValidate = validatePassword();
    if (isFormDataValidate && isPasswordValidate) {
      const updatedUserInfoItems = updatedInfo();
      console.log(updatedUserInfoItems);
      // 기존 회원 정보에서 변경된 부분이 있는 경우에만 변경 요청
      if (Object.keys(updatedUserInfoItems).length !== 0)
        await updateUserInfo(updatedUserInfoItems);
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
    validatePassword,
    validateFormData,
    onSubmit,
    successModal: {
      isModalOpen,
      closeModal,
    },
  };
}
