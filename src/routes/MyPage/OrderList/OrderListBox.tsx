import styled from "styled-components";

interface OrderListBoxProps {
  item: OrderListInfo;
  orderStatus?: OrderStatusCount;
}

export default function OrderListBox({ item, orderStatus }: OrderListBoxProps) {
  return (
    <HistoryBox key={item.orderId}>
      <OrderStatus>
        <StatusCode>
          <ItemStatus>{orderStatus?.name}</ItemStatus>
          <ItemId>{item.orderId}</ItemId>
        </StatusCode>
        <HistoryDate>{item.createdAt.split("T")[0]}</HistoryDate>
      </OrderStatus>
      <Content>
        <ProductInfo>
          <HistoryImage src={item.imageUrl} alt="productImg" />
          <HistoryDetail>
            <p>{orderStatus?.id === 5 ? orderStatus.name : ""}</p>
            <p>{item.productName}</p>
            <p>{item.color && item.color}</p>
            <p>{item.size && `사이즈 ${item.size}`}</p>
            <p>수량 {item.amount}개</p>
          </HistoryDetail>
        </ProductInfo>
        <p>
          ₩ {item.discountPrice ? item.price - item.discountPrice : item.price}
        </p>
      </Content>
    </HistoryBox>
  );
}

const HistoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["70"]};
`;

const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
`;

const StatusCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ItemStatus = styled.p`
  font-size: ${({ theme }) => theme.typo["body-2-r"]};
  margin-right: 13px;
`;
const ItemId = styled.p`
  font-size: ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const HistoryDate = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.typo["body-2-r"]};
`;

const Content = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["20"]};
  p {
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
    font-size: ${({ theme }) => theme.typo["body-2-m"]};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const HistoryImage = styled.img`
  width: 140px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors["neutral"]["40"]};
`;

const HistoryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  p {
    &:first-of-type {
      color: ${({ theme }) => theme.colors["primary"]["80"]};
    }
    &:nth-of-type(2) {
      font-size: ${({ theme }) => theme.typo["body-2-m"]};
      color: ${({ theme }) => theme.colors["neutral"]["70"]};
    }
  }
`;
