import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Carousel from "@/components/Carousel";
import ProductCarousel from "@/components/ProductCarousel";
import Tabs, { Tab, TabProps } from "@/components/Tabs";
import VisualSection, { Item } from "@/components/VisualSection";
import { ProductInfo } from "@/types";

export default function Home() {
  const visualSectionMockData: Item[] = [
    {
      image: "https://url.kr/oirz6q",
      url: "",
    },
    {
      image: "https://url.kr/1czwok",
      url: "",
    },
    {
      image: "https://url.kr/efvjwn",
      url: "",
    },
    {
      image: "https://url.kr/l8n92d",
      url: "",
    },
  ];

  const tabItem: TabProps[] = [
    {
      value: 1,
      label: "전체",
    },
    {
      value: 2,
      label: "의류",
    },
    {
      value: 3,
      label: "소품",
    },
    {
      value: 4,
      label: "악세사리",
    },
  ];

  const productMockData1: ProductInfo = {
    id: 1,
    image: "",
    url: "",
    brand: { name: "플라스틱 아크", pathname: "plasticark" },
    name: "상품1",
    price: 74000,
  };
  const productMockData2: ProductInfo = {
    ...productMockData1,
    id: 2,
    name: "상품2",
  };
  const productMockData3: ProductInfo = {
    ...productMockData1,
    id: 3,
    name: "상품3",
  };
  const productMockData4: ProductInfo = {
    ...productMockData1,
    id: 4,
    name: "상품4",
  };
  const productMockData5: ProductInfo = {
    ...productMockData1,
    id: 5,
    name: "상품5",
  };
  const productMockData6: ProductInfo = {
    ...productMockData1,
    id: 6,
    name: "상품6",
  };

  const productsMockData: ProductInfo[] = [
    productMockData1,
    productMockData2,
    productMockData3,
    productMockData4,
    productMockData5,
    productMockData6,
  ];

  const carouselMockdata1 = {
    image:
      "https://image.msscdn.net/images/goods_img/20220203/2338457/2338457_1_500.jpg",
    url: "/test1",
    info: {
      title: "2023 BEST OUTER COLLECTION",
      content: "아우터 기획전",
    },
  };

  const carouselMockdata2 = {
    image:
      "https://image.msscdn.net/images/goods_img/20230913/3555856/3555856_16945764091440_big.jpg",
    url: "/test2",
    info: {
      title: "F/W T-SHIRTS COLLECTION",
      content: "[23 F/W] 가을맞이 신상 기획전",
    },
  };

  const carouselMockdata3 = {
    image:
      "https://image.msscdn.net/images/goods_img/20211020/2190371/2190371_1_500.jpg",
    url: "/test3",
    info: {
      title: "STEADY SELLER COLLECTION",
      content: "Orday 스테디셀러",
    },
  };

  const carouselMockData = [
    carouselMockdata1,
    carouselMockdata2,
    carouselMockdata3,
  ];

  return (
    <Container>
      <VisualSection items={visualSectionMockData} />
      <ProductSection>
        <Title>Orday BEST</Title>
        <Tabs>
          {tabItem.map((item, i) => (
            <Tab key={i} value={item.value} label={item.label} />
          ))}
        </Tabs>
        <MoreLink to="/best">
          더보기
          <IoIosArrowForward />
        </MoreLink>
        <ProductCarousel products={productsMockData} productsTag="BEST" />
      </ProductSection>
      <EventSection>
        <Title>Orday EVENT</Title>
        <EventContent>
          <img src="" alt="1" />
          <img src="" alt="2" />
        </EventContent>
      </EventSection>
      <ProductSection>
        <Title>Orday NEW</Title>
        <MoreLink to="/new">
          더보기
          <IoIosArrowForward />
        </MoreLink>
        <ProductCarousel products={productsMockData} productsTag="NEW" />
      </ProductSection>
      <Magazine>매거진/이야기 등</Magazine>
      <SaleSection>
        <Title>Orday SALE</Title>
        <Carousel items={carouselMockData} />
      </SaleSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding-bottom: 200px;
`;

const Title = styled.h3`
  width: 100%;
  text-align: center;
  color: #1d1d1d;
  font-size: 33px;
  font-weight: 600;
  line-height: normal;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    width: 360px;
    margin: 30px auto;
  }
`;

const MoreLink = styled(Link)`
  width: fit-content;
  margin: 14px 30px 10px 0;
  display: flex;
  align-items: center;
  color: #8a8a8a;
  text-align: right;
  font-size: 14px;
  font-weight: 300;
  gap: 2px;
  & > svg {
    width: 12px;
    height: 12px;
  }
`;

const EventSection = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EventContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  img {
    width: 600px;
    height: 350px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }
`;

const Magazine = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SaleSection = styled.section`
  & > h3 {
    margin-bottom: 40px;
  }
`;
