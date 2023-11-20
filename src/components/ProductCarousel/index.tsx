import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { ArrowIconButton } from "@/components/VisualSection/style";

import ProductCard from "../ProductCard";

import { Container, Slides } from "./style";

interface Props {
  products: Product[];
  productsTag?: "NEW" | "BEST";
}

export default function ProductCarousel({ products, productsTag }: Props) {
  const SHOWING_ITEM_COUNT = 4;
  const SLIDE_TRANSITION = 0.3;

  const [translateX, setTranslateX] = useState(-310 * SHOWING_ITEM_COUNT);
  const [lastItem, setLastItem] = useState(2 * SHOWING_ITEM_COUNT - 1);
  const [transition, setTransition] = useState(SLIDE_TRANSITION);

  // 무한 캐러셀을 위한 배열 확장
  const carouselProducts: Product[] = [
    ...products.slice(-SHOWING_ITEM_COUNT),
    ...products,
    ...products.slice(0, SHOWING_ITEM_COUNT),
  ];

  const handlePrevClick = () => {
    setTransition(SLIDE_TRANSITION);
    setTranslateX((prev) => prev + 310);
    setLastItem((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setTransition(SLIDE_TRANSITION);
    setTranslateX((prev) => prev - 310);
    setLastItem((prev) => prev + 1);
  };

  // 맨 앞, 맨 뒤일 때 위치 이동
  useEffect(() => {
    if (
      lastItem === SHOWING_ITEM_COUNT - 1 ||
      lastItem === carouselProducts.length - 1
    ) {
      setTimeout(() => {
        setTransition(0);
        setLastItem(
          lastItem === SHOWING_ITEM_COUNT - 1
            ? carouselProducts.length - (SHOWING_ITEM_COUNT + 1)
            : 2 * SHOWING_ITEM_COUNT - 1,
        );
        setTranslateX(
          lastItem === SHOWING_ITEM_COUNT - 1
            ? -310 * products.length
            : -310 * SHOWING_ITEM_COUNT,
        );
      }, 1000 * SLIDE_TRANSITION);
    }
  }, [lastItem, carouselProducts.length, products.length]);

  return (
    <Container>
      <ArrowIconButton onClick={handlePrevClick}>
        <IoIosArrowBack />
      </ArrowIconButton>
      <ArrowIconButton onClick={handleNextClick} style={{ right: 0 }}>
        <IoIosArrowForward />
      </ArrowIconButton>
      <Slides $translateX={translateX} $transition={transition}>
        {carouselProducts.map((product, i) => (
          <ProductCard key={i} $tag={productsTag} info={product} />
        ))}
      </Slides>
    </Container>
  );
}
