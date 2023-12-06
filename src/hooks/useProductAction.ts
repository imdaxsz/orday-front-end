import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import { addProducts } from "@/store/slices/productInfoSlice";

export default function useProductAction(
  isEmptyOptions: boolean,
  productData: ProductDetail,
  selectedOptions: ProductOptionInfo[],
) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const addProductToCart = () => {
    if (handleChecks() && productData && selectedOptions.length > 0) {
      const productsInfo: ProductInfo[] = selectedOptions.map((item) => ({
        id: item.id,
        amount: item.amount,
      }));
      dispatch(addToCart(productsInfo));
      navigate("/cart");
    }
  };

  return {
    goOrderPage,
    addProductToCart,
  };
}
