import { Link } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import useBrandList from "@/hooks/useBrandList";

export default function BrandList() {
  const { isLoading, brands, selectedOption, setSelectedOption } =
    useBrandList();
  return (
    <Container>
      <Head title="브랜드 | Orday" />
      <BackButton pageTitle="브랜드" />
      <Content>
        <Dropdown
          type="brand"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Brands>
          {isLoading && <Loader />}
          {!isLoading &&
            brands.map((brand) => (
              <Brand to={`/brands/${brand.id}`} key={brand.id}>
                <img src={brand.imageUrl} alt={brand.name} />
              </Brand>
            ))}
        </Brands>
      </Content>
    </Container>
  );
}

export const Container = styled.div`
  padding: 0 30px 200px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 44px;
`;

export const Brands = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 25px;
  margin: 0 auto;
`;

export const Brand = styled(Link)`
  display: block;
  width: 183px;
  height: 183px;
  border-radius: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
