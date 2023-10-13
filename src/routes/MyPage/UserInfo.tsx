import { BiSolidPencil } from "react-icons/bi";
import { IoWaterSharp } from "react-icons/io5";

import {
  InfoUser,
  Image,
  InfoText,
  InfoUp,
  InfoName,
  InfoGrade,
  InfoFollow,
  ImageIcon,
} from "./UserInfo.style";

const userData = {
  username: "홍길동 님",
  grade: "물방울 등급",
  followers: 0,
  following: 1,
};

export default function UserInfo() {
  return (
    <>
      <InfoUser>
        <Image>
          <ImageIcon>
            <BiSolidPencil />
          </ImageIcon>
        </Image>
        <InfoText>
          <InfoUp>
            <InfoName>{userData.username}</InfoName>
            <InfoGrade>
              {userData.grade} <IoWaterSharp />
            </InfoGrade>
          </InfoUp>
          <InfoFollow>
            팔로워 {userData.followers} | 팔로잉 {userData.following}
          </InfoFollow>
        </InfoText>
      </InfoUser>
    </>
  );
}
