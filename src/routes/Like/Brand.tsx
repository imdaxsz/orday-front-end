import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import useBrandList from "@/hooks/useBrandList";

import { Brands, Container, Content, Brand as BaseBrand } from "../Brand/List";

export default function LikeBrandList() {
  const { brands, selectedOption, setSelectedOption } = useBrandList();

  const brandsMockData: BrandListDto = Array.from(
    { length: 12 },
    (_, index) => ({
      id: index + 1,
      name: "test",
      imageUrl: "https://url.kr/l2wry9",
    }),
  );

  return (
    <Container>
      <Head title="관심 브랜드 | Orday" />
      <BackButton pageTitle="관심 브랜드" />
      <Content>
        <Dropdown
          type="brand"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Brands>
          {brandsMockData.map((brand, i) => (
            <Brand to={`/brands/${brand.id}`} key={i}>
              <LikeButton isLiked target="brand" id={brand.id} />
              <img src={brand.imageUrl} alt={brand.name} />
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
