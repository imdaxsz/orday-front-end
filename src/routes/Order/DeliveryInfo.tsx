import { useState } from "react";
import { styled } from "styled-components";

import Button from "@/components/Button";
import { RadioButton } from "@/components/RadioButton";
import TextInput from "@/components/TextInput";

interface DeliveryInfoProps {
  user?: "member" | "guest";
}
type PhoneNumber = "first" | "second" | "third";

export default function DeliveryInfo({ user = "member" }: DeliveryInfoProps) {
  const [infoForm, setInfoForm] = useState({
    name: "",
    phone: {
      first: "010",
      second: "",
      third: "",
    },
  });
  const [deliveryForm, setDeliveryForm] = useState({
    deliveryAddress: "",
    deliveryDetail: "",
  });
  const [radioValue, setRadioValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PhoneNumber,
  ) => {
    const { id, value } = e.target;
    if (user === "guest" && id in infoForm) {
      if (part && part in infoForm.phone) {
        setInfoForm((prev) => ({
          ...prev,
          phone: { ...prev.phone, [part]: value },
        }));
      } else setInfoForm((prev) => ({ ...prev, [id]: value }));
    }

    // member, guest 공통부분
    if (id in deliveryForm) {
      setDeliveryForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };
  console.log("radioValue", radioValue);

  return (
    <Container>
      <h3>배송 정보</h3>
      {user === "guest" && (
        <>
          <RadioGroup>
            <RadioButton
              value="basic"
              name="deliveryInfo"
              id="1"
              handleRadio={handleRadio}
              text="주문자 정보와 동일"
            />
            <RadioButton
              value="new"
              name="deliveryInfo"
              id="2"
              handleRadio={handleRadio}
              text="새로운 배송지"
            />
          </RadioGroup>

          <InfoContainer>
            <TextInput
              id="name"
              type="text"
              value={infoForm.name}
              onChange={handleInputChange}
              label="받는사람"
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
        </>
      )}

      <DeliverySearch>
        <TextInput
          id="deliveryAddress"
          type="text"
          value={deliveryForm.deliveryAddress}
          label="주소"
          onChange={handleInputChange}
          disabled
        />
        <Button style={{ width: "123px", height: "40px", fontSize: "14px" }}>
          검색
        </Button>
      </DeliverySearch>
      <TextInput
        id="deliveryDetail"
        type="text"
        value={deliveryForm.deliveryDetail}
        onChange={handleInputChange}
        $size="lg"
        placeholder="상세 주소 입력"
      />
      {/* 배송시 요청사항 추가 */}
    </Container>
  );
}

const Container = styled.div`
  max-width: 805px;
  margin: 2.5rem 0;
  input[type="text"] {
    height: 40px;
    border: solid 1px #d6d6d6;
  }
`;
const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 2.3rem;
  margin-top: 1rem;
`;
const InfoContainer = styled.div`
  max-width: 805px;
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
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
const DeliverySearch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 1rem 0;
  input {
    background-color: #f8f8f8;
    width: 42rem;
  }
`;
