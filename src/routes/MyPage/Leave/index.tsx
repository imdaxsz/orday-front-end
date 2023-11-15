import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import useLeave from "@/hooks/useLeave";
import useLogout from "@/hooks/useLogout";
import { useModal } from "@/hooks/useModal";

export default function Leave() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isLoading,
    confirm,
    error,
    handleClickConfirm,
    requestLeave: leave,
  } = useLeave();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const modalMessage =
    "회원 탈퇴 처리되었습니다.\n올데이를 이용해 주셔서 감사합니다.";

  const redirectHome = () => {
    closeModal();
    logout();
  };

  return (
    <Container>
      <Head title="회원 탈퇴 | Orday" />
      <BackButton pageTitle="회원 탈퇴" />
      {isLoading && <Loader />}
      <Section>
        <h3>회원 탈퇴</h3>
        <Content>
          <h4>계정을 탈퇴하시겠습니까?</h4>
          <p>유의사항</p>
          <ul>
            <li>
              회원 탈퇴 시, 보유하고 계신 포인트와 쿠폰은 모두 소멸됩니다.
            </li>
            <li>
              탈퇴 후 동일한 정보로 재가입 시, 6개월 내 중복 쿠폰 재발급이
              불가능합니다.
            </li>
            <li>
              삭제를 원하는 데이터가 있다면 반드시 탈퇴 전에 확인하시기
              바랍니다.
            </li>
          </ul>
        </Content>
        <CheckBox
          checked={confirm}
          onChange={handleClickConfirm}
          id="confirm"
          text="위 안내를 모두 확인했습니다."
        />
        {error && <span>회원 탈퇴에 동의해주세요.</span>}
        <Buttons>
          <Button $variant="outline" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button onClick={() => leave(openModal)}>탈퇴하기</Button>
        </Buttons>
      </Section>
      <Modal
        isOpen={isModalOpen}
        onClose={redirectHome}
        type="alert"
        title="회원 탈퇴"
        detail={modalMessage}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 24px 100px;
`;

const Section = styled.div`
  width: 722px;
  margin: 90px auto 0;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  h4 {
    ${({ theme }) => theme.typo["title-2-b"]};
    margin-bottom: 24px;
  }

  h3,
  h4 {
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
  }

  span {
    color: red;
    ${({ theme }) => theme.typo["body-4-r"]};
    display: block;
    margin-top: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
  margin-bottom: 44px;

  &:not(h4) {
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
  }

  p {
    ${({ theme }) => theme.typo["body-2-r"]};
    margin-bottom: 13px;
  }

  li {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: -5px;
    line-height: 170%;
  }

  ul {
    padding-left: 10px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 24px;
  margin-top: 46px;

  button {
    width: 228px;
    height: 48px;
    ${({ theme }) => theme.typo["body-2-b"]};
  }
`;
