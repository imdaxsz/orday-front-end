import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import Tabs, { Tab, TabProps } from "@/components/Tabs";
import VisualSection, { Item } from "@/components/VisualSection";
import { ProductInfo } from "@/types";

export default function Home() {
  const items: Item[] = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ff1a/a46e/3f12028506ac36af8653fa1c1d338692?Expires=1696204800&Signature=I8FBVeLqsGpIPRS0ErswHqQNZJR5CNaen4Nu-wLn0g3mLAPJ2muAJ9P~HN51la7wIktx9SWyC8cwQpCC3feobaRDK~sjl7dxLhE6kRLS-FmHIJtUbR8LWsH9XRBMbh3k1cauebGzbvdZ3NgeEYG9H5JbZQzdEQpQcH9WasR9ysHIdP8QH6freue2frFCWmqfH5BDaUb1N1ctUdO8wrtwi7QT2NSNyf-bWNcBC1tWKygesHS6e7DfWY8VfjepZkRWnHEtMGZ33ClBtIkGy0QzsVTctMmsY5a2qHG40l39dl8ABeJDfE6dvPAGVWOpkOmrG5CDeinGYwpULb4KaYwhbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      url: "",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/9846/153d/9de1198aed864da73647de55b656f1a6?Expires=1696204800&Signature=JlRd9W8LtyuvvnbVU1mT5oYsOOQhGaG7jmHMuwb3lK3mdS5WNAn8uVVILAo8x7DAvNFM~KQISVrfIHZa5YbBiOSp0jPyCWLBjIKTvijHPYM4E2xLhYbrzGHahVPTql-BrsHrY~LImfgWVFSe9s4IsKVx1~ijh77~88-cqDv2rb-OWWpY0S-uetS2Upe4lypFAzcOjm7G9Q1KxkB4N~u8Sc5XXTxTN1OkDIkMqLm1uwQ6zG~RegFkadh1QaPDKvOSFwWPW1Pnt4npa7LDVKQzZo9ExsIjHAaXM6yGbiGsxMRIe0T0bkAVgJgYKjNViN0oykyf2JtQrRqVWhuUF5GkSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      url: "",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8b2d/4b29/8e0be9f8efca26e86a3b27078c52efbf?Expires=1696204800&Signature=Wl1Qa2~Ci2ku9-79SD-cuILCspp0nRHjQpeRYjB1m0Fl20uIcR57SDz4qyWKNy3rcmmZKpblUW9zrS9Rj3hqDJOq34PJb0DWXvuZlPfXgKfwI-6OrymQaARqx1HZsaPp-dOCdPpqdqaP4SI~GiQyW14ekkRH41lNJ1~nnB~EYjLti6ftQTNtNXarzCoEOpECK1YXnLy4xh4bNHcFx-O7BdDSmG22gJRRLKWIqEvWVibcGuB0pH4-ZDk4tJk9nHgUVQi6JZgrli~eGbsiTdUbenrbrAI9-ow2zkomHt6UF-3fvOYHm-YB8AadrYe3HSdbQdyurrlPVItyg2A5~Y8e1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      url: "",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cf7c/e3f4/d7a8698a8182ae23145a875332ba5172?Expires=1696204800&Signature=L2dz-XfbV9p0do4TdZXDszmaadl5Dzu-OXy161x-4am7U57ZOHIqf~ZG4crzJTrsM13JoC84RNvnARYr1M-SqtH8CaGMdmTb6PPtF4OLiabCDy2jnyL84iBJy6drFiwNFQm6OH026biZE5yuVdA1iDDYccYuHAGjzdYtR-pALYqo42jUmZrnHyeKy5drIiF40H4hfsAx-bBLtOHtr1jcPWVniTNckeVPCyxAVFGZ3oIUgPC~YS0CQFYwFBquw3WTIn~xTwmQSwDOKnICNZqE6AnOZhX1~PhxELIwMAsS~6mD1k-92rimEk8YduA8I2pIzr0kK2pOlYDRKc5kZzWoXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      <VisualSection items={items} />
      <ItemsContainer>
        <Title>Orday BEST</Title>
        <Tabs>
          {tabItem.map((item, i) => (
            <Tab key={i} value={item.value} label={item.label} />
          ))}
        </Tabs>
        <Items>
          {productsMockData.map((product, i) => (
            <ProductCard key={i} $tag="BEST" info={product} />
          ))}
        </Items>
      </ItemsContainer>
      <EventSection>
        <Title>Orday EVENT</Title>
        <EventContent>
          <img src="" alt="1" />
          <img src="" alt="2" />
        </EventContent>
      </EventSection>
      <ItemsContainer>
        <Title>Orday NEW</Title>
        <MoreLink to="/event">
          더보기
          <IoIosArrowForward />
        </MoreLink>
        <Items>
          {productsMockData.map((product, i) => (
            <ProductCard key={i} $tag="NEW" info={product} />
          ))}
        </Items>
      </ItemsContainer>
      <Magazine>매거진/이야기 등</Magazine>
      <SaleSection>
        <Title>Orday SALE</Title>
        <Carousel items={carouselMockData} />
      </SaleSection>
    </Container>
  );
}

const Title = styled.h3`
  width: 100%;
  text-align: center;
  color: #1d1d1d;
  font-size: 33px;
  font-weight: 600;
  line-height: normal;
`;

const SaleSection = styled.section`
  & > h3 {
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding-bottom: 200px;
`;

const Magazine = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  display: flex;
  align-items: center;
  justify-content: center;
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

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    width: 360px;
    margin: 30px auto;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 auto;
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
