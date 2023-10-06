import { IoMdHeart } from "react-icons/io";
import styled from "styled-components";

import { colors } from "@/styles/colors";
import { Typography, typo } from "@/styles/typography";

export const TipComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 349px;
  height: 588px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  width: 310px;
`;

export const Profile = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  gap: 10px;
`;

export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${colors.primary[20]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 50px;
`;

export const InfoName = styled.div<{ type: keyof Typography }>`
  font-size: ${(props) => typo[props.type]};
`;

export const InfoUpdate = styled.div<{ type: keyof Typography }>`
  font-size: ${(props) => typo[props.type]};
  color: ${colors.neutral[40]};
`;

export const Following = styled.div<{ type: keyof Typography }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary};
  cursor: pointer;
  font-size: ${(props) => typo[props.type]};
`;

export const TipWriting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 310px;
  gap: 20px;
`;

export const TipTitle = styled.div<{ type: keyof Typography }>`
  font-size: ${(props) => typo[props.type]};
`;

export const TipDetail = styled.div<{ type: keyof Typography }>`
  font-size: ${(props) => typo[props.type]};
  color: ${colors.neutral[40]};
`;

export const BodyContainer = styled.div`
  width: 310px;
  height: 250px;
  border-radius: 15px;
  background-color: ${colors.neutral[20]};
  margin-top: 10px;
`;

export const Ad = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 310px;
  height: 45px;
  border-radius: 10px;
  background-color: ${colors.neutral[20]};
  margin-top: 20px;
  gap: 10px;
`;

export const AdImage = styled.img`
  width: 55px;
  height: 45px;
  border-radius: 10px;
  background-color: ${colors.neutral[10]};
`;

export const AdText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeyWord = styled.div<{ type: keyof Typography }>`
  display: flex;
  gap: 5px;
  color: ${colors.secondary};
  font-size: ${(props) => typo[props.type]};
`;

export const Product = styled.div<{ type: keyof Typography }>`
  color: ${colors.neutral[40]};
  font-size: ${(props) => typo[props.type]};
`;

export const Price = styled.div<{ type: keyof Typography }>`
  color: ${colors.neutral[70]};
  font-size: ${(props) => typo[props.type]};
`;

export const Comment = styled.textarea<{ type: keyof Typography }>`
  margin-top: 5px;
  width: 310px;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: ${colors.neutral[20]};
  color: ${colors.neutral[40]};
  font-size: ${(props) => typo[props.type]};
  resize: none;
  outline: none;
`;

export const Reaction = styled.div<{ type: keyof Typography }>`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
  align-items: center;
  width: 310px;
  height: 30px;
  font-size: ${(props) => typo[props.type]};
  gap: 5px;
`;

export const LikeButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: ${(props) => (props.active ? colors.neutral[80] : colors.neutral[40])};
`;

export const LikeIcon = styled(IoMdHeart)`
  color: ${(props) => (props.active ? "red" : colors.neutral[40])};
`;

export const CommentButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: ${colors.neutral[40]};
`;
