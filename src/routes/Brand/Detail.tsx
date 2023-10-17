import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import ProductCard from "@/components/ProductCard";
import { ProductInfo } from "@/types";

export default function BrandDetail() {
  const navigate = useNavigate();
  const productMockData: ProductInfo = {
    id: 1,
    image:
      "https://image.msscdn.net/images/goods_img/20230323/3174776/3174776_16795542598248_big.png",
    url: "",
    brand: { name: "플라스틱 아크", pathname: "plasticark" },
    name: "팻볼 [FB-F1-05]",
    price: 74000,
  };
  const productsMockData: ProductInfo[] = Array(4).fill(productMockData);

  return (
    <div style={{ paddingBottom: "150px" }}>
      <Head title={`Orday | ${productMockData.brand.name}`} />
      <Header>
        <Button iconOnly onClick={() => navigate(-1)}>
          <IoArrowBackOutline size={24} />
        </Button>
        <LikeButton target="brand" />
        <BackgroundImage src="https://s3-alpha-sig.figma.com/img/cf7c/e3f4/d7a8698a8182ae23145a875332ba5172?Expires=1696204800&Signature=L2dz-XfbV9p0do4TdZXDszmaadl5Dzu-OXy161x-4am7U57ZOHIqf~ZG4crzJTrsM13JoC84RNvnARYr1M-SqtH8CaGMdmTb6PPtF4OLiabCDy2jnyL84iBJy6drFiwNFQm6OH026biZE5yuVdA1iDDYccYuHAGjzdYtR-pALYqo42jUmZrnHyeKy5drIiF40H4hfsAx-bBLtOHtr1jcPWVniTNckeVPCyxAVFGZ3oIUgPC~YS0CQFYwFBquw3WTIn~xTwmQSwDOKnICNZqE6AnOZhX1~PhxELIwMAsS~6mD1k-92rimEk8YduA8I2pIzr0kK2pOlYDRKc5kZzWoXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </Header>
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

const Items = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 50px auto;
`;
