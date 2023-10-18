import styled from "styled-components";

import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Head from "@/components/Head";
import PostCodeModal from "@/components/PostCodeModal";
import BaseSelectBox from "@/components/SelectBox";
import BaseInput from "@/components/TextInput";
import useJoin from "@/hooks/useJoin";
import { useModal } from "@/hooks/useModal";

export default function Join() {
  const YEAR = Array.from({ length: 2023 - 1950 + 1 }, (_, i) => 2023 - i);
  const MONTH = Array.from({ length: 12 }, (_, i) => i + 1);
  const DAY = Array.from({ length: 31 }, (_, i) => i + 1);

  const { isModalOpen, openModal, closeModal } = useModal();

  const {
    form,
    agree,
    handleInputChange,
    handleSelectChange,
    handleAddressChange,
    handleAgreeChange,
    handleSubmit,
  } = useJoin();

  const handleSearchAddr = (data: { address: string; zonecode: string }) => {
    handleAddressChange(data.zonecode, data.address);
    closeModal();
  };

  return (
    <Container>
      <Head title="Orday | 회원가입" />
      <AuthHeader title="회원가입" />
      <Form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          type="email"
          value={form.email}
          onChange={handleInputChange}
          label="아이디(이메일)"
        />
        <TextInput
          id="password"
          type="password"
          value={form.password}
          onChange={handleInputChange}
          label="비밀번호"
          autoComplete="on"
        />
        <TextInput
          id="confirmPw"
          type="password"
          value={form.confirmPw}
          onChange={handleInputChange}
          label="비밀번호 확인"
          autoComplete="on"
        />
        <TextInput
          id="name"
          type="text"
          value={form.name}
          onChange={handleInputChange}
          label="이름"
        />
        <InputContainer>
          <TextInput
            id="phoneFirst"
            type="text"
            value={form.phone.first}
            onChange={(e) => handleInputChange(e, "phone", "first")}
            label="연락처"
          />
          <TextInput
            id="phoneSecond"
            value={form.phone.second}
            onChange={(e) => handleInputChange(e, "phone", "second")}
            type="text"
          />
          <TextInput
            id="phoneThird"
            value={form.phone.third}
            onChange={(e) => handleInputChange(e, "phone", "third")}
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <SelectBox
            label="생년월일"
            options={YEAR}
            id="year"
            text="연도"
            selected={form.birthDate.year}
            onChange={handleSelectChange}
          />
          <SelectBox
            text="월"
            id="month"
            options={MONTH}
            selected={form.birthDate.month}
            onChange={handleSelectChange}
          />
          <SelectBox
            text="일"
            id="day"
            options={DAY}
            selected={form.birthDate.day}
            onChange={handleSelectChange}
          />
        </InputContainer>
        <PostCode>
          <TextInput
            id="postCode"
            value={form.addressInfo.postcode}
            disabled
            label="우편번호"
          />
          <Button type="button" onClick={openModal}>
            검색
          </Button>
        </PostCode>
        <PostCodeModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          onComplete={handleSearchAddr}
        />
        <div>
          <TextInput
            id="address"
            type="text"
            value={form.addressInfo.address}
            disabled
            label="주소"
          />
          <TextInput
            id="addressDetail"
            type="text"
            value={form.addressInfo.addressDetail}
            onChange={(e) => handleInputChange(e, "address")}
            placeholder="상세 주소"
            style={{ marginTop: "10px" }}
          />
        </div>
        <CheckAll>
          <CheckBox
            id="allAgree"
            text="이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다."
            checked={agree[0].userAgreed}
            onChange={() => handleAgreeChange(0)}
          />
        </CheckAll>
        <Terms>
          <li>
            <CheckBox
              id="agree1"
              text="[필수] 이용약관 동의"
              checked={agree[1].userAgreed}
              onChange={() => handleAgreeChange(1)}
            />
            <TermsBox>
              네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
              본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를
              제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버
              서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
              여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를
              포함하고 있습니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
              주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
              관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
              이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의
              관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수
              있는 유익한 정보를 포함하고 있습니다.
            </TermsBox>
          </li>
          <li>
            <CheckBox
              id="agree2"
              text="[필수] 개인정보 수집 및 이용"
              checked={agree[2].userAgreed}
              onChange={() => handleAgreeChange(2)}
            />
            <TermsBox></TermsBox>
          </li>
          <li>
            <CheckBox
              id="agree3"
              text="[선택] 마케팅 정보 수신 동의"
              checked={agree[3].userAgreed}
              onChange={() => handleAgreeChange(3)}
            />
            <TermsBox></TermsBox>
          </li>
        </Terms>
        <Button type="submit">회원 가입</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 438px;
  margin: 0 auto;
  padding-bottom: 150px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  & > button {
    width: 100%;
    ${({ theme }) => theme.typo["body-3-b"]};
  }
`;

const TextInput = styled(BaseInput)`
  flex-grow: 1;
  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
    border-color: #aeaeae;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-end;
`;

export const PostCode = styled.div`
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

const CheckAll = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo["body-3-r"]};
  font-weight: 300;
  color: #2c2c2c;
  margin: 45px 0 40px;
`;

const Terms = styled.ul`
  li {
    ${({ theme }) => theme.typo["body-3-r"]};
    font-weight: 300;
    color: #2c2c2c;
    margin-bottom: 20px;
  }
  li:last-of-type {
    margin-bottom: 30px;
  }
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

const SelectBox = styled(BaseSelectBox)`
  & > div:first-of-type {
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
    border-color: #aeaeae;
  }
`;
