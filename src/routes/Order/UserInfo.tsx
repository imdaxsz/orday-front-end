import { styled } from "styled-components";

import TextInput from "@/components/TextInput";

interface UserInfoProps {
  form: OrderForm;
  phone: Phone;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PHONEPART,
  ) => void;
}

export default function UserInfo({
  form,
  phone,
  handleInputChange,
}: UserInfoProps) {
  return (
    <>
      <h3>주문자 정보</h3>
      <InfoContainer>
        <TextInput
          id="name"
          type="text"
          value={form.name}
          onChange={handleInputChange}
          label="이름"
          $size="md"
        />
        <PhoneNumber>
          <TextInput
            id="phoneFirst"
            type="text"
            value={phone.first}
            label="연락처"
            onChange={(e) => handleInputChange(e, "first")}
            maxLength={3}
          />
          <TextInput
            id="phoneSecond"
            type="text"
            value={phone.second}
            onChange={(e) => handleInputChange(e, "second")}
            maxLength={4}
          />
          <TextInput
            id="phoneThird"
            type="text"
            value={phone.third}
            onChange={(e) => handleInputChange(e, "third")}
            maxLength={4}
          />
        </PhoneNumber>
      </InfoContainer>
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
