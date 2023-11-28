import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { fetchCartItems, removeCartItem } from "@/store/slices/cartSlice";
import { addProducts } from "@/store/slices/productInfoSlice";

import { useModal } from "./useModal";

export default function useCartList(
  cartItems: CartItem[],
  checkedListById: number[],
  resetCheckedList: () => void,
) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  const checkedNum = checkedListById.length;

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const openRemoveModal = () => {
    if (!checkedNum) {
      alert("삭제할 상품을 선택해주세요");
      return;
    }
    openModal();
  };

  const removeCheckedItems = () => {
    dispatch(removeCartItem(checkedListById));
    resetCheckedList();
    closeModal();
  };

  const goOrderPage = () => {
    if (!checkedNum) {
      alert("상품을 선택해주세요");
      return;
    }
    const products = cartItems.filter((item) =>
      checkedListById.includes(item.id),
    );
    dispatch(addProducts(products));
    navigate("/order");
  };

  return {
    isModalOpen,
    closeModal,
    checkedNum,
    openRemoveModal,
    removeCheckedItems,
    goOrderPage,
  };
}
