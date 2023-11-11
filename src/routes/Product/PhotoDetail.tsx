import styled from "styled-components";

import ArrowBack from "@/assets/arrow_back.svg?react";

interface PhotoDetailProps {
  setPhotoDetail: React.Dispatch<React.SetStateAction<boolean>>;
  photoData: number[];
}

export default function PhotoDetail({
  setPhotoDetail,
  photoData,
}: PhotoDetailProps) {
  return (
    <>
      <DetailHeader>
        <ArrowBack onClick={() => setPhotoDetail(false)} />
        <HeaderContainer>사진 ({photoData.length})</HeaderContainer>
      </DetailHeader>
      <PhotoGrid>
        {photoData.map((_, index) => (
          <PhotoBox key={index} />
        ))}
      </PhotoGrid>
    </>
  );
}

const DetailHeader = styled.div`
  width: 722px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  width: 722px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 722px;
  margin-top: 30px;
`;

const PhotoBox = styled.div`
  width: 234px;
  height: 234px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
