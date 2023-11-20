import styled from "styled-components";

import ArrowBack from "@/assets/arrow_back.svg?react";

interface PhotoDetailProps {
  setIsPhotoDetail: () => void;
  photoReviews: ReviewInfo[];
  tatalCount: number;
  openReviewModal: (review: ReviewInfo) => void;
}

export default function PhotoReviews({
  setIsPhotoDetail,
  photoReviews,
  tatalCount,
  openReviewModal,
}: PhotoDetailProps) {
  return (
    <div>
      <Header>
        <ArrowBack onClick={setIsPhotoDetail} />
        <h3>포토 리뷰 ({tatalCount})</h3>
      </Header>
      <PhotoGrid>
        {photoReviews.map((review) => (
          <Photo
            src={review.reviewImageUrl}
            alt="PHOTO"
            key={review.reviewId}
            onClick={() => openReviewModal(review)}
          />
        ))}
      </PhotoGrid>
    </div>
  );
}

const Header = styled.div`
  width: 722px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h3 {
    ${({ theme }) => theme.typo["title-2-b"]};
    width: 33.3%;
    margin: 0 auto;
    text-align: center;
  }
  svg {
    cursor: pointer;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 722px;
  margin-top: 60px;
`;

const Photo = styled.img`
  display: block;
  width: 234px;
  height: 234px;
  border-radius: 20px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  cursor: pointer;
`;
