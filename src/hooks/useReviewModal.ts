import { useState } from "react";

import { useModal } from "./useModal";

export default function useReviewModal() {
  const [review, setReview] = useState<ReviewInfo | null>(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  const openReviewModal = (review: ReviewInfo) => {
    setReview(review);
    openModal();
  };

  const closeReviewModal = () => {
    setReview(null);
    closeModal();
  };

  return { review, isModalOpen, openReviewModal, closeReviewModal };
}
