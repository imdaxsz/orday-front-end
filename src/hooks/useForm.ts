import { useEffect, useState, useCallback } from "react";

import { getUserInfo as requestGetUserInfo } from "@/api/AuthApi";

// TODO: MOCK_DATA 제거

// const GOOGLE_USER_MOCK_DATA = {
//   id: 2,
//   email: "test@naver.com",
//   name: "홍길동",
//   phoneNumber: "010-0000-0000",
//   birthDate: {
//     year: "",
//     month: "",
//     day: "",
//   },
//   addressInfo: {
//     postcode: "",
//     address: "",
//     addressDetail: "",
//   },
//   socialType: "GOOGLE",
//   infoSet: false,
// };

export default function useForm<T extends { addressInfo?: Address }>(
  initialState: T,
  option?: "join",
) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const [phone, setPhone] = useState<Phone>({
    first: "",
    second: "",
    third: "",
  });

  const [currentUserInfo, setCurrentUserInfo] = useState(initialState); // 현재 회원 정보
  const [currentPhone, setCurrentPhone] = useState<Phone>({ ...phone }); // 현재 회원 폰

  const [socialInfo, setSocialInfo] = useState({
    socialType: "",
    infoSet: false, // 회원이 가입 시 정보 설정을 했는지
  });

  // 회원정보 조회
  const getUserInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const { socialType, infoSet, id, birthDate, ...formData } =
        await requestGetUserInfo();
      // const { socialType, infoSet, id, birthDate, ...formData } =
      //   GOOGLE_USER_MOCK_DATA;
      if ("id" in form || "birthDate" in form) {
        setForm((prev) => ({ ...prev, id, birthDate, ...formData }));
        setCurrentUserInfo((prev) => ({ ...prev, id, birthDate, ...formData }));
        setSocialInfo({ socialType, infoSet });
      } else {
        setForm((prev) => ({ ...prev, ...formData }));
      }
      const phoneData = {
        first: formData.phoneNumber.split("-")[0] || "",
        second: formData.phoneNumber.split("-")[1] || "",
        third: formData.phoneNumber.split("-")[2] || "",
      };
      if (infoSet) {
        setPhone(phoneData);
        setCurrentPhone(phoneData);
      }
    } catch (error) {
      console.log("Error fetching user info: ", error);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!option) getUserInfo();
  }, [option, getUserInfo]);

  const resetInfo = () => {
    setForm({ ...currentUserInfo });
    setPhone({ ...currentPhone });
  };

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      phoneNumber: `${phone.first}-${phone.second}-${phone.third}`,
    }));
  }, [phone]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PHONEPART,
  ) => {
    const { id, value } = e.target;

    if (part && part in phone) {
      const numberVal = value.replace(/[^0-9]/g, "");
      setPhone((prev) => ({ ...prev, [part]: numberVal }));
    } else if (id === "addressDetail") {
      setForm((prev) => ({
        ...prev,
        addressInfo: { ...prev.addressInfo, addressDetail: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const updateForm = (updates: Partial<T>) => {
    setForm((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  /**@description 회원 정보 중 기존 데이터에서 수정된 항목만 return */
  const updatedInfo = () => {
    const updatedData: Partial<T> = {};
    for (const key in form) {
      if (JSON.stringify(form[key]) !== JSON.stringify(currentUserInfo[key]))
        updatedData[key] = form[key];
    }
    return updatedData;
  };

  return {
    isLoading,
    form,
    phone,
    socialInfo,
    handleInputChange,
    updateForm,
    updatedInfo,
    resetInfo,
  };
}
