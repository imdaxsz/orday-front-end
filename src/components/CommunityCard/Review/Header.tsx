import { Header, Profile, Image, Info, InfoName, InfoUpdate } from "../style";

interface HeaderProps {
  info: {
    name: string;
    update: string;
  };
}

export default function CommunityHeader({ info }: HeaderProps) {
  return (
    <Header>
      <Profile>
        <Image />
        <Info>
          <InfoName>{info.name}</InfoName>
          <InfoUpdate>{info.update}</InfoUpdate>
        </Info>
      </Profile>
    </Header>
  );
}
