import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import BackButton from "@/components/BackButton";
import Tabs, { Tab } from "@/components/Tabs";

import LikePostsList from "./Posts";
import LikeProductList from "./Products";

export default function LikeList() {
  const pathname = useLocation().pathname.split("/");
  const isProducts = pathname[pathname.length - 1] === "products";

  return (
    <Container>
      {isProducts ? (
        <BackButton pageTitle="관심상품" />
      ) : (
        <BackButton pageTitle="관심게시글" />
      )}
      <Tabs defaultActiveId={isProducts ? 1 : 2}>
        <Tab value={1} label="관심 상품" url="/like/products" />
        <Tab value={2} label="관심 게시글" url="/like/posts" />
      </Tabs>
      {isProducts ? <LikeProductList /> : <LikePostsList />}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
`;
