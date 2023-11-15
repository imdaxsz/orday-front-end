import { Profile, Image, Info, InfoName, InfoText } from "./style";

interface HeaderProps {
  info: {
    name: string;
    text: string;
  };
}

export default function ReviewHeader({ info }: HeaderProps) {
  return (
    <Profile>
      <Image />
      <Info>
        <InfoName>{info.name}</InfoName>
        <InfoText>{info.text}</InfoText>
      </Info>
    </Profile>
  );
}
