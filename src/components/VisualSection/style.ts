import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";

export const Container = styled.div`
  width: 1220px;
  height: 600px;
  margin: 0 auto;
  position: relative;
`;

export const Gradient = styled.div`
  position: absolute;
  pointer-events: none;
  inset: 0;
  z-index: 20;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 43.08%,
    rgba(0, 0, 0, 0.2) 98.67%,
    rgba(0, 0, 0, 0.2) 98.67%
  );
`;

export const Content = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

export const Image = styled.img<{ $current?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  z-index: ${({ $current = false }) => ($current ? "10" : "5")};
  opacity: ${({ $current = false }) => ($current ? "100%" : "0%")};
  transition: opacity 0.5s;
`;

export const ArrowIconButton = styled(Button)`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0);
  top: calc(50% - 22px);
  border: none;
  padding: 0;

  & > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 0.18em);
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

export const IndicatorContainer = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 50px;
  z-index: 30;
`;

export const Indicator = styled.span<{ $active?: boolean }>`
  background-color: ${({ $active = false, theme }) =>
    $active ? theme.colors["primary"]["60"] : "white"};
  width: 10px;
  height: 10px;
  border-radius: 999px;
  filter: ${({ $active = false, theme }) =>
    $active && `drop-shadow(0px 0px 6px ${theme.colors["primary"]["60"]})`};
  cursor: pointer;
`;
