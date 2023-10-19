import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 176px;
`;

export const Title = styled.div`
  width: 113px;
  height: 24px;
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;

export const Box = styled.div`
  width: 800px;
  height: 127px;
  border-bottom: 2px solid ${({ theme }) => theme.colors["neutral"]["40"]};
  border-top: 2px solid ${({ theme }) => theme.colors["neutral"]["40"]};
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  width: fit-content;
  height: 68px;
  display: flex;
  gap: 75px;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ListName = styled.div`
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

export const ListNumber = styled.div`
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 520px;
`;

export const OrderMessage = styled.div`
  margin-top: 200px;
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;
