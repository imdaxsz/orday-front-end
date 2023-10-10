import { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import TextInput from "@/components/TextInput";

export default function LoginForm() {
  const [test, setTest] = useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInput
          id="id"
          type="text"
          placeholder="아이디"
          warn={test}
          message="아이디를 입력하세요."
        />
        <TextInput
          id="password"
          type="password"
          placeholder="비밀번호"
          warn={test}
          message="비밀번호를 입력하세요."
        />
        <UserActions>
          <CheckBox text="자동 로그인" type="circle" />
          <Find>
            <Link to="/">아이디 찾기</Link>
            <RxDividerVertical size={14} />
            <Link to="/">비밀번호 찾기</Link>
          </Find>
        </UserActions>
        <Button type="submit" onClick={() => setTest((prev) => !prev)}>
          로그인
        </Button>
      </Form>
      <Link to="/join">
        <Button $variant="outline">회원가입</Button>
      </Link>
      <Button>구글 로그인</Button>
    </Container>
  );
}

const Container = styled.div`
  button {
    width: 100%;
    ${({ theme }) => theme.typo["body-3-b"]};
  }
  & > button {
    margin-top: 80px;
    background-color: #ca5849;
    border-color: #ca5849;
  }
  & > a {
    display: block;
    margin-top: 10px;
  }
  padding-bottom: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input[type="text"],
  input[type="password"] {
    width: 100%;
  }

  button {
    margin-top: 40px;
  }
`;

const UserActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
  }
`;

const Find = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
