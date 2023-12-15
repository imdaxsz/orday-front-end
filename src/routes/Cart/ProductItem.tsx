import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddBtn from "@/assets/add_btn.svg?react";
import ReduceBtn from "@/assets/reduce_btn.svg?react";
import CheckBox from "@/components/CheckBox";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
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
  const { isModalOpen, openModal, closeModal } = useModal();

  const removeCheckedItem = () => {
    dispatch(removeCartItem([item.id]));
    closeModal();
  };

  return (
    <Container>
      <CheckBox
        onChange={() => handleCheckChange(item.id)}
        checked={checkedListById.includes(item.id)}
      />
      <CartListItem to={`/product/${item.id}?name=${item.name}`}>
        <ProductImage src={item.imageUrl} />
        <ItemName>
          <Name>{item.name}</Name>
          <Color>{item.color && item.color}</Color>
        </ItemName>
      </CartListItem>
      <ItemSize>{item.size && `사이즈 ${item.size}`}</ItemSize>
      <ItemAmount>
        <p>수량</p>
        <Count>
          <ReduceBtn
            style={{ cursor: "pointer" }}
            onClick={() =>
              item.amount > 1 && dispatch(decreaseCartItemQuantity(item.id))
            }
          />
          <p>{item.amount}</p>
          <AddBtn
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseCartItemQuantity(item.id))}
          />
        </Count>
      </ItemAmount>
      {item.discountPrice > 0 && (
        <div>
          <ItemPrice $discount={!!item.discountPrice}>
            {item.price.toLocaleString()}원
          </ItemPrice>
          <ItemPrice>
            {(item.price - item.discountPrice).toLocaleString()}원
          </ItemPrice>
        </div>
      )}
      {item.discountPrice === 0 && (
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
      )}
      <DeleteBtn onClick={openModal} aria-label="상품삭제 버튼">
        <IoMdClose />
      </DeleteBtn>
      <Modal
        isOpen={isModalOpen}
        onSubmit={removeCheckedItem}
        onClose={closeModal}
        title={"확인 안내"}
        type={"confirm"}
        detail={"상품을 장바구니에서 삭제하시겠습니까?"}
      />
    </Container>
  );
}
const Container = styled.li`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  color: #5b5b5b;
`;

const CartListItem = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

const ProductImage = styled.img`
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  width: 150px;
  height: 183px;
  object-fit: cover;
  border-radius: 15px;
`;

const ItemName = styled.div`
  width: 180px;
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
const Color = styled.p`
  font-size: 12px;
`;

const ItemSize = styled.p`
  font-size: 12px;
`;

const ItemAmount = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  gap: 14px;
  p {
    font-size: 12px;
  }
`;

const Count = styled.div`
  padding: 8px;
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ItemPrice = styled.p<{ $discount?: boolean }>`
  width: 80px;
  margin: 10px 0;
  color: ${({ theme, $discount = false }) =>
    $discount && theme.colors["neutral"]["40"]};
  font-weight: ${({ theme, $discount }) =>
    $discount ? theme.typo["body-2-m"] : theme.typo["body-2-b"]};
  text-decoration: ${({ $discount }) => $discount && "line-through"};
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  font-size: 20px;
  justify-self: end;
  cursor: pointer;
`;
