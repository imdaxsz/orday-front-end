import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  width: 1280px;
  min-height: 100%;
  margin: 0 auto;
`;

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
