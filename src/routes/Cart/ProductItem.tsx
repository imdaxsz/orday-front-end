import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import ReduceBtn from "@/assets/reduce_btn.svg?react";
import CheckBox from "@/components/CheckBox";
import { useAppDispatch } from "@/store";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "@/store/slices/cartSlice";

interface ProductItemProps {
  item: CartItem;
  handleCheckChange: (id: number) => void;
  checkedListById: number[];
}

export default function ProductItem({
  item,
  handleCheckChange,
  checkedListById,
}: ProductItemProps) {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <CheckBox
        onChange={() => handleCheckChange(item.id)}
        checked={checkedListById.includes(item.id)}
      />
      <ProductImage src={item.imageUrl} />
      <ItemName>
        <Name>{item.name}</Name>
        <Color>{item.color && item.color}</Color>
      </ItemName>
      <ItemSize>{item.size && `사이즈 ${item.size}`}</ItemSize>
      <ItemAmount>
        <p>수량</p>
        <Count>
          <ReduceBtn
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decreaseCartItemQuantity(item.id))}
          />
          <p>{item.amount}</p>
          <AddBtn
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseCartItemQuantity(item.id))}
          />
        </Count>
      </ItemAmount>
      <ItemPrice>{(item.price * item.amount).toLocaleString()}원</ItemPrice>
      <DeleteBtn onClick={() => dispatch(removeCartItem([item.id]))}>
        <IoMdClose />
      </DeleteBtn>
    </Container>
  );
}
const Container = styled.li`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  text-align: right;
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
  width: 125px;
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
  width: 80px;
  font-size: 16px;
  font-weight: bold;
`;

const DeleteBtn = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
