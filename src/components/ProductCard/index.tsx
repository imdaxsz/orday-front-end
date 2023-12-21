import BestTag from "@/assets/best.svg?react";
import NewTag from "@/assets/new.svg?react";
import LikeButton from "@/components/LikeButton";

import {
  Brand,
  Container,
  Image,
  ImageContainer,
  Info,
  Name,
  Price,
  PriceBox,
} from "./style";

type Size = "sm" | "md" | "lg" | "xl";
export type TagType = "NEW" | "BEST";

export interface ProductCardProps {
  size?: Size;
  $tag?: TagType;
  info: Product;
}
export default function ProductCard({ size, $tag, info }: ProductCardProps) {
  return (
    <Container size={size}>
      <ImageContainer
        to={`/product/${info.id}?name=${info.name}`}
        size={size}
        $tag={$tag}
      >
        {$tag === "NEW" && <NewTag />}
        {$tag === "BEST" && <BestTag />}
        <LikeButton isLiked={info.liked} target="product" id={info.id} />
        <Image src={info.imageUrl} alt={info.name} size={size} />
      </ImageContainer>
      <Info>
        <Brand to={`/brands/${info.brandInfo.id}`}>{info.brandInfo.name}</Brand>
        <Name to={`/product/${info.id}?name=${info.name}`}>{info.name}</Name>
        {info.discountPrice > 0 && (
          <PriceBox>
            <Price
              to={`/product/${info.id}?name=${info.name}`}
              size={size}
              $discount={!!info.discountPrice}
            >
              {info.price.toLocaleString()}원
            </Price>
            <Price to={`/product/${info.id}?name=${info.name}`} size={size}>
              {(info.price - info.discountPrice).toLocaleString()} 원
            </Price>
          </PriceBox>
        )}
        {info.discountPrice === 0 && (
          <Price to={`/product/${info.id}?name=${info.name}`} size={size}>
            {info.price.toLocaleString()}원
          </Price>
        )}
      </Info>
    </Container>
  );
}
