import styled from "styled-components";

import ReviewAction from "@/components/ReviewCard/Action";
import Rating from "@/routes/Review/Rating";

export default function SimpleReviewCard() {
  return (
    <DetailReview>
      <Header>
        <Rating rating={5} text={"아주 좋아요"} />
        <span>{"2023.10.13"}</span>
      </Header>
      <Info>
        <img src="" alt="profile"></img>
        <div>
          <h3>김환경</h3>
          <span>
            <strong>Color </strong>
            {"BROWN"}&nbsp;&nbsp;
            <strong>Size </strong>
            {"M"}
          </span>
        </div>
      </Info>
      <Content>{"너무 좋아요"}</Content>
      <Photo src="" alt="photo1" />
      <ReviewAction />
    </DetailReview>
  );
}

export const DetailReview = styled.div`
  width: 722px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 8px;
`;

export const Header = styled.div`
  width: 722px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};

  span {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #b7d2f1;
  }

  h3 {
    ${({ theme }) => theme.typo["body-2-m"]};
  }

  span {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => theme.typo["body-3-r"]};
`;

export const Photo = styled.img`
  display: block;
  margin-top: 20px;
  margin-bottom: -32px;
  height: 130px;
  width: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;
