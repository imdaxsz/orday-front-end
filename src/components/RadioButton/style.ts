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
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.neutral["40"]};
  &:hover {
    cursor: pointer;
  }
  &:checked {
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary["80"]};
    background-color: ${({ theme }) => theme.colors.primary["80"]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral["20"]};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.neutral["20"]};
    cursor: not-allowed;
  }
`;
