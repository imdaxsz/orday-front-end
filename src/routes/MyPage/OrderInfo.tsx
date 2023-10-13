import {
  Current,
  CurrentTitle,
  CurrentBox,
  CurrentList,
  ListBox,
  ListName,
  ListNumber,
  Order,
  OrderMessage,
} from "./OrderInfo.style";

const orderStatus = [
  { name: "전체", number: 0 },
  { name: "입금/결제", number: 0 },
  { name: "배송중", number: 0 },
  { name: "배송완료", number: 0 },
  { name: "구매확정", number: 0 },
  { name: "교환/반품", number: 0 },
];

export default function OrderInfo() {
  return (
    <>
      <Current>
        <CurrentTitle>최근 주문 현황</CurrentTitle>
        <CurrentBox>
          <CurrentList>
            {orderStatus.map((status, index) => (
              <ListBox key={index}>
                <ListName>{status.name}</ListName>
                <ListNumber>{status.number}</ListNumber>
              </ListBox>
            ))}
          </CurrentList>
        </CurrentBox>
        <Order>
          <OrderMessage>주문 내역이 없습니다.</OrderMessage>
        </Order>
      </Current>
    </>
  );
}
