import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import styled from "styled-components";

import useToggleLike from "@/hooks/useToggleLike";

interface LikeButtonProps {
  id: number;
  target: LikeTarget;
  isLiked: boolean; // 현재 사용자의 좋아요 여부
}

export default function LikeButton({ id, target, isLiked }: LikeButtonProps) {
  const { like, handleClick } = useToggleLike(id, target, isLiked);

  return (
    <Container onClick={handleClick}>
      {like ? <PiHeartFill /> : <PiHeartBold />}
    </Container>
  );
}

const Container = styled.button`
  all: initial;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    display: block;
    color: ${({ theme }) => theme.colors["secondary"]};
    width: 100%;
    height: 100%;
  }
`;
