import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { createOrderProduct } from "@/api/OrderApi";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Modal from "@/components/Modal";
import useFormCheck from "@/hooks/useFormCheck";
import { useModal } from "@/hooks/useModal";
import { ReducerType } from "@/store/rootReducer";

interface ProductInfoProps {
  form: OrderForm;
}

export default function ProductInfo({ form }: ProductInfoProps) {
  const navigate = useNavigate();
  const { state: productIds } = useLocation();
  const { isModalOpen, openModal, closeModal } = useModal();
  const cartItems = useSelector((state: ReducerType) => state.cart.items);
  const productItems = cartItems.filter((item) => productIds.includes(item.id));
  const { modalMessage, validateForm, handleCheckChange } = useFormCheck(form);

  const openCheckedModal = () => {
    validateForm();
    openModal();
  };

  const onSubmit = async () => {
    if (!validateForm()) return;

    const orderInfo: OrderInfo = {
      ...form,
      productsInfo: productItems.map(({ id, amount }) => ({ id, amount })),
    };

    try {
      await createOrderProduct(orderInfo);
      navigate("/order/confirm");
    } catch (error) {
      console.log("Error creating order: ", error);
    }
  };

  const products = {
    price: productItems
      .map((item) => Number(item.price))
      .reduce((acc, cur) => acc + cur),
    sale: productItems.length
      ? productItems
          .map((item) => Number(item.discountPrice) * item.amount)
          .reduce((acc, cur) => acc + cur)
      : 0,
    shipping: 0,
  };
  const totalPrice = products.price - products.sale + products.shipping;

  return (
    <Container>
      <InfoTitle>
        주문상품
        <span>{productItems.length}</span>
      </InfoTitle>
      <Line />
      {productItems.map((item) => (
        <div key={item.id}>
          <ProductItem>
            <ProductImage src={item.imageUrl} />
            <ItemInfo>
              <div>
                <h4>{item.name}</h4>
                <ul>
                  <li>{item.color}</li>
                  <li>사이즈 {item.size}</li>
                  <li>수량 {item.amount}개</li>
                </ul>
              </div>
              <div>
                <p>₩ {item.price.toLocaleString()}</p>
              </div>
            </ItemInfo>
          </ProductItem>
          <Line />
        </div>
      ))}
      <PriceList>
        <li>
          <p>상품금액</p>
          <p>{products.price.toLocaleString()}원</p>
        </li>
        <li>
          <p>상품할인</p>
          <p>-{products.sale.toLocaleString()} 원</p>
        </li>
        <li>
          <p>배송비</p>
          <p>{products.shipping.toLocaleString()} 원</p>
        </li>
        <li>
          <p>합계</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </li>
      </PriceList>
      <Line />
      <TotalPrice>
        <p>총 결제금액</p>
        <p>{totalPrice.toLocaleString()}원</p>
      </TotalPrice>
      <CheckAgreement>
        <CheckBox
          id="check1"
          text="주문정보 동의"
          onChange={() => handleCheckChange(1)}
        />
        <CheckBox
          id="check2"
          text="제 3자 제공 동의"
          onChange={() => handleCheckChange(2)}
        />
      </CheckAgreement>
      <Button style={{ width: "100%" }} onClick={openCheckedModal}>
        주문하기
      </Button>
      <Modal
        isOpen={isModalOpen}
        onSubmit={modalMessage ? undefined : onSubmit}
        onClose={closeModal}
        title={modalMessage ? "입력확인" : "확인 안내"}
        type={modalMessage ? "alert" : "confirm"}
        detail={
          modalMessage ? modalMessage : "선택하신 상품을 주문하시겠습니까?"
        }
      />
    </Container>
  );
}

const Container = styled.div`
  max-width: 350px;
`;
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

const Line = styled.hr`
  width: 350px;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral["50"]};
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0;
`;

const ProductImage = styled.img`
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  width: 5rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 0.625rem;
  flex-shrink: 0;
`;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 12px;
    margin: 5px 0;
  }
  ul {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.neutral["40"]};
  }
  li {
    margin: 1.5px 0;
  }
  p {
    margin-top: 28px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neutral["40"]};
    text-align: right;
  }
`;

const PriceList = styled.ul`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral["40"]};
  li {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  font-size: 18px;
  font-weight: bold;
`;

const CheckAgreement = styled.div`
  color: ${({ theme }) => theme.colors.neutral["40"]};
  font-size: 14px;
  margin: 20px 0 50px 0;
  input {
    margin: 6px 0;
  }
`;
