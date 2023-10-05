import styled from "styled-components";

export const Container = styled.div`
  & > label {
    display: block;
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
    line-height: 120%;
    margin-bottom: 5px;
  }

  & > span {
    color: red;
    ${({ theme }) => theme.typo["body-4-r"]};
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  height: 50px;
  padding: 18px 20px;
  border-radius: 10px;
  background: white;
  color: ${({ theme }) => theme.colors["neutral"]["100"]};
  border: solid 1px ${({ theme }) => theme.colors["neutral"]["40"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["neutral"]["40"]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors["neutral"]["60"]};
  }
`;
