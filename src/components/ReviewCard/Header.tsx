import { getElapsedTime } from "@/utils";

import { Profile, UserImage, UserInfo, UserName, CreatedAt } from "./style";

interface Props {
  userName: string;
  createdAt: string;
}

export default function ReviewHeader({ userName, createdAt }: Props) {
  const elapsedTime = getElapsedTime(createdAt);
  return (
    <Profile>
      <UserImage />
      <UserInfo>
        <UserName>{userName}</UserName>
        <CreatedAt>{elapsedTime}</CreatedAt>
      </UserInfo>
    </Profile>
  );
}
