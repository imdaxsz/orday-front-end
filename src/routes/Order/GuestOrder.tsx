import { styled } from "styled-components";

import BackButton from "@/components/BackButton";

import DeliveryInfo from "./DeliveryInfo";
import PaymentRadio from "./PaymentRadio";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

export default function GuestOrder() {
  return (
    <Container>
      <BackButton pageTitle="주문/결제" />
      <InfoContainer>
        <div>
          <UserInfo user="guest" />
          <DeliveryInfo user="guest" />
          <PaymentRadio />
        </div>
        <div>
          <ProductInfo />
        </div>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
