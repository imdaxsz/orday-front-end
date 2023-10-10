import styled from "styled-components";

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  ${(props) =>
    props.left &&
    `
    background: linear-gradient(to bottom, ${props.theme.colors["neutral"]["10"]}, ${props.theme.colors["neutral"]["40"]});
    color: ${props.theme.colors["neutral"]["10"]};
  `}
`;

export const LeftChevron = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RightChevron = styled.div`
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

export const InfoName = styled.div`
  font-size: ${({ theme }) => theme.typo["body-3-m"]};
`;

export const InfoState = styled.div<{ left?: boolean }>`
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  color: ${({ theme, left }) =>
    left ? theme.colors["neutral"]["10"] : theme.colors["neutral"]["40"]};
`;

export const Preview = styled.div<{ left?: boolean }>`
  font-size: ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme, left }) =>
    left ? theme.colors["neutral"]["10"] : theme.colors["neutral"]["40"]};
  margin-top: auto;
`;
