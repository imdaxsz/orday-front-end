import styled from "styled-components";

import Action from "@/components/CommunityCard/Review/Action";
import CommunityHeader from "@/components/CommunityCard/Review/Header";

import Rating from "../../Review/Rating";

export default function ReviewCard() {
  return (
    <DetailReview>
      <Header>
        <Rating rating={5} text={"아주 좋아요"} />
        <span>{"2023.10.13"}</span>
      </Header>
      <CommunityHeader
        info={{ name: "김환경", update: "Color:Brown Size:L" }}
      />
      <Content>{"너무 좋아요"}</Content>
      <Photo src="" alt="photo1" />
      <Action />
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
