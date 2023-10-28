import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import CategoryNav from "@/components/CategoryNav";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import ProductCard from "@/components/ProductCard";
import useBrandDetail from "@/hooks/useBrandDetail";

export default function BrandDetail() {
  const navigate = useNavigate();
  const { info } = useBrandDetail();

  const brandMockData: Brand = {
    id: 1,
    name: "플라스틱 아크",
    categoryIds: [1, 2, 3],
    logoUrl: "https://url.kr/atx7ql",
    imageUrl: "https://url.kr/4murbh",
    isLiked: false,
  };

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    name: "최신순",
    value: "new",
  });

  const productMockData: Product = {
    id: 1,
    imageUrl:
      "https://image.msscdn.net/images/goods_img/20230323/3174776/3174776_16795542598248_big.png",
    brandInfo: { id: 1, name: "플라스틱 아크" },
    name: "팻볼 [FB-F1-05]",
    score: 1,
    description: "상품 설명",
    price: 74000,
  };
  const productsMockData: Product[] = Array(4).fill(productMockData);

  return (
    <div style={{ paddingBottom: "150px" }}>
      <Head title={`${brandMockData.name} | Orday`} />
      <Header>
        <Button iconOnly onClick={() => navigate(-1)}>
          <IoArrowBackOutline size={24} />
        </Button>
        <LikeButton
          isLiked={brandMockData.isLiked}
          target="brand"
          id={brandMockData.id}
        />
        <LogoImage src={brandMockData.logoUrl} alt={brandMockData.name} />
        <BackgroundImage
          src={brandMockData.imageUrl}
          alt={brandMockData.name}
        />
      </Header>
      <Menu>
        <CategoryNav brand categories={brandMockData.categoryIds} />
        <Dropdown
          type="product"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Menu>
      <Items>
        {productsMockData.map((product, i) => (
          <ProductCard key={i} size="md" $tag="NEW" info={product} />
        ))}
      </Items>
    </div>
  );
}

const Header = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;

  button {
    position: absolute;
    z-index: 20;
    cursor: pointer;
  }

  & > button:first-of-type {
    top: 18px;
    left: 26px;
  }

  & > button:last-of-type {
    top: 18.75px;
    right: 28px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoImage = styled.img`
  height: 26px;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Items = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px auto;
`;

export const Menu = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;

  & > div:first-of-type {
    margin: 0;
  }
`;
