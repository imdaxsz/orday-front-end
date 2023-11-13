import styled from "styled-components";

export const ReviewComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 349px;
  height: 588px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;
  width: 310px;
  padding: 30px 0;
`;

export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #b7d2f1;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;
  gap: 2px;
`;

export const InfoName = styled.div`
  ${({ theme }) => theme.typo["body-2-m"]};
`;

export const InfoText = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["50"]};
`;

export const Following = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 27px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors["primary"]["60"]};
  color: ${({ theme }) => theme.colors["neutral"]["10"]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
`;

export const Heart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors["secondary"]};
  cursor: pointer;
  font-size: 24px;
`;

export const BodyContainer = styled.div`
  width: 310px;
  height: 250px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
`;

export const Ad = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 310px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  margin-top: 20px;
  gap: 10px;
`;

export const AdImage = styled.img`
  width: 55px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
`;

export const AdText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeyWord = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.colors["secondary"]};
  font-size: ${({ theme }) => theme.typo["body-4-b"]};
`;

export const Product = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  font-size: ${({ theme }) => theme.typo["micro-m"]};
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["70"]};
  font-size: ${({ theme }) => theme.typo["body-4-b"]};
`;

export const Comment = styled.div`
  margin-top: 5px;
  width: 310px;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
`;

export const Reaction = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
  align-items: center;
  width: 310px;
  height: 30px;
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  gap: 5px;
`;

export const LikeButton = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ $active }) => ($active ? "#4681F2" : "#ccc")};

  svg {
    margin-top: 1px;
  }
`;

export const CommentButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
