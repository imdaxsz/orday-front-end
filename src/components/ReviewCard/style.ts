import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
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

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #b7d2f1;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;
  gap: 2px;
`;

export const UserName = styled.div`
  ${({ theme }) => theme.typo["body-2-m"]};
  color: ${({ theme }) => theme.colors["neutral"]["70"]};
`;

export const CreatedAt = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  font-weight: 300;
  color: #b7b7b7;
`;

export const ReviewImage = styled.img`
  display: block;
  width: 310px;
  height: 250px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
`;

export const ProductInfo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 310px;
  height: 45px;
  border-radius: 10px;
  margin-top: 10px;
  gap: 10px;
`;

export const ProductImage = styled.img`
  width: 55px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
`;

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  ${({ theme }) => theme.typo["micro-r"]};
  margin-bottom: 2px;
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["70"]};
  ${({ theme }) => theme.typo["body-3-b"]};
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const Content = styled.div`
  margin-top: 5px;
  width: 310px;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
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
