import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import Head from "@/components/Head";
import TextInput from "@/components/TextInput";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const {
    email,
    password,
    loginError: error,
    handleInputChange,
    onSubmit,
  } = useLogin();

  return (
    <Container>
      <Head title="로그인 | Orday" />
      <AuthHeader title="로그인" />
      <Form onSubmit={onSubmit} noValidate>
        <TextInput
          id="email"
          type="text"
          value={email}
          placeholder="이메일"
          warn={error.email}
          message="이메일을 입력하세요."
          onChange={(e) => handleInputChange(e, "email")}
        />
        <TextInput
          id="password"
          type="password"
          value={password}
          placeholder="비밀번호"
          warn={error.password}
          message="비밀번호를 입력하세요."
          autoComplete="on"
          onChange={(e) => handleInputChange(e, "password")}
        />
        <UserActions>
          <Find>
            <Link to="/">아이디 찾기</Link>
            <RxDividerVertical size={14} />
            <Link to="/">비밀번호 찾기</Link>
          </Find>
        </UserActions>
        {error.result && (
          <span>이메일 또는 비밀번호를 다시 확인해 주세요.</span>
        )}
        <Button type="submit">로그인</Button>
      </Form>
      <Link to="/join">
        <Button $variant="outline">회원가입</Button>
      </Link>
      <Button>구글 로그인</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 438px;
  margin: 0 auto;
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
  margin-top: 40px;

  input[type="text"],
  input[type="password"] {
    width: 100%;
  }

  button {
    margin-top: 40px;
  }

  & > span {
    color: red;
    ${({ theme }) => theme.typo["body-4-r"]};
    margin-top: 5px;
  }
`;

const UserActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
