import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import {
  ArrowIconButton,
  Container,
  Image,
  Gradient,
  Indicator,
  IndicatorContainer,
  Content,
} from "./style";

export interface Item {
  image: string;
  url: string;
}

interface Props {
  items: Item[];
}

export default function VisualSection({ items }: Props) {
  const [current, setCurrent] = useState(0);

  const CHANGE_AUTO_INTERVAL = 4000; // 이미지 자동 전환 주기

  const handlePrevClick = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (i: number) => {
    setCurrent(i);
  };

  // 이미지 자동 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, CHANGE_AUTO_INTERVAL);
    return () => clearInterval(timer);
  });

  return (
    <Container>
      <ArrowIconButton onClick={handlePrevClick}>
        <IoIosArrowBack />
      </ArrowIconButton>
      <ArrowIconButton onClick={handleNextClick} style={{ right: 0 }}>
        <IoIosArrowForward />
      </ArrowIconButton>
      <Gradient />
      {items.map((item, i) => (
        <Content to={item.url} key={i}>
          <Image $current={i === current} src={item.image} alt={`image${i}`} />
        </Content>
      ))}
      <IndicatorContainer>
        {[...Array(items.length)].map((_, i) => (
          <Indicator
            $active={current === i}
            key={i}
            onClick={() => handleIndicatorClick(i)}
          />
        ))}
      </IndicatorContainer>
    </Container>
  );
}
