import { useState } from "react";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import styled from "styled-components";

export default function LikeButton() {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike((prev) => !prev);
  };

  // TODO
  // 서버에서 사용자가 좋아요 한 상품인지 확인

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
