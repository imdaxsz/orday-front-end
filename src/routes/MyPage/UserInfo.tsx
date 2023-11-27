import { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserName } from "@/api/AuthApi";

export default function UserInfo() {
  const [userName, setUserName] = useState("");
  const fetchUserName = async () => {
    try {
      const name = await getUserName();
      setUserName(name);
    } catch (error) {
      console.log("Error fetching username: ", error);
    }
  };
  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <>
      <InfoUser>
        <InfoImg alt="infoImg" />
        <InfoName>{userName} 님</InfoName>
      </InfoUser>
    </>
  );
}

const InfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 273px;
  height: 86px;
  gap: 20px;
`;

const InfoImg = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 43px;
  background-color: #b7d2f1;
`;

const InfoName = styled.div`
  font-size: ${({ theme }) => theme.typo["title-2-b"]};
`;
