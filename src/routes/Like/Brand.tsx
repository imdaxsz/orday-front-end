import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import Loader from "@/components/Loader";
import useBrandList from "@/hooks/useBrandList";

import { Brands, Container, Content, Brand as BaseBrand } from "../Brand/List";

export default function LikeBrandList() {
  const { isLoading, brands, selectedOption, setSelectedOption } =
    useBrandList();
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
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {brands.length === 0 && <Empty>관심 브랜드가 없습니다.</Empty>}
            {brands.length !== 0 && (
              <Brands>
                {brands.map((brand) => (
                  <Brand to={`/brands/${brand.id}`} key={brand.id}>
                    <LikeButton isLiked target="brand" id={brand.id} />
                    <img src={brand.imageUrl} alt={brand.name} />
                  </Brand>
                ))}
              </Brands>
            )}
          </>
        )}
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

const Empty = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
`;
