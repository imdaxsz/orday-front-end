import { styled } from "styled-components";

import BackButton from "@/components/BackButton";
import { DEFAULT_ORDER_FORM_DATA } from "@/constants";
import useForm from "@/hooks/useForm";

import DeliveryInfo from "./DeliveryInfo";
import PaymentRadio from "./PaymentRadio";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

export default function Order() {
  const { form, phone, handleInputChange, updateForm } = useForm<OrderForm>(
    DEFAULT_ORDER_FORM_DATA,
  );

  return (
    <Container>
      <BackButton pageTitle="주문/결제" />
      <InfoContainer>
        <div>
          <UserInfo
            form={form}
            phone={phone}
            handleInputChange={handleInputChange}
          />
          <DeliveryInfo
            form={form}
            handleInputChange={handleInputChange}
            updateForm={updateForm}
          />
          <PaymentRadio form={form} updateForm={updateForm} />
        </div>
        <div>
          <ProductInfo form={form} />
        </div>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
  padding-bottom: 100px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
