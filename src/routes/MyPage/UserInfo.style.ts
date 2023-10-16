import styled from "styled-components";

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 273px;
  height: 86px;
  gap: 10px;
`;

export const Image = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 43px;
  background-color: ${({ theme }) => theme.colors["neutral"]["40"]};
  position: relative;
`;

export const ImageIcon = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["primary"]["80"]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors["neutral"]["10"]};
  font-size: ${({ theme }) => theme.typo["body-4-b"]};
`;

export const InfoText = styled.div`
  width: 153px;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const InfoUp = styled.div`
  display: flex;
  align-items: flex-end;
  width: 200px;
  height: 26px;
  gap: 10px;
`;

export const InfoName = styled.div`
  font-size: ${({ theme }) => theme.typo["title-2-b"]};
`;

export const InfoGrade = styled.div`
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
  & > svg {
    color: ${({ theme }) => theme.colors["primary"]["40"]};
    font-size: ${({ theme }) => theme.typo["title-2-b"]};
    vertical-align: -5px;
  }
`;

export const InfoFollow = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.typo["body-4-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["40"]};
`;
