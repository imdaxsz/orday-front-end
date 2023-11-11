import styled from "styled-components";

export const DetailReview = styled.div`
  width: 722px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const RatingDate = styled.div`
  width: 722px;
  height: 76px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
`;

export const ReviewContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => theme.typo["body-3-r"]};
`;

export const ReviewPhoto = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 130px;
  width: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;
