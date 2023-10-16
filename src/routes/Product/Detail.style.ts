import styled from "styled-components";

export const ProductDetail = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  width: 490px;
  height: 820px;
  margin-top: 60px;
`;

export const ProductCode = styled.div`
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  font-size: ${({ theme }) => theme.typo["body-2-r"]};
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.typo["body-2-r"]};
`;

export const ProductPrice = styled.div`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.typo["body-1-b"]};
`;

export const ProductSize = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const SizeBox = styled.div<{ selected: boolean }>`
  width: 65px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors["primary"]["80"] : theme.colors["neutral"]["20"]};
  color: ${({ theme, selected }) =>
    selected ? theme.colors["neutral"]["10"] : theme.colors["neutral"]["100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProductBtn = styled.div`
  display: flex;
  gap: 5px;
  width: 496px;
  height: 50px;
  margin-top: 10px;
`;

export const Button = styled.div<{ selectedBtn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 213px;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors["primary"]["80"]};
  color: ${({ theme, selectedBtn }) =>
    selectedBtn
      ? theme.colors["neutral"]["10"]
      : theme.colors["primary"]["80"]};
  background-color: ${({ theme, selectedBtn }) =>
    selectedBtn
      ? theme.colors["primary"]["80"]
      : theme.colors["neutral"]["10"]};
  &:last-child {
    width: 50px;
  }
`;

export const ProductCaution = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  height: auto;
  margin-top: 65px;
  gap: 40px;
  user-select: none;
`;

export const CautionKey = styled.div`
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
  cursor: pointer;
  & svg {
    margin-right: 10px;
  }
`;

export const CautionValue = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
