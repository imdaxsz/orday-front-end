import { Profile, UserImage, UserInfo, UserName, CreatedAt } from "./style";

interface Props {
  userName: string;
  createdAt: string;
}

export default function ReviewHeader({ userName, createdAt }: Props) {
  return (
    <Profile>
      <UserImage />
      <UserInfo>
        <UserName>{userName}</UserName>
        <CreatedAt>{createdAt}</CreatedAt>
      </UserInfo>
    </Profile>
  );
}
