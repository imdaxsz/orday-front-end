// MemberOrder
import { styled } from "styled-components";

import BackButton from "@/components/BackButton";

import DeliveryInfo from "./DeliveryInfo";
import PaymentRadio from "./PaymentRadio";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

export default function Order() {
  return (
    <Container>
      <BackButton pageTitle="주문/결제" />
      <InfoContainer>
        <div>
          <UserInfo />
          <DeliveryInfo />
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
`;
