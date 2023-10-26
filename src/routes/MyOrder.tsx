import styled from "styled-components";

import BackButton from "@/components/BackButton";

import OrderInfo from "./MyPage/OrderInfo";

export default function MyOrder() {
  return (
    <>
      <BackButton pageTitle="회원 정보" />
      <Container>
        <OrderInfo showIcon={false} />
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
