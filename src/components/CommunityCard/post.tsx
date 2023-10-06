import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import {
  PostComponent,
  PostCard,
  Profile,
  Image,
  Info,
  InfoName,
  InfoState,
  Preview,
  LeftChevron,
  RightChevron,
} from "./post.style";

const tipData = [
  "Tip 1",
  "Tip 2",
  "Tip 3",
  "Tip 4",
  "Tip 5",
  "Tip 6",
  "Tip 7",
  "Tip 8",
  "Tip 9",
];

export function Post() {
  const [currentPost, setCurrentPost] = useState(1);

  const NextPost = () => {
    setCurrentPost((prevPost) => (prevPost + 1) % tipData.length);
  };

  const prevPost = () => {
    setCurrentPost((prevPost) =>
      prevPost === 0 ? tipData.length - 1 : prevPost - 1,
    );
  };

  const getPostCard = () => {
    const currentIndex = currentPost % tipData.length;
    const nextIndex = (currentPost + 1) % tipData.length;
    const prevIndex = currentPost === 0 ? tipData.length - 1 : currentPost - 1;
    const cards = [
      tipData[prevIndex],
      tipData[currentIndex],
      tipData[nextIndex],
    ];

    return cards;
  };

  return (
    <PostComponent>
      <LeftChevron type="title-2-b" onClick={prevPost}>
        <FaChevronLeft />
      </LeftChevron>
      {getPostCard().map((tip, index) => (
        <PostCard key={index} left={index === 0}>
          <Profile>
            <Image />
            <Info>
              <InfoName type="body-3-m">김환경</InfoName>
              <InfoState type="body-4-r" left={index === 0}>
                실시간 인기 급등!
              </InfoState>
            </Info>
          </Profile>
          <Preview type="body-3-r" left={index === 0}>
            업사이클링 체험해 보셨나요?{tip}
          </Preview>
        </PostCard>
      ))}
      <RightChevron type="title-2-b" onClick={NextPost}>
        <FaChevronRight />
      </RightChevron>
    </PostComponent>
  );
}
