import { styled } from "styled-components";

import CategoryNav from "@/components/CategoryNav";
import Dropdown from "@/components/Dropdown";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import useProductList from "@/hooks/useProductList";

export default function Category() {
  const {
    isLoading,
    ref,
    products,
    selectedOption,
    setSelectedOption,
    categoryBestItems,
    pathname,
  } = useProductList();

  return (
    <Container>
      <Head title="카테고리 | Orday" />
      {isLoading && <Loader />}
      <CategoryNav />
      {categoryBestItems && categoryBestItems.length > 0 && (
        <CategoryBestList>
          {categoryBestItems.map((item) => (
            <ProductCard key={item.id} info={item} size="xl" $tag="BEST" />
          ))}
        </CategoryBestList>
      )}

      <CategoryItems>
        {pathname === "best" ? (
          <>
            <ItemList>
              {products.map((item) => (
                <ProductCard key={item.id} info={item} size="md" />
              ))}
            </ItemList>
          </>
        ) : (
          <>
            <Dropdown
              type="product"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <ItemList>
              {products.map((item) => (
                <ProductCard key={item.id} info={item} size="md" />
              ))}
            </ItemList>
            <div ref={ref} />
          </>
        )}
      </CategoryItems>
    </Container>
  );
}
const Container = styled.div`
  padding: 0 30px;
  padding-bottom: 200px;
`;

const CategoryBestList = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15rem;
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ItemList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 0;
`;
