import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { ProductCardProps } from ".";

const likeIconStyle = {
  sm: css`
    right: 15px;
    bottom: 15px;
    width: 20px;
    height: 20px;
  `,
  lg: css`
    right: 15px;
    bottom: 15px;
    width: 30px;
    height: 30px;
  `,
};

const imageSizes = {
  sm: css`
    height: 290px;
    border-radius: 10px;
  `,
  md: css`
    height: 350px;
    border-radius: 17.5px;
  `,
  lg: css`
    height: 390px;
    border-radius: 20px;
  `,
  xl: css`
    height: 500px;
    border-radius: 20px;
  `,
};

export const Container = styled.div<Pick<ProductCardProps, "size">>`
  width: ${({ size = "sm" }) => (size === "xl" ? "390px" : "290px")};
  height: fit-content;
`;

export const ImageContainer = styled(Link)<Omit<ProductCardProps, "info">>`
  width: 100%;
  ${({ size = "sm" }) => imageSizes[size]};
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  margin-bottom: 15px;
  position: relative;
  display: block;
  overflow: hidden;

  & > button {
    position: absolute;
    ${({ size = "sm" }) =>
      size === "sm" || size === "md"
        ? likeIconStyle["sm"]
        : likeIconStyle["lg"]}
  }
  // tag style
  & > svg:first-of-type {
    position: absolute;
    top: ${({ size = "sm" }) => (size === "xl" ? "20px" : "10px")};
    left: ${({ size = "sm" }) => (size === "xl" ? "20px" : "10px")};
    filter: drop-shadow(
      0px 0px 3px
        ${({ $tag, theme }) =>
          $tag === "NEW"
            ? theme.colors["secondary"]
            : theme.colors["primary"]["60"]}
    );
  }
`;

export const Image = styled.img<Pick<ProductCardProps, "size">>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div<Pick<ProductCardProps, "size">>`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;

  & > p,
  & > h5 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }
`;

export const Brand = styled(Link)`
  color: #797979;
  ${({ theme }) => theme.typo["body-2-r"]};
  line-height: 100%;
`;

export const Name = styled(Link)`
  color: ${({ theme }) => theme.colors["neutral"]["100"]};
  ${({ theme }) => theme.typo["body-2-r"]};
  line-height: 100%;
  letter-spacing: -0.5px;
`;

export const PriceBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Price = styled(Link)<
  Pick<ProductCardProps, "size"> & { $discount?: boolean }
>`
  color: ${({ theme, $discount = false }) =>
    $discount ? theme.colors["neutral"]["40"] : theme.colors["neutral"]["100"]};
  font-weight: ${({ theme, $discount }) =>
    $discount ? theme.typo["body-1-m"] : theme.typo["body-1-b"]};
  text-decoration: ${({ $discount }) => $discount && "line-through"};
  line-height: 170%;

  ${({ size = "sm", $discount = false }) =>
    size === "xl" &&
    css`
      position: absolute;
      bottom: 0;
      right: ${$discount ? "92px" : "0"};
      line-height: normal;
    `}
`;
