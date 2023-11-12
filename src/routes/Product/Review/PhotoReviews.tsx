import styled from "styled-components";

import ArrowBack from "@/assets/arrow_back.svg?react";

interface PhotoDetailProps {
  setPhotoDetail: React.Dispatch<React.SetStateAction<boolean>>;
  photoData: number[];
}

export default function PhotoReviews({
  setPhotoDetail,
  photoData,
}: PhotoDetailProps) {
  return (
    <div>
      <Header>
        <ArrowBack onClick={() => setPhotoDetail(false)} />
        <h3>포토 리뷰 ({photoData.length})</h3>
      </Header>
      <PhotoGrid>
        {photoData.map((_, index) => (
          <Photo src="" alt="reviewImage" key={index} />
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
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;
