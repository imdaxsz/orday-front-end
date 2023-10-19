import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Head from "@/components/Head";
import Modal from "@/components/Modal";
import SelectBox from "@/components/SelectBox";
import BaseInput from "@/components/TextInput";
import { DATE } from "@/constants";
import { useModal } from "@/hooks/useModal";
import { InputContainer, PostCode } from "@/routes/Join";

export default function EditProfile() {
  const { isModalOpen, openModal, closeModal } = useModal();

  const USER_MOCK_DATA = {
    name: "홍길동",
    email: "test@naver.com",
    phone: "01012345678",
    birthDate: {
      year: "2023",
      month: "10",
      day: "19",
    },
    addressInfo: {
      postcode: "12345",
      address: "서울시 강남구 어쩌고",
      addressDetail: "102동 203호",
    },
  };

  return (
    <Container>
      <Head title="회원정보 수정 | Orday" />
      <BackButton pageTitle="회원정보 수정" />
      <Content>
        <Item>
          <span>이름</span>
          <TextInput id="name" value={USER_MOCK_DATA.name} disabled readOnly />
        </Item>
        <Item>
          <span>이메일</span>
          <TextInput
            id="email"
            value={USER_MOCK_DATA.email}
            disabled
            readOnly
          />
        </Item>
        <Item>
          <span>비밀번호</span>
          <TextInput id="password" type="password" autoComplete="off" />
        </Item>
        <Item>
          <span>비밀번호 확인</span>
          <TextInput id="confirmPw" type="password" autoComplete="off" />
        </Item>
        <Item>
          <span>연락처</span>
          <InputContainer>
            <TextInput
              id="phoneFirst"
              type="text"
              value={USER_MOCK_DATA.phone.slice(0, 3)}
            />
            <TextInput
              id="phoneSecond"
              value={USER_MOCK_DATA.phone.slice(3, 7)}
              type="text"
            />
            <TextInput
              id="phoneThird"
              value={USER_MOCK_DATA.phone.slice(-4)}
              type="text"
            />
          </InputContainer>
        </Item>
        <Item>
          <span>생년월일</span>
          <InputContainer>
            <SelectBox
              options={DATE.year}
              id="year"
              text="연도"
              selected={USER_MOCK_DATA.birthDate.year}
              // onChange={handleSelectChange}
            />
            <SelectBox
              text="월"
              id="month"
              options={DATE.month}
              selected={USER_MOCK_DATA.birthDate.month}
              // onChange={handleSelectChange}
            />
            <SelectBox
              text="일"
              id="day"
              options={DATE.day}
              selected={USER_MOCK_DATA.birthDate.day}
              // onChange={handleSelectChange}
            />
          </InputContainer>
        </Item>
        <Item>
          <span>우편번호</span>
          <PostCode>
            <TextInput
              id="postcode"
              value={USER_MOCK_DATA.addressInfo.postcode}
              disabled
            />
            <Button>검색</Button>
          </PostCode>
        </Item>
        <Item>
          <span style={{ marginBottom: "60px" }}>주소</span>
          <div style={{ width: "100%" }}>
            <TextInput
              id="address"
              type="text"
              value={USER_MOCK_DATA.addressInfo.address}
              disabled
            />
            <TextInput
              id="addressDetail"
              type="text"
              value={USER_MOCK_DATA.addressInfo.addressDetail}
              placeholder="상세 주소"
              style={{ marginTop: "10px" }}
            />
          </div>
        </Item>
        <Buttons>
          <Button $variant="outline">취소</Button>
          <Button type="button" onClick={openModal}>
            수정
          </Button>
        </Buttons>
        <Modal
          isOpen={isModalOpen}
          onSubmit={() => console.log("test")}
          onClose={closeModal}
          type="alert"
          title="회원정보 수정"
          detail="회원정보 수정이 완료되었습니다."
        />
      </Content>
    </Container>
  );
}

export const Container = styled.div`
  padding: 0 24px 100px;
`;

const Content = styled.form`
  width: fit-content;
  margin: 0 auto;
  padding-right: 135px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Buttons = styled.div`
  width: 100%;
  padding-left: 135px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  button {
    width: 130px;
    padding: 15px 10px;
    ${({ theme }) => theme.typo["title-2-b"]};
    line-height: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 573px;
  align-items: flex-start;
  gap: 26px;

  span {
    width: 109px;
    ${({ theme }) => theme.typo["title-2-b"]};
    flex-shrink: 0;
    height: 50px;
    line-height: 50px;
  }
`;

const TextInput = styled(BaseInput)`
  flex-grow: 1;
  input {
    width: 100%;
  }
`;
