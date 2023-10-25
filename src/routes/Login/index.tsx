import { useLocation } from "react-router-dom";
import styled from "styled-components";

import AuthHeader from "@/components/AuthHeader";
import Head from "@/components/Head";
import BaseTabs, { Tab } from "@/components/Tabs";

import GuestOrder from "./GuestOrder";
import LoginForm from "./LoginForm";

export default function Login() {
  const pathname = useLocation().pathname.split("/")[2];
  const LOGIN = pathname === undefined;
  return (
    <Container>
      <Head title="로그인 | Orday" />
      <AuthHeader title="로그인" />
      <Tabs defaultActiveId={LOGIN ? 1 : 2}>
        <Tab value={1} label="회원 로그인" url="/login" />
        <Tab value={2} label="비회원 주문조회" url="/login/guestOrder" />
      </Tabs>
      {LOGIN ? <LoginForm /> : <GuestOrder />}
    </Container>
  );
}

const Container = styled.div`
  width: 438px;
  margin: 0 auto;
`;

const Tabs = styled(BaseTabs)`
  width: 100%;
  height: 40px;
  margin: 26px auto 40px;
  & > li {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
  }
`;
