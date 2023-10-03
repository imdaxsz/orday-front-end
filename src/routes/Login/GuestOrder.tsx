import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

export default function GuestOrder() {
  return (
    <Container>
      <Form>
        <TextInput id="name" type="text" label="주문자명" />
        <TextInput id="orderNo" type="text" label="주문번호" />
        <PhoneNumber>
          <TextInput id="phone" type="number" label="핸드폰 번호" />
          <TextInput id="phone" type="number" />
          <TextInput id="phone" type="number" />
        </PhoneNumber>
        <Button type="submit">주문 내역 조회하기</Button>
      </Form>
      <Link to="/join">회원가입</Link>
    </Container>
  );
}

const Container = styled.div`
  & > a {
    display: block;
    margin: 25px auto 0;
    width: fit-content;
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    width: 100%;
  }
  button {
    ${({ theme }) => theme.typo["body-3-b"]};
    margin-top: 10px;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
