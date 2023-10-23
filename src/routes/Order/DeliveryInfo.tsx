import { useState } from "react";
import { styled } from "styled-components";

import Button from "@/components/Button";
import PostCodeModal from "@/components/PostCodeModal";
import { RadioButton } from "@/components/RadioButton";
import SelectBox from "@/components/SelectBox";
import TextInput from "@/components/TextInput";
import { useModal } from "@/hooks/useModal";

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
    postcode: "",
    deliveryAddress: "",
    deliveryDetail: "",
  });
  const [require, setRequire] = useState<string | null>("");
  const [requireInput, setRequireInput] = useState("");
  const DELIVERY_OPTIONS = [
    "직접 입력",
    "빠른배송 바랍니다",
    "부재시 경비실에 맡겨주세요",
    "배송 전에 연락주세요",
  ];

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

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleSearchAddr = (data: { address: string; zonecode: string }) => {
    setDeliveryForm((prev) => ({
      ...prev,
      deliveryAddress: data.address,
      postcode: data.zonecode,
    }));
    closeModal();
  };

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

      {/* 주소 검색모달창 */}
      <PostCodeModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onComplete={handleSearchAddr}
      />
      <AddressForm>
        <DeliverySearch>
          <TextInput
            id="postCode"
            type="text"
            label="주소"
            value={deliveryForm.postcode}
            disabled
          />
          <Button
            style={{ width: "123px", height: "40px", fontSize: "14px" }}
            onClick={openModal}
          >
            검색
          </Button>
        </DeliverySearch>
        <TextInput
          id="deliveryAddress"
          type="text"
          value={deliveryForm.deliveryAddress}
          disabled
          $size="lg"
        />
        <TextInput
          id="deliveryDetail"
          type="text"
          value={deliveryForm.deliveryDetail}
          onChange={handleInputChange}
          $size="lg"
          placeholder="상세 주소 입력"
        />
      </AddressForm>
      {/* 배송시 요청사항 추가 */}
      <SelectBox
        height="40px"
        label="배송시 요청사항"
        text="배송시 요청사항을 선택해주세요"
        options={DELIVERY_OPTIONS}
        selected={require}
        setSelected={setRequire}
        className="deliveryRequire"
      />
      {require === "직접 입력" && (
        <TextInput
          id="requireInput"
          type="text"
          value={requireInput}
          onChange={(e) => setRequireInput(e.target.value)}
          $size="lg"
          placeholder="배송시 요청사항을 입력해주세요"
        />
      )}
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
  .deliveryRequire {
    width: 100%;
    margin: 1rem 0;
    & > div {
      border: solid 1px #d6d6d6;
    }
    & > ul {
      border: solid 1px #d6d6d6;
      & > li {
        font-size: 14px;
      }
    }
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
const AddressForm = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DeliverySearch = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  input {
    background-color: #f8f8f8;
  }
`;
