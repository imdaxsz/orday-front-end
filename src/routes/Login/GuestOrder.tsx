import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useGuestOrder from "@/hooks/useGuestOrder";

export default function GuestOrder() {
  const { form, error, handleInputChange, handleSubmit } = useGuestOrder();

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInput
          id="guestName"
          type="text"
          value={form.guestName}
          onChange={handleInputChange}
          label="주문자명"
          warn={error.guestName}
          message="주문자명을 입력해 주세요."
        />
        <TextInput
          id="orderNo"
          type="text"
          value={form.orderNo}
          onChange={handleInputChange}
          label="주문번호"
          warn={error.orderNo}
          message="주문번호를 입력해 주세요."
        />
        <PhoneNumber>
          <TextInput
            id="phoneFirst"
            type="text"
            value={form.phone.first}
            label="연락처"
            onChange={(e) => handleInputChange(e, "first")}
          />
          <TextInput
            id="phoneSecond"
            type="text"
            value={form.phone.second}
            onChange={(e) => handleInputChange(e, "second")}
          />
          <TextInput
            id="phoneThird"
            type="text"
            value={form.phone.third}
            onChange={(e) => handleInputChange(e, "third")}
          />
        </PhoneNumber>
        {error.phone && <span>연락처를 다시 확인해 주세요.</span>}
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
  span {
    color: red;
    ${({ theme }) => theme.typo["body-4-r"]};
    margin-top: -10px;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
`;
