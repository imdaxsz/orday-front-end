import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Box,
  List,
  ListBox,
  ListName,
  ListNumber,
  Order,
  // OrderMessage, 주문 목록이 없을 때 출력
  OrderHistory,
  HistoryHeader,
  HistoryBox,
  HistoryCode,
  HistoryDate,
  HistoryContent,
  HistoryImage,
  HistoryInfo,
  HistoryList,
  HistoryPrice,
} from "./OrderInfo.style";

interface OrderInfoProps {
  showIcon: boolean;
}

const orderStatus = [
  { name: "전체", number: 0 },
  { name: "입금/결제", number: 0 },
  { name: "배송중", number: 1 },
  { name: "배송완료", number: 0 },
  { name: "구매확정", number: 1 },
  { name: "교환/반품", number: 0 },
];

const codeData = [
  { status: "배송중 000000001", date: "2023-10-30" },
  { status: "배송완료 000000002", date: "2023-10-30" },
];

const listData = [
  {
    status: "",
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
    color: "BROWN",
    size: "L",
    count: "1",
  },
  {
    status: "구매 확정",
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
    color: "BROWN",
    size: "L",
    count: "1",
  },
];

export default function OrderInfo({ showIcon }: OrderInfoProps) {
  return (
    <>
      <Container>
        <Title>최근 주문 현황</Title>
        <Box>
          <List>
            {orderStatus.map((status, index) => (
              <ListBox key={index}>
                <ListName>{status.name}</ListName>
                <ListNumber>{status.number}</ListNumber>
              </ListBox>
            ))}
          </List>
        </Box>
        <Order>
          <OrderHistory>
            <HistoryHeader>
              주문내역
              {showIcon !== false && (
                <Link to="order">
                  <FaArrowRight />
                </Link>
              )}
            </HistoryHeader>
            {codeData.map((_, index) => (
              <HistoryBox key={index}>
                <HistoryCode>{codeData[index].status}</HistoryCode>
                <HistoryDate>{codeData[index].date}</HistoryDate>
                <HistoryContent>
                  <HistoryImage />
                  <HistoryInfo>
                    <HistoryList>{listData[index].status}</HistoryList>
                    <HistoryList>{listData[index].name}</HistoryList>
                    <HistoryList>{listData[index].color}</HistoryList>
                    <HistoryList>사이즈 {listData[index].size}</HistoryList>
                    <HistoryList>수량 {listData[index].count}개</HistoryList>
                  </HistoryInfo>
                </HistoryContent>
                <HistoryPrice>₩ 198,000</HistoryPrice>
              </HistoryBox>
            ))}
          </OrderHistory>
        </Order>
      </Container>
    </>
  );
}
