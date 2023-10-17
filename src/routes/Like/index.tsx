import { useState } from "react";
import { styled } from "styled-components";

import BackButton from "@/components/BackButton";
import Tabs, { Tab } from "@/components/Tabs";

import LikeProductList from "./Products";

export default function LikeList() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Container>
      <BackButton pageTitle="관심상품" />
      <Tabs defaultActiveId={activeTab}>
        <Tab value={1} label="관심 상품" onClick={() => setActiveTab(1)} />
        <Tab value={2} label="관심 게시글" onClick={() => setActiveTab(2)} />
      </Tabs>
      {activeTab === 1 && <LikeProductList />}
    </Container>
  );
}
const Container = styled.div`
  padding: 0 30px;
`;
