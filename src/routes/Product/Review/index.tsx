import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Dropdown from "@/components/Dropdown";
import useProductReviews from "@/hooks/useProductReviews";
import useReviewModal from "@/hooks/useReviewModal";

import PhotoReviews from "./PhotoReviews";
import ReviewModal from "./ReviewModal";
import ReviewRating from "./ReviewRating";
import ReviewCard from "./SimpleReviewCard";

export default function ProductReview() {
  const productId = useLocation().pathname.split("/")[2];

  const {
    ref,
    statics,
    reviews,
    photoReviews,
    selectedOption,
    setSelectedOption,
    isPhotoDetail,
    toggleIsPhotoDetail,
  } = useProductReviews(Number(productId));

  const { review, isModalOpen, openReviewModal, closeReviewModal } =
    useReviewModal();

  return (
    <Container>
      <ReviewModal
        isModalOpen={isModalOpen}
        review={review}
        closeModal={closeReviewModal}
      />
      {isPhotoDetail ? (
        <PhotoReviews
          setIsPhotoDetail={toggleIsPhotoDetail}
          photoReviews={photoReviews}
          tatalCount={statics.photoReviewCount}
          openReviewModal={openReviewModal}
        />
      ) : (
        <div>
          <ReviewStatics>
            <h3>전체 리뷰 ({statics.totalCount})</h3>
            <ReviewRating statics={statics} />
          </ReviewStatics>
          <PhotoReviewHeader>
            <h3>포토 리뷰 ({statics.photoReviewCount})</h3>
            {statics.photoReviewCount > 6 && (
              <MorePhoto onClick={toggleIsPhotoDetail}>
                <span>전체보기</span>
                <IoIosArrowForward />
              </MorePhoto>
            )}
          </PhotoReviewHeader>
          <PhotoContainer>
            {statics.photoReviewCount === 0 && (
              <EmptyReview>작성된 포토 리뷰가 없습니다.</EmptyReview>
            )}
            {photoReviews.slice(0, 7).map((review) => (
              <Photo
                src={review.reviewImageUrl}
                alt="PHOTO"
                key={review.reviewId}
                onClick={() => openReviewModal(review)}
              />
            ))}
          </PhotoContainer>
          <div style={{ width: "fit-content", marginTop: "40px" }}>
            <Dropdown
              type="review"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          {statics.totalCount === 0 && (
            <EmptyReview style={{ height: "150px", lineHeight: "150px" }}>
              작성된 리뷰가 없습니다.
            </EmptyReview>
          )}
          {reviews.map((review) => (
            <ReviewCard key={review.reviewId} review={review} />
          ))}
        </div>
      )}
      <div ref={ref} />
    </Container>
  );
}

const Container = styled.div`
  width: 722px;
  margin: 0 auto;
`;

const ReviewStatics = styled.div`
  h3 {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
    margin-bottom: 15px;
  }
`;

const PhotoReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 14px;
  width: 722px;
  h3,
  span {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;

const MorePhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const PhotoContainer = styled.div`
  width: 722px;
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
`;

const Photo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;

const EmptyReview = styled.p`
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
`;
