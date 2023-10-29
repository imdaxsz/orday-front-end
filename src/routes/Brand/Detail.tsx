import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import CategoryNav from "@/components/CategoryNav";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import ProductCard from "@/components/ProductCard";
import useBrandDetail from "@/hooks/useBrandDetail";
import useProductList from "@/hooks/useProuductList";

export default function BrandDetail() {
  const navigate = useNavigate();
  // const { info } = useBrandDetail();
  const brandId = Number(useLocation().pathname.split("/")[2]);
  const { ref, products, selectedOption, setSelectedOption } =
    useProductList(brandId);

  const brandMockData: Brand = {
    id: 1,
    name: "플라스틱 아크",
    categoryIds: [1, 2, 3],
    logoUrl: "https://url.kr/atx7ql",
    imageUrl: "https://url.kr/4murbh",
    isLiked: false,
  };

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
        {products.map((product, i) => (
          <ProductCard key={i} size="md" $tag="NEW" info={product} />
        ))}
      </Items>
      <div ref={ref} />
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
