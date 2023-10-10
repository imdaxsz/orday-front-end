import { styled } from "styled-components";

import BackButton from "@/components/BackButton";

import DeliveryInfo from "./DeliveryInfo";
import PaymentRadio from "./PaymentRadio";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

export default function GuestOrder() {
  return (
    <>
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
    </>
  );
}
const InfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
