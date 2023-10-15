import { StrictPropsWithChildren } from "@/types";

import {
  ButtonBox,
  CancelBtn,
  ConfirmBtn,
  ModalContainer,
  ModalContent,
} from "./style";

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
