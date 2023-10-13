import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { ArrowIconButton } from "@/components/VisualSection/style";
import { ProductInfo } from "@/types";

import ProductCard from "../ProductCard";

import { Container, Slides } from "./style";

interface Props {
  products: ProductInfo[];
  productsTag?: "NEW" | "BEST";
}

export default function ProductCarousel({ products, productsTag }: Props) {
  const [translateX, setTranslateX] = useState(-310 * 4);
  const [lastItem, setLastItem] = useState(7);
  const [transition, setTransition] = useState(0.3);

  const carouselProducts: ProductInfo[] = [
    ...products.slice(-4),
    ...products,
    ...products.slice(0, 4),
  ];

  const handlePrevClick = () => {
    setTransition(0.3);
    setTranslateX((prev) => prev + 310);
    setLastItem((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setTransition(0.3);
    setTranslateX((prev) => prev - 310);
    setLastItem((prev) => prev + 1);
  };

  useEffect(() => {
    if (lastItem === 3 || lastItem === carouselProducts.length - 1) {
      setTimeout(() => {
        setTransition(0);
        setLastItem(lastItem === 3 ? carouselProducts.length - 5 : 7);
        setTranslateX(lastItem === 3 ? -310 * products.length : -310 * 4);
      }, 300);
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
