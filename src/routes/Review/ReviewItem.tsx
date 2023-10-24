import { Link } from "react-router-dom";
import styled from "styled-components";

import Rating from "@/routes/Review/Rating";

import Button from "../../components/Button";

interface ReviewProductInfo {
  id: string;
  image: string;
  name: string;
  size: string;
  color: string;
}

interface Review {
  id?: string;
  orderNo: string;
  productInfo: ReviewProductInfo;
  content?: string;
  rating?: number;
  createdAt?: string;
}

interface Props {
  status: "WRITABLE" | "WRITTEN";
  review: Review;
}

export default function ReviewItem({ status, review }: Props) {
  const { productInfo } = review;
  return (
    <Container>
      <Header>
        <div>
          <h3>{status === "WRITABLE" ? "작성가능" : "작성완료"}</h3>
          <span>{review.orderNo}</span>
        </div>
        {review.createdAt && <p>{review.createdAt}</p>}
      </Header>
      <Content>
        <Link to={`/products/${productInfo.id}`}>
          <img src={productInfo.image} alt={productInfo.name} />
        </Link>
        <Center>
          <h4>{productInfo.name}</h4>
          <span>
            <strong>Color </strong>Brown <strong>Size </strong>L
          </span>
          <p>{review.content}</p>
        </Center>
        <Right>
          {review.rating && <Rating rating={review.rating} />}
          <Button>{status === "WRITABLE" ? "작성하기" : "수정하기"}</Button>
        </Right>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 0;
  height: 234px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  h3 {
    ${({ theme }) => theme.typo["body-2-b"]};
    line-height: 170%;
    color: ${({ theme }) => theme.colors["primary"]["80"]};
  }

  span {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
  }

  p {
    ${({ theme }) => theme.typo["body-1-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }
`;

const Content = styled.div`
  display: flex;
  gap: 30px;

  img {
    display: block;
    width: 100px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;

  & > h4 {
    ${({ theme }) => theme.typo["body-2-b"]};
    display: block;
    width: 100%;
    height: fit-content;
    line-height: 170%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }

  span {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }

  p {
    ${({ theme }) => theme.typo["body-2-r"]};
    margin-top: 20px;
    color: #848484;
  }
`;

const Right = styled.div`
  display: flex;
  height: 100px;
  padding-top: 8px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  & > div:first-of-type {
    margin-bottom: 36px;
  }

  button {
    width: 88px;
    height: 36px;
    ${({ theme }) => theme.typo["body-2-b"]};
    padding: 10px 14px;
    flex-shrink: 0;
  }
`;
