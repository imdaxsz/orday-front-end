import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
