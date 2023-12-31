import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 750px;
  position: absolute;
  z-index: 120;
  top: 70px;
  left: 0;
  padding: 35px 25px 35px 30px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid 1px #eee;
  border-top: none;
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  padding: 10px;
  margin-top: 77px;

  a {
    color: #888;
    ${({ theme }) => theme.typo["body-4-r"]};
    font-weight: 300;
  }
`;
