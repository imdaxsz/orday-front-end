import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { ArrowIconButton } from "../VisualSection/style";

import { Card, Container, Info, SlideContainer, Slider } from "./style";

interface CarouselItem {
  image: string;
  url: string;
  info: {
    title: string;
    content: string;
  };
}

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [translateX, setTranslateX] = useState(0);
  const [transition, setTransition] = useState(0.5);
  const [info, setInfo] = useState(items[1].info);

  const SLIDE_RESET_DELAY = 500;
  const CHANGE_INFO_DELAY = 500; // 이미지가 완전히 교체된 후 info가 수정되도록 합니다.

  const carouselItems = [
    items[items.length - 2],
    items[items.length - 1],
    ...items,
    items[0],
    items[1],
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    setTransition(0.5);
    setTranslateX((prev) => prev + 430);
    setTimeout(() => {
      setInfo({ ...carouselItems[currentIndex - 1].info });
    }, CHANGE_INFO_DELAY);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTransition(0.5);
    setTranslateX((prev) => prev - 430);
    setTimeout(() => {
      setInfo({ ...carouselItems[currentIndex + 1].info });
    }, CHANGE_INFO_DELAY);
  };

  useEffect(() => {
    if (currentIndex === 1) {
      setTimeout(() => {
        setCurrentIndex(4);
        setTranslateX(-430);
        setTransition(0);
      }, SLIDE_RESET_DELAY);
    } else if (currentIndex === 5) {
      setTimeout(() => {
        setCurrentIndex(2);
        setTranslateX(430);
        setTransition(0);
      }, SLIDE_RESET_DELAY);
    }
  }, [currentIndex]);

  return (
    <Container>
      <SlideContainer>
        <ArrowIconButton
          onClick={handlePrevClick}
          style={{ left: "310px" }}
          aria-label="이전"
        >
          <IoIosArrowBack />
        </ArrowIconButton>
        <ArrowIconButton
          onClick={handleNextClick}
          style={{ right: "310px" }}
          aria-label="다음"
        >
          <IoIosArrowForward />
        </ArrowIconButton>
        <Slider $translateX={translateX} $transition={transition}>
          {carouselItems.map((item, i) => (
            <Link to={item.url} key={i} aria-label={item.info.title}>
              <Card
                src={item.image}
                $active={i === currentIndex}
                $transition={transition}
                alt={item.info.title}
              />
            </Link>
          ))}
        </Slider>
      </SlideContainer>
      <Info to={carouselItems[currentIndex].url}>
        <h3>{info.title}</h3>
        <span>{info.content}</span>
      </Info>
    </Container>
  );
}
