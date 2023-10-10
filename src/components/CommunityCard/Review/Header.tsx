import { BsFillHeartFill } from "react-icons/bs";

import {
  Header,
  Profile,
  Image,
  Info,
  InfoName,
  InfoUpdate,
  Following,
  Heart,
} from "../style";

interface HeaderProps {
  headerType: "review" | "tip";
  info: {
    name: string;
    update: string;
  };
}

export default function CommunityHeader({ headerType, info }: HeaderProps) {
  return (
    <Header>
      <Profile>
        <Image />
        <Info>
          <InfoName>{info.name}</InfoName>
          <InfoUpdate>{info.update}</InfoUpdate>
        </Info>
      </Profile>
      {headerType === "review" ? (
        <Following>팔로잉</Following>
      ) : (
        <Heart>
          <BsFillHeartFill />
        </Heart>
      )}
    </Header>
  );
}
