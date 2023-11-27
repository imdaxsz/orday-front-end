import styled from "styled-components";

import BackButton from "@/components/BackButton";

import OrderInfo from "./OrderInfo";

export default function OrderList() {
  return (
    <>
      <BackButton pageTitle="회원 정보" />
      <Container>
        <OrderInfo />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
`;
