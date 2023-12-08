import { useNavigate } from "react-router-dom";

import { createOrderProduct } from "@/api/OrderApi";
import { useAppDispatch } from "@/store";
import { resetProducts } from "@/store/slices/productInfoSlice";

import { useModal } from "./useModal";

export default function useOrderForm(
  form: OrderForm,
  productItems: CartItem[],
  validateForm: () => boolean,
) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isModalOpen, openModal, closeModal } = useModal();

  const openCheckedModal = () => {
    validateForm();
    openModal();
  };

  const onSubmitOrderForm = async () => {
    if (!validateForm()) return;
    closeModal();
    const orderInfo: OrderInfo = {
      ...form,
      productsInfo: productItems.map(({ id, amount }) => ({ id, amount })),
    };
    try {
      const data = await createOrderProduct(orderInfo);
      navigate("/order/confirm", { state: data, replace: true });
      dispatch(resetProducts());
    } catch (error) {
      console.log("Error creating order: ", error);
    }
  };

  return {
    isModalOpen,
    closeModal,
    openCheckedModal,
    onSubmitOrderForm,
  };
}
