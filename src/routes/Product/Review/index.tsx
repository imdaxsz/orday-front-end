import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Dropdown from "@/components/Dropdown";
import useProductReviews from "@/hooks/useProductReviews";

import PhotoReviews from "./PhotoReviews";
import ReviewRating from "./ReviewRating";
import ReviewCard from "./SimpleReviewCard";

const photoData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reviewMock = [0, 1, 2];

export default function ProductReview() {
  const productId = useLocation().pathname.split("/")[2];
  const [isPhotoDetail, setPhotoDetail] = useState(false);
  const handlePhotoDetail = () => {
    setPhotoDetail(true);
  };

  const { statics, selectedOption, setSelectedOption } = useProductReviews(
    Number(productId),
  );

  return (
    <Container>
      {isPhotoDetail ? (
        <PhotoReviews setPhotoDetail={setPhotoDetail} photoData={photoData} />
      ) : (
        <div>
          <ReviewStatics>
            <h3>전체 리뷰 ({statics.totalCount})</h3>
            <ReviewRating statics={statics} />
          </ReviewStatics>
          <PhotoReviewHeader>
            <h3>포토 리뷰 ({photoData.length})</h3>
            <MorePhoto>
              <span>전체보기</span>
              <IoIosArrowForward onClick={handlePhotoDetail} />
            </MorePhoto>
          </PhotoReviewHeader>
          <PhotoContainer>
            {photoData.slice(0, 7).map((_, index) => (
              <Photo src="" alt="reviewImage" key={index} />
            ))}
          </PhotoContainer>
          <div style={{ width: "fit-content", marginTop: "40px" }}>
            <Dropdown
              type="review"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          {reviewMock.map((_, i) => (
            <ReviewCard key={i} />
          ))}
        </div>
      )}
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

  svg {
    cursor: pointer;
  }
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
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;
