import { useState } from "react";
import styled from "styled-components";

import MoreButton from "@/assets/chevron_right.svg?react";
import Dropdown from "@/components/Dropdown";

import PhotoDetail from "../PhotoDetail";

import ReviewCard from "./ReviewCard";
import ReviewRatingComponent from "./ReviewRating";
import { PhotoReviewHeader, MorePhoto, PhotoContainer, Photo } from "./style";

const photoData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reviewMock = [0, 1, 2];

export default function ProductReview() {
  const [isPhotoDetail, setPhotoDetail] = useState(false);

  const initialOption = {
    id: 0,
    name: "최신순",
    value: "new",
  };
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handlePhotoDetail = () => {
    setPhotoDetail(true);
  };

  return (
    <Container>
      {isPhotoDetail ? (
        <PhotoDetail setPhotoDetail={setPhotoDetail} photoData={photoData} />
      ) : (
        <div>
          <ReviewStatics>
            <h3>전체 리뷰(2)</h3>
            <ReviewRatingComponent />
          </ReviewStatics>
          <PhotoReviewHeader>
            <h3>포토 리뷰({photoData.length})</h3>
            <MorePhoto>
              <span>전체보기</span> <MoreButton onClick={handlePhotoDetail} />
            </MorePhoto>
          </PhotoReviewHeader>
          <PhotoContainer>
            {photoData.slice(0, 7).map((_, index) => (
              <Photo key={index} />
            ))}
          </PhotoContainer>
          <Dropdown
            type="review"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
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
