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
  isMainTitle: boolean;
}

const CommunityData = {
  infoName: "김환경",
  infoUpdate: "7 분전",
};

const TipData = {
  infoName: "박나무",
  infoUpdate: "좋아요 1위!",
};

function MainTitleHeader() {
  return (
    <Header>
      <Profile>
        <Image />
        <Info>
          <InfoName>{CommunityData.infoName}</InfoName>
          <InfoUpdate>{CommunityData.infoUpdate}</InfoUpdate>
        </Info>
      </Profile>
      <Following>팔로잉</Following>
    </Header>
  );
}

function TipTitleHeader() {
  return (
    <Header>
      <Profile>
        <Image />
        <Info>
          <InfoName>{TipData.infoName}</InfoName>
          <InfoUpdate>{TipData.infoUpdate}</InfoUpdate>
        </Info>
      </Profile>
      <Heart>
        <BsFillHeartFill />
      </Heart>
    </Header>
  );
}

export default function CommunityHeader({ isMainTitle }: HeaderProps) {
  return isMainTitle ? <MainTitleHeader /> : <TipTitleHeader />;
}
