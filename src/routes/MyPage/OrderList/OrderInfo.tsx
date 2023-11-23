import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { getOrderList } from "@/api/OrderApi";

import OrderListBox from "./OrderListBox";

// const mockData: CursorPage<OrderListInfo> = {
//   cursorRequest: {
//     key: 0,
//     size: 0,
//   },
//   body: [
//     {
//       orderId: 10001,
//       productId: 1,
//       productName: "상품명",
//       color: "컬러",
//       size: "S",
//       price: 10000,
//       discountPrice: 0,
//       amount: 2,
//       status: "confirmation",
//       imageUrl: "string",
//       createdAt: "2023-11-20T10:11:15.264Z",
//     },
//     {
//       orderId: 10002,
//       productId: 2,
//       productName: "상품명",
//       color: "컬러",
//       size: "XL",
//       price: 20000,
//       discountPrice: 0,
//       amount: 1,
//       status: "confirmation",
//       imageUrl: "string",
//       createdAt: "2023-11-20T10:11:15.264Z",
//     },
//   ],
// };

const orderStatus = [
  { id: 1, name: "전체", count: 0 },
  { id: 2, name: "입금/결제", count: 0 },
  { id: 3, name: "배송중", count: 0 },
  { id: 4, name: "배송완료", count: 0 },
  { id: 5, name: "구매확정", count: 0 },
  { id: 6, name: "교환/반품", count: 0 },
];

export default function OrderInfo() {
  // const [orderList, setOrderList] = useState<OrderListInfo[]>(mockData.body);

  const location = useLocation();
  const pathname = location.pathname.replace("/", "");
  const isOrderListPage = pathname.includes("/order");

  const [ref, inView] = useInView();
  const [orderList, setOrderList] = useState<OrderListInfo[]>([]);
  const [nextKey, setNextKey] = useState<number | null>(null);

  const fetchOrderList = async () => {
    const {
      cursorRequest: { key },
      body: data,
    } = await getOrderList(nextKey, 5);
    !isOrderListPage
      ? setOrderList(data.splice(0, 4))
      : setOrderList((prev) => [...prev, ...data]);
    setNextKey(key);
  };
  useEffect(() => {
    fetchOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView && nextKey !== -1) fetchOrderList();
  }, [inView]);

  return (
    <>
      <Container>
        <Title>최근 주문 현황</Title>
        <StatusBox>
          <List>
            {orderStatus.map((status) => (
              <ListBox key={status.id}>
                <ListName>{status.name}</ListName>
                <ListCount>{status.count}</ListCount>
              </ListBox>
            ))}
          </List>
        </StatusBox>
        <OrderList>
          <HistoryHeader>
            주문내역
            {!isOrderListPage && (
              <MoreLink to="order">
                더보기
                <IoIosArrowForward />
              </MoreLink>
            )}
          </HistoryHeader>
          {!orderList.length ? (
            <Empty>주문 내역이 없습니다.</Empty>
          ) : (
            <>
              {orderList.map((item) => (
                <OrderListBox key={item.orderId} item={item} />
              ))}
            </>
          )}
          {isOrderListPage && <div ref={ref}></div>}
        </OrderList>
      </Container>
    </>
  );
}

const MoreLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #8a8a8a;
  text-align: right;
  font-size: 14px;
  font-weight: 300;
  gap: 2px;
  & > svg {
    width: 12px;
    height: 12px;
  }
`;

const Empty = styled.p`
  margin: 150px auto;
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
  text-align: center;
`;

const Container = styled.div`
  width: 800px;
  padding-bottom: 200px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;

const StatusBox = styled.div`
  width: 800px;
  height: 127px;
  border-bottom: 2px solid ${({ theme }) => theme.colors["neutral"]["40"]};
  border-top: 2px solid ${({ theme }) => theme.colors["neutral"]["40"]};
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  width: fit-content;
  height: 68px;
  display: flex;
  gap: 75px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ListName = styled.div`
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const ListCount = styled.div`
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`;

const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ theme }) => theme.typo["body-2-b"]};
`;
