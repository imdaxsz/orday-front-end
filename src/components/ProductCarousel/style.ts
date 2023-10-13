import styled from "styled-components";

export const Container = styled.div`
  width: 1220px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  & > button {
    top: 125px;
  }

  & > button > svg {
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
    transform: scale(0.9);
  }
`;

export const Slides = styled.div<{
  $translateX: number;
  $transition: number;
}>`
  width: fit-content;
  display: flex;
  gap: 20px;
  transform: ${({ $translateX = 0 }) => `translateX(${$translateX}px)`};
  transition: all ${({ $transition = 0.3 }) => `${$transition}s`};
`;
