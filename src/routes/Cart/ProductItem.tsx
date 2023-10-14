import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import RemoveBtn from "@/assets/remove_btn.svg?react";
import CheckBox from "@/components/CheckBox";

import { Item } from ".";

interface ProductItemProps {
  item: Item;
  handleCheckChange: (id: number) => void;
  checkedListById: number[];
}

export default function ProductItem({
  item,
  handleCheckChange,
  checkedListById,
}: ProductItemProps) {
  return (
    <Container>
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
    </Container>
  );
}
const Container = styled.li`
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
