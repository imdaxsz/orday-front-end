import { styled } from "styled-components";

export const CategoryNavBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral["40"]};
  margin-top: 92px;
  margin-bottom: 24px;
`;

export const CurCategory = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral["100"]};
  margin-left: 1rem;
  cursor: pointer;
`;

export const CategoryList = styled.span`
  margin-left: 1rem;
  cursor: pointer;
`;
