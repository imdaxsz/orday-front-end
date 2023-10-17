import { useState } from "react";

interface Phone {
  first: string;
  second: string;
  third: string;
}

interface BirthDate {
  year: string;
  month: string;
  day: string;
}

interface Address {
  postcode: string;
  address: string;
  addressDetail?: string;
}

interface JoinForm {
  email: string;
  password: string;
  confirmPw: string;
  name: string;
  phone: Phone;
  birthDate: BirthDate;
  addressInfo: Address;
}

interface Agree {
  mandatory: boolean; // 필수 항목 여부
  userAgreed: boolean;
}

export default function useJoin() {
  type PHONEPART = keyof Phone;

  const [form, setForm] = useState<JoinForm>({
    email: "",
    password: "",
    confirmPw: "",
    name: "",
    phone: {
      first: "",
      second: "",
      third: "",
    },
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
  });

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
        if (allChecked)
          return prev.map((item) => ({
            ...item,
            userAgreed: false,
          }));
        else
          return prev.map((item) => ({
            ...item,
            userAgreed: true,
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
    if (part && part in form.phone) {
      setForm((prev) => ({
        ...prev,
        phone: { ...prev.phone, [part]: value },
      }));
    } else setForm((prev) => ({ ...prev, [id]: value }));
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

  // 폼 유효성 검사
  const validateForm = () => {
    // TODO
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
    console.log(form);

    // API 요청
  };

  return {
    form,
    agree,
    handleAddressChange,
    handleInputChange,
    handleSelectChange,
    handleAgreeChange,
    handleSubmit,
  };
}
