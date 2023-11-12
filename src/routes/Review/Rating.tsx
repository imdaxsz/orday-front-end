import { PiStarFill, PiStarLight } from "react-icons/pi";
import styled from "styled-components";

interface Props {
  rating: number;
  text?: string;
  onClick?: (i: number) => void;
}

export default function Rating({ rating, text, onClick }: Props) {
  return (
    <Container>
      {[...Array(rating)].map((_, i) => (
        <PiStarFill key={i} onClick={onClick && (() => onClick(i + 1))} />
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <PiStarLight
          key={i}
          onClick={onClick && (() => onClick(rating + i + 1))}
        />
      ))}
      {text}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.typo["body-2-m"]};
  svg {
    fill: ${({ theme }) => theme.colors["primary"]["80"]};
    stroke-width: 2px;
    width: 20px;
    height: 20px;
  }
`;
