import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Dropdown from "@/components/Dropdown";

interface Brand {
  name: string;
  image: string;
}

export default function BrandList() {
  const [selectedOption, setSelectedOption] = useState({
    name: "인기순",
    value: "popularity",
  });
  const brandmockData: Brand = {
    name: "test",
    image:
      "https://s3-alpha-sig.figma.com/img/cf7c/e3f4/d7a8698a8182ae23145a875332ba5172?Expires=1696204800&Signature=L2dz-XfbV9p0do4TdZXDszmaadl5Dzu-OXy161x-4am7U57ZOHIqf~ZG4crzJTrsM13JoC84RNvnARYr1M-SqtH8CaGMdmTb6PPtF4OLiabCDy2jnyL84iBJy6drFiwNFQm6OH026biZE5yuVdA1iDDYccYuHAGjzdYtR-pALYqo42jUmZrnHyeKy5drIiF40H4hfsAx-bBLtOHtr1jcPWVniTNckeVPCyxAVFGZ3oIUgPC~YS0CQFYwFBquw3WTIn~xTwmQSwDOKnICNZqE6AnOZhX1~PhxELIwMAsS~6mD1k-92rimEk8YduA8I2pIzr0kK2pOlYDRKc5kZzWoXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  };

  const brandsMockData: Brand[] = Array(12).fill(brandmockData);
  return (
    <Container>
      <BackButton pageTitle="브랜드" />
      <Content>
        <Dropdown
          type="brand"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Brands>
          {brandsMockData.map((brand, i) => (
            <Brand to={`/brands/${brand.name}`} key={i}>
              <img src={brand.image} alt={brand.name} />
            </Brand>
          ))}
        </Brands>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px 200px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 44px;
`;

const Brands = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 25px;
  margin: 0 auto;
`;

const Brand = styled(Link)`
  display: block;
  width: 183px;
  height: 183px;
  border-radius: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
