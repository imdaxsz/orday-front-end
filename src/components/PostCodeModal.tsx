import DaumPostcode from "react-daum-postcode";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import Modal from "@/components/Modal";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  onComplete: (data: { address: string; zonecode: string }) => void;
}

export default function PostCodeModal({
  isModalOpen,
  closeModal,
  onComplete,
}: Props) {
  return (
    <Modal isOpen={isModalOpen}>
      <ModalCloseBtn onClick={closeModal}>
        <IoMdClose />
      </ModalCloseBtn>
      <DaumPostcode onComplete={onComplete} />
    </Modal>
  );
}

const ModalCloseBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
  text-align: right;
`;
