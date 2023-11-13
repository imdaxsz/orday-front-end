import { IoMdClose } from "react-icons/io";

import Modal from "@/components/Modal";
import { ModalCloseBtn } from "@/components/PostCodeModal";

import SimpleReviewCard from "./SimpleReviewCard";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  review: ReviewInfo | null;
}

export default function ReviewModal({
  review,
  isModalOpen,
  closeModal,
}: Props) {
  console.log(review);
  return (
    <Modal isOpen={isModalOpen}>
      <ModalCloseBtn onClick={closeModal}>
        <IoMdClose />
      </ModalCloseBtn>
      {review && <SimpleReviewCard review={review} type="modal" />}
    </Modal>
  );
}
