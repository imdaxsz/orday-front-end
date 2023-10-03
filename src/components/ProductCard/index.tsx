import BestTag from "@/assets/best.svg?react";
import NewTag from "@/assets/new.svg?react";
import LikeButton from "@/components/LikeButton";
import { ProductInfo } from "@/types";

import RemoveButton from "./RemoveButton";
import {
  Brand,
  Container,
  Image,
  ImageContainer,
  Info,
  Name,
  Price,
} from "./style";

type Size = "sm" | "md" | "lg" | "xl";
export type TagType = "NEW" | "BEST";

export interface ProductCardProps {
  size?: Size;
  $tag?: TagType;
  $remove?: boolean;
  info: ProductInfo;
}
export default function ProductCard({
  size,
  $tag,
  $remove,
  info,
}: ProductCardProps) {
  return (
    <Container size={size}>
      <ImageContainer size={size} $tag={$tag} $remove={$remove}>
        {!$remove ? (
          <>
            {$tag === "NEW" && <NewTag />}
            {$tag === "BEST" && <BestTag />}
            <LikeButton target="product" />
          </>
        ) : (
          <RemoveButton />
        )}
        <Image src={info.image} alt="1" size={size} />
      </ImageContainer>
      <Info>
        <Brand>{info.brand}</Brand>
        <Name>{info.name}</Name>
        <Price size={size}>{info.price.toLocaleString()}원</Price>
      </Info>
    </Container>
  );
}
