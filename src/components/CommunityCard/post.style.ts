import styled from "styled-components";

import { colors } from "@/styles/colors";
import { Typography, typo } from "@/styles/typography";

export const PostComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 722px;
  height: 250px;
  position: relative;
`;

export const PostCard = styled.div<{ left?: boolean }>`
  width: 225px;
  height: 250px;
  border-radius: 20px;
  background-color: ${colors.neutral[20]};
  padding: 30px;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.left &&
    `
    background: linear-gradient(${colors.neutral[10]},${colors.neutral[40]});
    color: ${colors.neutral[10]};
  `}
`;

export const LeftChevron = styled.div<{ type: keyof Typography }>`
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RightChevron = styled.div<{ type: keyof Typography }>`
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 225px;
  gap: 10px;
  display: flex;
  padding-top: 65%;
`;

export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #91d2ca;
`;

export const Info = styled.div`
  width: 100px;
  height: 50px;
`;

export const InfoName = styled.div<{ type: keyof Typography }>`
  font-size: ${(props) => typo[props.type]};
`;

export const InfoState = styled.div<{ type: keyof Typography; left?: boolean }>`
  font-size: ${(props) => typo[props.type]};
  color: ${(props) => (props.left ? colors.neutral[10] : colors.neutral[40])};
`;

export const Preview = styled.div<{ type: keyof Typography; left?: boolean }>`
  font-size: ${(props) => typo[props.type]};
  color: ${(props) => (props.left ? colors.neutral[10] : colors.neutral[40])};
  margin-top: auto;
`;
