import { useState } from "react";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import styled from "styled-components";

/**
 * @description 좋아요 기능 적용 가능 대상
 */
type LikeTarget = "product" | "brand" | "post";

export default function LikeButton({ target }: { target: LikeTarget }) {
  const [like, setLike] = useState(false);
  const handlerClick = () => {
    setLike((prev) => !prev);
    console.log(target); // 임시
    // TODO 서버 요청
  };

  // TODO
  // 서버에서 사용자가 좋아요 한 상품 또는 브랜드인지 확인

  return (
    <Container onClick={handlerClick}>
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
