import { PropsWithChildren } from "react";

import Button from "../Button";

import {
  ButtonBox,
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
  type?: "confirm" | "alert";
  title?: string;
  detail?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  type,
  title,
  detail,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer $isOpen={isOpen}>
      <ModalContent $type={!!type}>
        {children}
        {type && (
          <>
            <Content>
              <Title>{title}</Title>
              <Detail>{detail}</Detail>
            </Content>
            {type === "alert" && (
              <ButtonBox>
                <Button onClick={onClose}>확인</Button>
              </ButtonBox>
            )}
            {type === "confirm" && (
              <ButtonBox>
                <Button onClick={onSubmit}>확인</Button>
                <Button color="neutral" onClick={onClose}>
                  취소
                </Button>
              </ButtonBox>
            )}
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
}
