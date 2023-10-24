import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";

// 임시데이터
const mockData = [
  {
    id: 1,
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
    color: "BROWN",
    size: "L",
    amount: 1,
    price: 198000,
    image: "",
  },
];

interface ProductInfoProps {
  form: OrderForm;
}

export default function ProductInfo({ form }: ProductInfoProps) {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();
  const products = {
    price: mockData
      .map((item) => Number(item.price))
      .reduce((acc, cur) => acc + cur),
    sale: 0,
    shipping: 0,
  };
  const totalPrice = products.price + products.sale + products.shipping;

  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const validateForm = () => {
    const { name, phoneNumber, addressInfo, selectedMethod } = form;

    if (!name) {
      setModalMessage("이름을 입력해주세요.");
      return false;
    }
    if (!/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(phoneNumber)) {
      setModalMessage("연락처를 입력해주세요.");
      return false;
    }
    if (
      !addressInfo.postcode ||
      !addressInfo.address ||
      !addressInfo.addressDetail
    ) {
      setModalMessage("주소를 입력해주세요.");
      return false;
    }
    if (!selectedMethod) {
      setModalMessage("결제수단을 선택해주세요.");
      return false;
    }

    setModalMessage(null);
    return true;
  };

  const openCheckedModal = () => {
    validateForm();
    openModal();
  };

  const onSubmit = () => {
    if (!validateForm()) return;

    const data = {
      ...form,
      productsInfo: mockData.map(({ id, amount }) => ({ id, amount })),
      price: products.price,
      sale: products.sale,
      shipping: products.shipping,
      totalPrice,
    };
    console.log("data", data);

    navigate("/order/confirm");
  };

  return (
    <Container>
      <InfoTitle>
        주문상품
        <span>{mockData.length}</span>
      </InfoTitle>
      <Line />
      {mockData.map((item) => (
        <div key={item.id}>
          <ProductItem>
            <ProductImage src={item.image} />
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
        <CheckBox id="check1" text="주문정보 동의" />
        <CheckBox id="check2" text="제 3자 제공 동의" />
      </CheckAgreement>
      <Button style={{ width: "100%" }} onClick={openCheckedModal}>
        주문하기
      </Button>
      {modalMessage ? (
        <Modal
          isOpen={isModalOpen}
          onSubmit={onSubmit}
          onClose={closeModal}
          type="alert"
          title="입력확인"
          detail={modalMessage}
        />
      ) : (
        <Modal
          isOpen={isModalOpen}
          onSubmit={onSubmit}
          onClose={closeModal}
          type="confirm"
          title="주문확인 안내"
          detail="선택하신 상품을 주문하시겠습니까?"
        />
      )}
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
