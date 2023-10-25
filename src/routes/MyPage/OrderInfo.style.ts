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
  width: 614px;
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
`;

export const OrderMessage = styled.div`
  margin-top: 200px;
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;

export const OrderHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  ${({ theme }) => theme.typo["body-1-b"]};
`;

export const HistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  ${({ theme }) => theme.typo["body-3-r"]};
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  padding: 10px;
`;

export const HistoryCode = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

export const HistoryDate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  color: ${({ theme }) => theme.colors["neutral"]["100"]};
`;

export const HistoryContent = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  width: 800px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const HistoryImage = styled.div`
  width: 140px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors["neutral"]["40"]};
`;

export const HistoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const HistoryList = styled.li`
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  ${({ theme }) => theme.typo["body-3-b"]};
  &:first-child {
    color: ${({ theme }) => theme.colors["primary"]["80"]};
  }
  &:nth-child(2) {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
  }
`;

export const HistoryPrice = styled.div`
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
