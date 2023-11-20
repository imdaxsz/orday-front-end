import { Link } from "react-router-dom";
import styled from "styled-components";

import NotFoundImage from "@/assets/404.svg?react";

export default function NotFound() {
  return (
    <Container>
      <ImageContainer>
        <NotFoundImage />
      </ImageContainer>
      <Content>
        <h3>원하시는 페이지를 찾을 수 없습니다.</h3>
        <p>찾으려는 페이지의 주소가 잘못 입력되었거나,</p>
        <p>주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.</p>
        <p>입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.</p>
      </Content>
      <LinkButton to="/">올데이 홈 가기</LinkButton>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  height: 284px;
  margin: 110px auto 0;
`;

const ImageContainer = styled.div`
  width: 330px;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  margin-top: -60px;
  h3 {
    ${({ theme }) => theme.typo["title-2-b"]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
    margin-bottom: 9px;
  }
  p {
    ${({ theme }) => theme.typo["body-3-r"]};
    line-height: 140%;
    font-weight: 300;
    color: #b1b1b1;
  }
`;

const LinkButton = styled(Link)`
  width: 154px;
  height: 34px;
  margin: 30px auto;
  padding: 10px 37px;
  ${({ theme }) => theme.typo["body-3-m"]};
  line-height: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors["primary"]["80"]};
  border-radius: 10px;
  display: block;
`;
