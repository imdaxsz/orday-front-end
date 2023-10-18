import styled from "styled-components";

export const CostBox = styled.div`
  width: 490px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

export const QuantityBox = styled.div`
  width: 490px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Size = styled.div`
  ${({ theme }) => theme.typo["body-1-r"]};
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 150px;
`;

export const CancelBtn = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.typo["body-1-r"]};
`;

export const ProductTotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typo["body-1-b"]};
  margin-top: 10px;
`;

export const TotalCost = styled.div`
  ${({ theme }) => theme.typo["body-1-b"]};
`;
