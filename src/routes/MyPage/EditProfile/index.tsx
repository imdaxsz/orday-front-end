import { Link } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import PostCodeModal from "@/components/PostCodeModal";
import SelectBox from "@/components/SelectBox";
import BaseInput from "@/components/TextInput";
import { DATE, USER_INFO_FORM_ERROR_MESSAGE } from "@/constants";
import useEditProfile from "@/hooks/useEditProfile";
import { useModal } from "@/hooks/useModal";
import { InputContainer, Postcode } from "@/routes/Join";

export default function EditProfile() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isUserInfoLoading,
    isUserInfoUpdating,
    form,
    phone,
    socialInfo,
    error,
    handleInputChange,
    handleConfirmPwChange,
    handleSelectChange,
    handleAddressChange,
    cancelUpdate,
    onSubmit,
    successModal,
  } = useEditProfile();

  const handleSearchAddr = (data: { address: string; zonecode: string }) => {
    handleAddressChange(data.zonecode, data.address);
    closeModal();
  };

  const updateCompleted = () => {
    successModal.closeModal();
    window.location.reload();
  };

  return (
    <Container>
      <Head title="회원정보 수정 | Orday" />
      <BackButton pageTitle="회원정보 수정" />
      {(isUserInfoLoading || isUserInfoUpdating) && <Loader />}
      <Form onSubmit={onSubmit}>
        <Item>
          <span>이름</span>
          <TextInput
            id="name"
            aria-label="이름"
            value={form.name}
            onChange={handleInputChange}
            message="이름을 입력해 주세요."
            warn={error.name}
          />
        </Item>
        <Item>
          <span>이메일</span>
          <TextInput
            id="email"
            aria-label="이메일"
            value={form.email}
            disabled
            readOnly
          />
        </Item>
        {socialInfo.socialType === "WEB" && (
          <>
            <Item>
              <span>비밀번호</span>
              <TextInput
                id="password"
                aria-label="비밀번호"
                type="password"
                value={form.password}
                autoComplete="off"
                onChange={handleInputChange}
                warn={Boolean(error.password)}
                message={USER_INFO_FORM_ERROR_MESSAGE.password[error.password]}
              />
            </Item>
            <Item>
              <span>비밀번호 확인</span>
              <TextInput
                id="confirmPassword"
                aria-label="비밀번호 확인"
                type="password"
                value={form.confirmPassword}
                autoComplete="off"
                onChange={handleConfirmPwChange}
                message="비밀번호가 일치하지 않습니다."
                warn={error.confirmPassword}
              />
            </Item>
          </>
        )}
        <Item>
          <span>연락처</span>
          <InputContainer>
            <TextInput
              id="phoneFirst"
              aria-label="연락처 시작 부분"
              value={phone.first || ""}
              onChange={(e) => handleInputChange(e, "first")}
            />
            <TextInput
              id="phoneSecond"
              aria-label="연락처 중간 부분"
              value={phone.second || ""}
              onChange={(e) => handleInputChange(e, "second")}
            />
            <TextInput
              id="phoneThird"
              aria-label="연락처 마지막 부분"
              value={phone.third || ""}
              onChange={(e) => handleInputChange(e, "third")}
            />
          </InputContainer>
        </Item>
        {Boolean(error.phoneNumber) && (
          <ErrorMessage>
            {USER_INFO_FORM_ERROR_MESSAGE.phone[error.phoneNumber]}
          </ErrorMessage>
        )}
        <Item>
          <span>생년월일</span>
          <InputContainer>
            <SelectBox
              options={DATE.year}
              id="year"
              aria-label="연도"
              text="연도"
              selected={form.birthDate?.year}
              onChange={handleSelectChange}
            />
            <SelectBox
              text="월"
              id="month"
              aria-label="월"
              options={DATE.month}
              selected={form.birthDate?.month}
              onChange={handleSelectChange}
            />
            <SelectBox
              text="일"
              id="day"
              aria-label="일"
              options={DATE.day}
              selected={form.birthDate?.day}
              onChange={handleSelectChange}
            />
          </InputContainer>
        </Item>
        {error.birthDate && (
          <ErrorMessage>생년월일을 입력해 주세요.</ErrorMessage>
        )}
        <Item>
          <span>우편번호</span>
          <Postcode>
            <TextInput
              id="postcode"
              aria-label="우편번호"
              value={form.addressInfo.postcode}
              disabled
            />
            <Button type="button" onClick={openModal}>
              검색
            </Button>
          </Postcode>
          <PostCodeModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            onComplete={handleSearchAddr}
          />
        </Item>
        <Item>
          <span style={{ marginBottom: "60px" }}>주소</span>
          <div style={{ width: "100%" }}>
            <TextInput
              id="address"
              aria-label="주소"
              type="text"
              value={form.addressInfo.address}
              disabled
            />
            <TextInput
              id="addressDetail"
              aria-label="상세 주소"
              type="text"
              value={form.addressInfo.addressDetail}
              placeholder="상세 주소"
              style={{ marginTop: "10px" }}
              onChange={handleInputChange}
            />
          </div>
        </Item>
        {error.address && <ErrorMessage>주소를 입력해 주세요.</ErrorMessage>}
        <Buttons>
          <Button $variant="outline" type="button" onClick={cancelUpdate}>
            취소
          </Button>
          <Button type="submit">수정</Button>
        </Buttons>
        <Modal
          isOpen={successModal.isModalOpen}
          onClose={updateCompleted}
          type="alert"
          title="회원정보 수정"
          detail="회원정보 수정이 완료되었습니다."
        />
      </Form>
      <Link to="/myPage/leave">회원탈퇴</Link>
    </Container>
  );
}

export const Container = styled.div`
  padding: 0 24px 100px;

  a {
    display: block;
    margin-top: 30px;
    text-align: center;
    text-decoration: underline;
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
    line-height: 100%;
  }
`;

const Form = styled.form`
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
  gap: 18px;
  margin-top: 40px;

  button {
    width: 210px;
    padding: 15px 10px;
    ${({ theme }) => theme.typo["title-2-b"]};
    line-height: 100%;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  ${({ theme }) => theme.typo["body-4-r"]};
  margin-top: -24px;
  margin-left: 135px;
`;

export const Item = styled.div`
  display: flex;
  width: 573px;
  align-items: flex-start;
  gap: 26px;

  & > span {
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
