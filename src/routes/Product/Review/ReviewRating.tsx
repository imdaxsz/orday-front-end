import { PiStarFill } from "react-icons/pi";
import styled, { css } from "styled-components";

import { RATING_LABEL } from "@/constants";

interface Graph {
  label: string;
  value: number;
}

const INIT_GRAPH: Graph[] = RATING_LABEL.map((label) => ({ label, value: 0 }));

interface Props {
  statics: ReviewStatics;
}

export default function ReviewRating({ statics }: Props) {
  return (
    <Container>
      <AverageRating>
        구매자 평점
        <RatingContainer>
          <PiStarFill />
          <span>{statics.averageRating}</span>
        </RatingContainer>
      </AverageRating>
      <GraphContainer>
        {INIT_GRAPH.map((item, index) => (
          <GraphItem key={index} $active={statics.proportion[index] !== 0}>
            <span>{item.label}</span>
            <ProgressBar value={statics.proportion[index]}>
              <div />
            </ProgressBar>
            <span>{statics.proportion[index]}%</span>
          </GraphItem>
        ))}
      </GraphContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 722px;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors["neutral"]["100"]};
`;

const AverageRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 83px;
  ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["50"]};
  gap: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  color: black;
  font-size: 26px;
  font-weight: 700;
  svg {
    color: ${({ theme }) => theme.colors["primary"]["80"]};
    width: 36px;
    height: 36px;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 135px;
  gap: 10px;
`;

const GraphItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  & > span:first-of-type {
    width: 74px;
  }
  & > span:last-of-type {
    width: 40px;
  }
  ${({ theme, $active = false }) =>
    $active
      ? css`
          ${theme.typo["body-2-m"]};
          color: ${theme.colors["neutral"]["100"]};
        `
      : css`
          ${theme.typo["body-2-r"]};
          color: #a4a4a4;
        `}
`;

const ProgressBar = styled.div<{ value: number }>`
  width: 400px;
  height: 10px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};

  & > div {
    width: ${({ value }) => `${value}%`};
    height: 100%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors["primary"]["80"]};
  }
`;
