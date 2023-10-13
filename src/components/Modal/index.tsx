import styled from "styled-components";

import { StrictPropsWithChildren } from "@/types";

interface ModalProps extends StrictPropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer $isOpen={isOpen}>
      <ModalContent>
        {children}
        {onSubmit && (
          <ButtonBox>
            <ConfirmBtn onClick={onSubmit}>확인</ConfirmBtn>
            <CancelBtn onClick={onClose}>취소</CancelBtn>
          </ButtonBox>
        )}
      </ModalContent>
    </ModalContainer>
  );
}

const ModalContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonBox = styled.div`
  margin: 28px 0 45px 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const ConfirmBtn = styled.button`
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary["80"]};
  color: #fff;
`;
const CancelBtn = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #9d9d9d;
  background-color: ${({ theme }) => theme.colors.neutral["10"]};
`;
