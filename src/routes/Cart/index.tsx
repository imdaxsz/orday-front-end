import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import RemoveBtn from "@/assets/remove_btn.svg?react";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";

interface Item {
  id: number;
  name: string;
  color: string;
  size: string;
  amount: number;
  price: number;
  image: string;
}

const mockData: Item[] = [
  {
    id: 1,
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
    color: "BROWN",
    size: "L",
    amount: 1,
    price: 100000,
    image: "",
  },
  {
    id: 2,
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
    color: "BROWN",
    size: "L",
    amount: 1,
    price: 50000,
    image: "",
  },
];
export default function Cart() {
  const [checkedListById, setCheckedListById] = useState<number[]>([]);
  const checkedNum = checkedListById.length;

  const handleCheckChange = (id: number) => {
    const isChecked = checkedListById.includes(id);

    if (isChecked) {
      setCheckedListById((prev) => prev.filter((el) => el !== id));
    } else {
      setCheckedListById((prev) => [...prev, id]);
    }
  };

  const handleAllCheck = ({
    target: { checked },
  }: {
    target: { checked: boolean };
  }) => {
    if (checked) {
      setCheckedListById(mockData.map((item: Item) => item.id));
    } else {
      setCheckedListById([]);
    }
  };

  const price = {
    product: mockData.length
      ? mockData
          .map((item) => Number(item.price))
          .reduce((acc, cur) => acc + cur)
      : 0,
    sale: 0,
    shipping: 0,
  };
  const totalPrice = price.product + price.sale + price.shipping;

  return (
    <>
      <BackButton pageTitle="장바구니" />
      <InfoTitle>
        주문상품
        <span>{mockData.length ? mockData.length : 0}</span>
      </InfoTitle>
      <Box>
        <CheckBox
          text="전체선택"
          onChange={handleAllCheck}
          checked={checkedNum === mockData.length}
        />
        <RemoveBasket>선택상품 삭제</RemoveBasket>
      </Box>
      <ProductList>
        {!mockData.length ? (
          <Empty>장바구니가 비어있습니다.</Empty>
        ) : (
          <>
            {mockData.map((item) => (
              <ProductItem key={item.id}>
                <CheckBox
                  onChange={() => handleCheckChange(item.id)}
                  checked={checkedListById.includes(item.id)}
                />
                <ProductImage src={item.image} />
                <ItemName>
                  <Name>{item.name}</Name>
                  <Color>{item.color}</Color>
                </ItemName>
                <ItemSize>사이즈 {item.size}</ItemSize>
                <ItemAmount>
                  <p>수량</p>
                  <Count>
                    {/* onClick시 api 수량 감소, 금액 변경 */}
                    <RemoveBtn style={{ cursor: "pointer" }} />
                    <p>{item.amount}</p>
                    <AddBtn style={{ cursor: "pointer" }} />
                  </Count>
                </ItemAmount>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                {/* 클릭시 장바구니에서 삭제 */}
                <DeleteBtn>
                  <IoMdClose />
                </DeleteBtn>
              </ProductItem>
            ))}
          </>
        )}
      </ProductList>
      <Line />
      <PriceList>
        <li>
          <p>총 상품금액</p>
          <p>{price.product.toLocaleString()}원</p>
        </li>
        <li>
          <p>상품할인</p>
          <p>{price.sale.toLocaleString()}원</p>
        </li>
        <li>
          <p>배송비</p>
          <p>{price.shipping.toLocaleString()}원</p>
        </li>
        <TotalPrice style={{ margin: "24px 0" }}>
          <p>총 주문금액</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </TotalPrice>
      </PriceList>
      <ButtonBox>
        <Button type="submit" style={{ width: "390px" }}>
          주문하기
        </Button>
        <LinkBtn to={"/"}>계속 쇼핑하기</LinkBtn>
      </ButtonBox>
    </>
  );
}

const InfoTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  span {
    display: inline-flex;
    height: 17px;
    margin: 0 5px;
    padding: 3px 6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary["80"]};
    font-size: 12px;
    color: #fff;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #5b5b5b;
`;

const RemoveBasket = styled.p`
  cursor: pointer;
`;

const ProductList = styled.ul``;

const Empty = styled.p`
  margin: 150px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
const ProductItem = styled.li`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  width: 150px;
  height: 183px;
  object-fit: cover;
  border-radius: 15px;
`;

const ItemName = styled.div``;

const Name = styled.p`
  color: #5b5b5b;
  font-size: 12px;
  font-weight: bold;
`;
const Color = styled.p`
  color: #5b5b5b;
  font-size: 12px;
`;

const ItemSize = styled.p`
  color: #5b5b5b;
  font-size: 12px;
`;

const ItemAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  p {
    color: #5b5b5b;
    font-size: 12px;
  }
`;

const Count = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const DeleteBtn = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral["20"]};
`;

const PriceList = styled.ul`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral["40"]};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  li {
    width: 254px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

const TotalPrice = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #212121;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkBtn = styled(Link)`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.neutral["40"]};
  font-size: 12px;
  text-decoration-line: underline;
`;
