import { useState } from "react";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";

import {
  BrandInfo,
  Brands,
  Container,
  Content,
  Brand as BaseBrand,
} from "../Brand/List";

export default function LikeBrandList() {
  const [selectedOption, setSelectedOption] = useState({
    name: "인기순",
    value: "popularity",
  });

  const brandmockData: BrandInfo = {
    name: "test",
    image:
      "https://s3-alpha-sig.figma.com/img/cf7c/e3f4/d7a8698a8182ae23145a875332ba5172?Expires=1696204800&Signature=L2dz-XfbV9p0do4TdZXDszmaadl5Dzu-OXy161x-4am7U57ZOHIqf~ZG4crzJTrsM13JoC84RNvnARYr1M-SqtH8CaGMdmTb6PPtF4OLiabCDy2jnyL84iBJy6drFiwNFQm6OH026biZE5yuVdA1iDDYccYuHAGjzdYtR-pALYqo42jUmZrnHyeKy5drIiF40H4hfsAx-bBLtOHtr1jcPWVniTNckeVPCyxAVFGZ3oIUgPC~YS0CQFYwFBquw3WTIn~xTwmQSwDOKnICNZqE6AnOZhX1~PhxELIwMAsS~6mD1k-92rimEk8YduA8I2pIzr0kK2pOlYDRKc5kZzWoXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  };

  const brandsMockData: BrandInfo[] = Array(12).fill(brandmockData);
  return (
    <Container>
      <Head title="Orday | 관심 브랜드" />
      <BackButton pageTitle="관심 브랜드" />
      <Content>
        <Dropdown
          type="brand"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Brands>
          {brandsMockData.map((brand, i) => (
            <Brand to={`/brands/${brand.name}`} key={i}>
              <LikeButton isLiked target="brand" />
              <img src={brand.image} alt={brand.name} />
            </Brand>
          ))}
        </Brands>
      </Content>
    </Container>
  );
}

const Brand = styled(BaseBrand)`
  button {
    position: absolute;
    z-index: 20;
    width: 25px;
    height: 25px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
  }
`;
