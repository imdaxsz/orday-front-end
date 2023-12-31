import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Loader from "@/components/Loader";
import useOrderList from "@/hooks/useOrderList";

import OrderListBox from "./OrderListBox";

const orderStatusCount: OrderStatusCount[] = [
  { id: 1, name: "전체", value: "totalOrdersCount" },
  { id: 2, name: "입금/결제", value: "paymentPendingCount" },
  { id: 3, name: "배송중", value: "shippingInCount" },
  { id: 4, name: "배송완료", value: "deliveredCount" },
  { id: 5, name: "구매확정", value: "confirmedPurchaseCount" },
  { id: 6, name: "교환/반품", value: "exchangeReturnCount" },
];

export default function OrderInfo() {
  const { isLoading, ref, isOrderListPage, orderStatus, orderList } =
    useOrderList();

  return (
    <>
      <Container>
        <Title>최근 주문 현황</Title>
        {isLoading && <Loader />}
        <StatusBox>
          <List>
            {orderStatus &&
              orderStatusCount.map((count) => (
                <ListBox key={count.id}>
                  <ListName>{count.name}</ListName>
                  <ListCount>{orderStatus[count.value]}</ListCount>
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
            <>{!isLoading && <Empty>주문 내역이 없습니다.</Empty>}</>
          ) : (
            <>
              {orderList.map((item) => (
                <OrderListBox
                  key={item.orderId}
                  item={item}
                  orderStatus={orderStatusCount.find((status) =>
                    status.value.includes(item.status),
                  )}
                />
              ))}
              {isOrderListPage && <div ref={ref}></div>}
            </>
          )}
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
