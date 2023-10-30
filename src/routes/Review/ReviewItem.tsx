import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Rating from "@/routes/Review/Rating";

import Button from "../../components/Button";

interface Props {
  status: ReviewStatus;
  review: WritableReview | WrittenReview;
}

export default function ReviewItem({ status, review }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    const url =
      "reviewId" in review
        ? `/review/write?mode=edit&id=${review.reviewId}`
        : `/review/write?mode=new&id=${review.productId}`;
    navigate(url);
  };

  return (
    <Container>
      <Header>
        <div>
          <h3>{status === "WRITABLE" ? "작성가능" : "작성완료"}</h3>
          <span>{review.orderId}</span>
        </div>
        {"createdAt" in review && <p>{review.createdAt.split("T")[0]}</p>}
      </Header>
      <Content>
        <Link to={`/products/${review.productId}`}>
          <img src={review.imageUrl} alt={review.name} />
        </Link>
        <Center>
          <h4>{review.name}</h4>
          <span>
            {Boolean(review.color) && (
              <>
                <strong>Color </strong>
                {review.color}&nbsp;&nbsp;
              </>
            )}
            {Boolean(review.size) && (
              <>
                <strong>Size </strong>
                {review.size}
              </>
            )}
          </span>
          <p>{"content" in review && review.content}</p>
        </Center>
        <Right>
          {"rating" in review && <Rating rating={review.rating} />}
          <Button onClick={handleClick}>
            {status === "WRITABLE" ? "작성하기" : "수정하기"}
          </Button>
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
  width: 446px;

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
  width: 116px;
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
