import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";

interface Props {
  status: "WRITABLE" | "WRITTEN";
  orderNo: string;
  productInfo: {
    id: string;
    image: string;
    name: string;
  };
}

export default function ReviewItem({ status, orderNo, productInfo }: Props) {
  return (
    <Container>
      <Header>
        <h3>{status === "WRITABLE" ? "작성가능" : "작성완료"}</h3>
        <p>{orderNo}</p>
      </Header>
      <Content>
        <Link to={`/products/${productInfo.id}`}>
          <img src={productInfo.image} alt={productInfo.name} />
        </Link>
        <h4>{productInfo.name}</h4>
        <Button>{status === "WRITABLE" ? "작성하기" : "수정하기"}</Button>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  height: 27px;

  h3 {
    color: ${({ theme }) => theme.colors["primary"]["80"]};
  }

  p {
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
  }
`;

const Content = styled.div`
  display: flex;
  gap: 30px;

  img {
    display: block;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }

  h4 {
    ${({ theme }) => theme.typo["body-2-b"]};
    line-height: 170%;
    height: fit-content;
    margin-top: 15px;
    width: 100%;
  }

  button {
    width: 88px;
    height: 36px;
    ${({ theme }) => theme.typo["body-2-b"]};
    padding: 10px 14px;
    margin-top: 64px;
    flex-shrink: 0;
  }
`;
