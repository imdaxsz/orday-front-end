import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import { addProducts } from "@/store/slices/productInfoSlice";

import { useModal } from "./useModal";

export default function useProductAction(
  isEmptyOptions: boolean,
  productData: ProductDetail,
  selectedOptions: ProductOptionInfo[],
) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isModalOpen, openModal, closeModal } = useModal();

  const isLoggedIn = localStorage.getItem("token");

  const handleChecks = () => {
    if (!isEmptyOptions && !selectedOptions.length) {
      alert("상품을 선택해주세요");
      return false;
    }
    if (!isLoggedIn) {
      alert("로그인 해주세요");
      return false;
    }
    return true;
  };

  // 상품 주문페이지로 이동
  const goOrderPage = () => {
    if (handleChecks() && productData && selectedOptions.length > 0) {
      const products: CartItem[] = selectedOptions.map((item) => {
        const { name, imageUrl, price, discountPrice } = productData;
        return { name, imageUrl, price, discountPrice, ...item };
      });
      dispatch(addProducts(products));
      navigate("/order");
    }
  };

  // 장바구니에 상품 추가
  const addProductToCart = () => {
    if (handleChecks() && productData && selectedOptions.length > 0) {
      const productsInfo: ProductInfo[] = selectedOptions.map((item) => ({
        id: item.id,
        amount: item.amount,
      }));
      dispatch(addToCart(productsInfo));
      openModal();
    }
  };

  return {
    isModalOpen,
    closeModal,
    goOrderPage,
    addProductToCart,
  };
}
