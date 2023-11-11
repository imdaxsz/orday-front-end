import styled from "styled-components";

export const ProductReview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  padding-bottom: 10px;
  width: 722px;
`;

export const PhotoReviewHeader = styled.div`
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

export const MorePhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  & > svg {
    color: black;
    cursor: pointer;
  }
`;

export const PhotoContainer = styled.div`
  width: 722px;
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
`;

export const Photo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  flex-shrink: 0;
  background-color: #d9d9d9;
`;

export const ProductText = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  width: 1220px;
  height: 133px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${({ theme }) => theme.typo["body-1-b"]}; */
`;
