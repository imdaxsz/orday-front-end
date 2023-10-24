import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Button from "@/components/Button";
import PostCodeModal from "@/components/PostCodeModal";
import SelectBox from "@/components/SelectBox";
import TextInput from "@/components/TextInput";
import { useModal } from "@/hooks/useModal";

interface DeliveryInfoProps {
  form: OrderForm;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    part?: PHONEPART,
  ) => void;
  updateForm: (updates: Partial<OrderForm>) => void;
}

export default function DeliveryInfo({
  form,
  handleInputChange,
  updateForm,
}: DeliveryInfoProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleSearchAddr = (data: { address: string; zonecode: string }) => {
    updateForm({
      addressInfo: {
        postcode: data.zonecode,
        address: data.address,
        addressDetail: form.addressInfo.addressDetail,
      },
    });
    closeModal();
  };

  const DELIVERY_OPTIONS = [
    "직접 입력",
    "빠른배송 바랍니다",
    "부재시 경비실에 맡겨주세요",
    "배송 전에 연락주세요",
  ];
  const [require, setRequire] = useState<string | null>("");
  const [requireInput, setRequireInput] = useState("");

  useEffect(() => {
    if (require && require !== "직접 입력") {
      updateForm({ deliveryRequest: require });
    } else {
      updateForm({ deliveryRequest: requireInput });
    }
  }, [require, requireInput]);

  return (
    <Container>
      <h3>배송 정보</h3>

      {/* 주소 검색모달창 */}
      <PostCodeModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onComplete={handleSearchAddr}
      />
      <AddressForm>
        <DeliverySearch>
          <TextInput
            id="postcode"
            type="text"
            label="주소"
            value={form.addressInfo.postcode}
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
          id="address"
          type="text"
          value={form.addressInfo.address}
          disabled
          $size="lg"
        />
        <TextInput
          id="addressDetail"
          type="text"
          value={form.addressInfo.addressDetail}
          onChange={handleInputChange}
          $size="lg"
          placeholder="상세 주소 입력"
        />
      </AddressForm>

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
