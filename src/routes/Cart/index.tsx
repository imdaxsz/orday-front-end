import { Link } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import useCartList from "@/hooks/useCartList";
import useCheckBox from "@/hooks/useCheckBox";
import { useAppSelector } from "@/store";
import { calculateItemValues } from "@/utils";

import ProductItem from "./ProductItem";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const isLoading = useAppSelector((state) => state.cart.loading);

  const {
    checkedListById,
    resetCheckedList,
    handleCheckChange,
    handleAllCheck,
  } = useCheckBox<CartItem>(cartItems);

  const {
    isModalOpen,
    closeModal,
    openRemoveModal,
    removeCheckedItems,
    goOrderPage,
  } = useCartList(cartItems, checkedListById, resetCheckedList);

  const checkedItems = cartItems.filter((item) =>
    checkedListById.includes(item.id),
  );
  const products = calculateItemValues(checkedItems);

  const totalPrice = products.price - products.sale + products.shipping;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Container>
          <Head title="장바구니 | Orday" />
          <BackButton pageTitle="장바구니" />
          <InfoTitle>
            장바구니
            <span>{cartItems.length}</span>
          </InfoTitle>
          <Box>
            <CheckBox
              id="allCheck"
              text="전체선택"
              onChange={handleAllCheck}
              checked={
                cartItems.length > 0 &&
                checkedListById.length === cartItems.length
              }
            />
            <RemoveBasket onClick={openRemoveModal}>선택상품 삭제</RemoveBasket>
          </Box>
          <Modal
            isOpen={isModalOpen}
            onSubmit={removeCheckedItems}
            onClose={closeModal}
            title={"확인 안내"}
            type={"confirm"}
            detail={"선택한 상품을 삭제하시겠습니까?"}
          />
          <ul>
            {!cartItems.length ? (
              <Empty>장바구니가 비어있습니다.</Empty>
            ) : (
              <>
                {cartItems.map((item) => (
                  <ProductItem
                    key={item.id}
                    item={item}
                    handleCheckChange={handleCheckChange}
                    checkedListById={checkedListById}
                  />
                ))}
              </>
            )}
          </ul>
          <Line />
          <PriceList>
            <li>
              <p>총 상품금액</p>
              <p>{products.price.toLocaleString()}원</p>
            </li>
            <li>
              <p>상품할인</p>
              <p>{products.sale.toLocaleString()}원</p>
            </li>
            <li>
              <p>배송비</p>
              <p>{products.shipping.toLocaleString()}원</p>
            </li>
            <TotalPrice style={{ margin: "24px 0" }}>
              <p>총 주문금액</p>
              <p>{totalPrice.toLocaleString()}원</p>
            </TotalPrice>
          </PriceList>
          <ButtonBox>
            <Button
              type="submit"
              style={{ width: "390px" }}
              onClick={goOrderPage}
            >
              주문하기
            </Button>
            <LinkBtn to={"/"}>계속 쇼핑하기</LinkBtn>
          </ButtonBox>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 0 30px;
  padding-bottom: 80px;
`;

const InfoTitle = styled.h3`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 1rem;
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

const Empty = styled.p`
  margin: 150px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
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
