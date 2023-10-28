import styled from "styled-components";

export const ProductText = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  width: 1220px;
  height: 133px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.typo["body-1-b"]};
`;

export const ProductReview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  padding-bottom: 10px;
  width: 722px;
`;

export const ProductPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
  padding-bottom: 10px;
  margin-top: 30px;
  width: 722px;
  svg {
    ${({ theme }) => theme.typo["body-1-b"]};
    cursor: pointer;
  }
`;

export const PhotoReview = styled.div`
  width: 722px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
