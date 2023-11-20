import styled from "styled-components";

import RemoveIcon from "@/assets/remove.svg?react";

export default function RemoveButton() {
  const handleClick = () => {
    const ok = window.confirm("관심 상품을 삭제하시겠습니까?");
    if (ok) {
      // TODO
      // 관심 상품 삭제
    }
  };

  return (
    <Container onClick={handleClick}>
      <RemoveIcon />
    </Container>
  );
}

const Container = styled.button`
  all: initial;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
