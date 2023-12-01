import styled from "styled-components";

import Head from "@/components/Head";
import Loader from "@/components/Loader";
import useUserName from "@/hooks/useUserName";

import OrderInfo from "./OrderList/OrderInfo";
import SideBarComponent from "./SideBar";
import UserInfo from "./UserInfo";

export default function MyPage() {
  const { isUserNameLoading, userName } = useUserName();

  return (
    <Container>
      <Head title="마이페이지 | Orday" />
      {isUserNameLoading && <Loader />}
      {!isUserNameLoading && (
        <>
          <PageLeft>
            <UserInfo userName={userName} />
            <SideBarComponent />
          </PageLeft>
          <OrderInfo />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-top: 52px;
  gap: 20px;
`;

const PageLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  height: 700px;
  gap: 50px;
`;
