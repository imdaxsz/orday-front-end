import styled from "styled-components";

export const RadioText = styled.label`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  span {
    color: ${({ theme }) => theme.colors.neutral["70"]};
    margin-left: 0.3rem;
  }
`;

export const RadioInput = styled.input`
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  accent-color: ${({ theme }) => theme.colors.primary["80"]};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral["40"]};
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
