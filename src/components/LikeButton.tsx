import { useState } from "react";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import styled from "styled-components";

/**
 * @description 좋아요 기능 적용 가능 대상
 */
type LikeTarget = "product" | "brand" | "post";

interface LikeButtonProps {
  target: LikeTarget;
  isLiked?: boolean; // 현재 사용자의 좋아요 여부
}

export default function LikeButton({ target, isLiked }: LikeButtonProps) {
  const [like, setLike] = useState(isLiked || false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike((prev) => !prev);
    console.log(target); // 임시
    // TODO 서버 요청
  };

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
