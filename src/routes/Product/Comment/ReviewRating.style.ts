import styled from "styled-components";

export const RateGraphPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 135px;
  gap: 15px;
`;

export const RateGraph = styled.div<{ item: { count: number } }>`
  width: 524px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ item, theme }) =>
    item.count !== 0
      ? theme.colors["neutral"]["100"]
      : theme.colors["neutral"]["40"]};
`;

export const Graph = styled.div<{
  item: { count: number };
  totalCount: number;
}>`
  width: 400px;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    ${({ item, theme }) =>
        item.count !== 0
          ? theme.colors["primary"]["80"]
          : theme.colors["neutral"]["20"]}
      ${(props) => (100 / props.totalCount) * props.item.count}%,
    ${({ theme }) => theme.colors["neutral"]["20"]} 0
  );
`;

export const ReviewRating = styled.div`
  display: flex;
  width: 722px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const RateAveragePart = styled.div`
  display: flex;
  flex-direction: column;
  width: 83px;
  height: 63px;
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  gap: 5px;
`;

export const RateAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
  ${({ theme }) => theme.typo["title-1-b"]};
  svg {
    color: ${({ theme }) => theme.colors["primary"]["80"]};
    width: 40px;
    height: 40px;
  }
`;
