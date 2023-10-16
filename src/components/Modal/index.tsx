import { PropsWithChildren } from "react";

import {
  ButtonBox,
  CancelBtn,
  ConfirmBtn,
  Content,
  Detail,
  ModalContainer,
  ModalContent,
  Title,
} from "./style";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  detail?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  detail,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer $isOpen={isOpen}>
      <ModalContent $onSubmit={!!onSubmit}>
        {children}
        {onSubmit && (
          <>
            <Content>
              <Title>{title}</Title>
              <Detail>{detail}</Detail>
            </Content>
            <ButtonBox>
              <ConfirmBtn onClick={onSubmit}>확인</ConfirmBtn>
              <CancelBtn onClick={onClose}>취소</CancelBtn>
            </ButtonBox>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
}
