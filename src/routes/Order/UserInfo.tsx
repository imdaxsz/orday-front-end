import { useEffect, useState } from "react";
import { styled } from "styled-components";

import TextInput from "@/components/TextInput";

interface UserInfoProps {
  user?: "member" | "guest";
}

type PhoneNumber = "first" | "second" | "third";

export default function UserInfo({ user = "member" }: UserInfoProps) {
  const [infoForm, setInfoForm] = useState({
    name: "",
    phone: {
      first: "010",
      second: "",
      third: "",
    },
  });
  const [emailForm, setEmailForm] = useState({
    emailId: "",
    emailAddress: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PhoneNumber,
  ) => {
    const { id, value } = e.target;

    // guest일때 emailForm 추가
    if (user === "guest" && id in emailForm) {
      setEmailForm((prev) => ({ ...prev, [id]: value }));
    }

    // member, guest 공통부분
    if (id in infoForm) {
      setInfoForm((prev) => ({ ...prev, [id]: value }));
    }
    if (part && part in infoForm.phone) {
      setInfoForm((prev) => ({
        ...prev,
        phone: { ...prev.phone, [part]: value },
      }));
    }
  };

  // member일때 사용자정보 가져오기
  useEffect(() => {
    if (user === "member") {
      // fetch get UserInfo
      // 임시데이터
      const user = {
        name: "홍길동",
        phone: {
          first: "010",
          second: "0000",
          third: "0000",
        },
      };
      setInfoForm(user);
    }
  }, []);

  return (
    <>
      <h3>주문자 정보</h3>
      <InfoContainer>
        <TextInput
          id="name"
          type="text"
          value={infoForm.name}
          onChange={handleInputChange}
          label="이름"
          $size="md"
        />
        <PhoneNumber>
          <TextInput
            id="phoneFirst"
            type="text"
            value={infoForm.phone.first}
            label="휴대전화"
            onChange={(e) => handleInputChange(e, "first")}
          />
          <TextInput
            id="phoneSecond"
            type="text"
            value={infoForm.phone.second}
            onChange={(e) => handleInputChange(e, "second")}
          />
          <TextInput
            id="phoneThird"
            type="text"
            value={infoForm.phone.third}
            onChange={(e) => handleInputChange(e, "third")}
          />
        </PhoneNumber>
      </InfoContainer>

      {user === "guest" && (
        <InfoContainer>
          <TextInput
            id="emailId"
            type="text"
            value={emailForm.emailId}
            label="이메일"
            onChange={handleInputChange}
            $size="md"
          />
          <EmailAt>@</EmailAt>
          <TextInput
            id="emailAddress"
            type="text"
            value={emailForm.emailAddress}
            onChange={handleInputChange}
            $size="md"
          />
        </InfoContainer>
      )}
    </>
  );
}

const InfoContainer = styled.div`
  position: relative;
  max-width: 805px;
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: flex-end;
  input {
    height: 40px;
    border: solid 1px #d6d6d6;
  }
`;
const PhoneNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.75rem;

  input {
    width: 100%;
  }
`;
const EmailAt = styled.span`
  position: absolute;
  top: 50%;
  left: 395px;
  color: ${({ theme }) => theme.colors["neutral"]["60"]};
`;
