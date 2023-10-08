import styled from "styled-components";

import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import BaseInput from "@/components/TextInput";

export default function Join() {
  return (
    <Container>
      <AuthHeader title="회원가입" />
      <Form>
        <TextInput id="email" type="email" label="아이디(이메일)" />
        <TextInput id="password" type="password" label="비밀번호" />
        <TextInput id="confirmPw" type="password" label="비밀번호 확인" />
        <TextInput id="name" type="text" label="이름" />
        <ZipCode>
          <TextInput id="zipCode" disabled label="우편번호" />
          <Button>검색</Button>
        </ZipCode>
        <div>
          <TextInput id="address" type="text" disabled label="주소" />
          <TextInput
            id="addressDetail"
            type="text"
            placeholder="상세 주소"
            style={{ marginTop: "10px" }}
          />
        </div>
        <CheckAll>
          <CheckBox text="이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다." />
        </CheckAll>
        <ul>
          <li>
            <div>
              <CheckBox text="[필수] 이용약관 동의" />
              <TermsBox>
                네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를
                제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버
                서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
                여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를
                포함하고 있습니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
                주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
                관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하
                ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는
                비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에
                도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
              </TermsBox>
            </div>
          </li>
          <li>
            <div>
              <CheckBox text="[필수] 개인정보 수집 및 이용" />
              <TermsBox></TermsBox>
            </div>
          </li>
          <li>
            <div>
              <CheckBox text="[선택] 마케팅 정보 수신 동의" />
              <TermsBox></TermsBox>
            </div>
          </li>
        </ul>
        <Button type="submit">회원 가입</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 438px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

const TextInput = styled(BaseInput)`
  flex-grow: 1;
  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }
  label {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
  }
`;

const CheckAll = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo["body-3-r"]};
  font-weight: 300;
  color: #2c2c2c;
  margin: 45px 0 40px;
`;

const TermsBox = styled.div`
  width: 438px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin-top: 9px;
  padding: 15px;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const ZipCode = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-end;
  width: 100%;
  button {
    width: 130px;
    ${({ theme }) => theme.typo["body-3-r"]};
    font-weight: 300;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;
  li {
    ${({ theme }) => theme.typo["body-3-r"]};
    font-weight: 300;
    color: #2c2c2c;
    margin-bottom: 20px;
  }
  li:last-of-type {
    margin-bottom: 30px;
  }
  & > button {
    width: 100%;
    ${({ theme }) => theme.typo["body-3-b"]};
  }
`;
