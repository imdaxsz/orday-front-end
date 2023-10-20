import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Button from "@/components/Button";

export default function OrderConfirm() {
  return (
    <Container>
      <Title>주문이 완료되었습니다.</Title>
      <Detail>
        주문내역 및 배송에 관한 안내는{" "}
        <DetailLink to="/myPage">마이페이지</DetailLink>를 통하여 확인
        가능합니다.
      </Detail>
      <DetailList>
        <p>주문번호 : 00000000000</p>
        <p>주문일자 : 2023-10-30 15:54:50</p>
      </DetailList>
      <Button>
        <Link to="/myPage">주문내역 확인</Link>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;

  button {
    width: 150px;
    margin: 85px auto;
    padding: 15px 0px;
    ${({ theme }) => theme.typo["body-3-m"]};
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-top: 200px;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  ${({ theme }) => theme.typo["body-3-r"]};
  margin-bottom: 30px;
`;

const DetailLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary["60"]};
  text-decoration-line: underline;
`;

const DetailList = styled.div`
  width: 340px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.typo["body-4-r"]};
`;
