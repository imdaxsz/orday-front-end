import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MyMenu() {
  return (
    <Container>
      <Item to="#">회원정보</Item>
      <Item to="#">관심상품</Item>
      <Item to="#">주문내역</Item>
      <Item to="#">구매후기</Item>
      <Item to="#">로그아웃</Item>
    </Container>
  );
}

const Container = styled.div`
  width: 89px;
  height: 151px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["primary"]["60"]};
  position: absolute;
  z-index: 120;
  right: 30px;
  padding: 8px 0px;
`;

const Item = styled(Link)`
  ${({ theme }) => theme.typo["body-3-r"]};
  line-height: 120%;
  color: white;
  padding: 5px 20px;
  display: block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;