import styled from "styled-components";

import CurrentInfo from "./Current";
import UserInfo from "./UserInfo";

export default function MyPage() {
  return (
    <Container>
      <UserInfo />
      <CurrentInfo />
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
