import { Link } from "react-router-dom";
import styled from "styled-components";

interface SliderProps {
  $translateX: number;
  $transition: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    transform: scale(0.9);
  }
`;

export const Slider = styled.div<SliderProps>`
  width: fit-content;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: ${({ $translateX = 0 }) => `translateX(${$translateX}px)`};
  transition: all ${({ $transition = 0.5 }) => `${$transition}s`};
`;

export const Card = styled.img<{ $active?: boolean; $transition?: number }>`
  display: block;
  width: ${({ $active = false }) => ($active ? "500px" : "400px")};
  height: ${({ $active = false }) => ($active ? "350px" : "300px")};
  filter: brightness(${({ $active = false }) => ($active ? "100%" : "70%")});
  background: ${({ theme }) => theme.colors["neutral"]["10"]};
  flex-shrink: 0;
  border-radius: 20px;
  object-fit: cover;
  transition: all ${({ $transition = 0.5 }) => `${$transition}s`};
`;

export const Info = styled(Link)`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 7px;
  & > h3 {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-2-b"]};
    line-height: 170%;
  }

  & > span {
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
    ${({ theme }) => theme.typo["body-2-r"]};
  }
`;
