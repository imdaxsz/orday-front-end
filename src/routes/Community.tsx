import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import ReviewCard from "@/components/CommunityCard";
import { Post } from "@/components/CommunityCard/post";
import HashTagList from "@/components/HashTag/List";
import Head from "@/components/Head";

export default function Community() {
  const [isMainTitle, setMainTitle] = useState(true);
  const [isSubTitle, setSubTitle] = useState(true);
  const [mainContents, setMainContents] = useState<number[]>([]);
  const [ref, inView] = useInView();

  const toggleMainTitle = () => {
    setMainTitle((prev) => !prev);
  };

  const toggleSubTitle = () => {
    setSubTitle((prev) => !prev);
  };

  useEffect(() => {
    if (inView) {
      setMainContents((prevContents) => [
        ...prevContents,
        prevContents.length + 1,
      ]);
    }
  }, [inView]);

  return (
    <Container>
      <Head title="Orday | 커뮤니티" />
      <ContentSection>
        <ToggleComponent>
          <MainTitle>
            <Review onClick={toggleMainTitle} active={isMainTitle}>
              실시간 리뷰
            </Review>
            <Tip onClick={toggleMainTitle} active={isMainTitle}>
              지구를 지키는 팁
            </Tip>
          </MainTitle>
        </ToggleComponent>
      </ContentSection>
      <SubTitle>
        <Following onClick={toggleSubTitle} active={isSubTitle}>
          팔로잉
        </Following>
        <Recommend onClick={toggleSubTitle} active={isSubTitle}>
          추천
        </Recommend>
      </SubTitle>
      {isMainTitle ? (
        <HashTag>
          <HashTagTitle>추천 해시태그</HashTagTitle>
          <HashTagList />
        </HashTag>
      ) : (
        <>
          <RecommendTitle>추천 게시글</RecommendTitle>
          <Post />
        </>
      )}
      {mainContents.map((contentId) => (
        <MainContent key={contentId}>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ReviewCard isMainTitle={isMainTitle} key={index} />
            ))}
        </MainContent>
      ))}
      <div ref={ref}></div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  gap: 20px;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 770px;
  height: auto;
  margin: 0 auto;
  margin-top: 22px;
`;

const ToggleComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  width: 319px;
  height: 39px;
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.colors["neutral"]["20"]};
  background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
`;

const Review = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors["primary"]["80"] : theme.colors["neutral"]["10"]};
  color: ${({ theme, active }) =>
    active ? theme.colors["neutral"]["10"] : theme.colors["neutral"]["40"]};
  width: ${(props) => (props.active ? "50%" : "50%")};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const Tip = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors["neutral"]["10"] : theme.colors["primary"]["80"]};
  color: ${({ theme, active }) =>
    active ? theme.colors["neutral"]["40"] : theme.colors["neutral"]["10"]};
  width: ${(props) => (props.active ? "50%" : "50%")};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 722px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral"]["40"]};
  margin-top: 42px;
  gap: 30px;
  padding-bottom: 10px;
  position: relative;
`;

const Following = styled.div<{ active: boolean }>`
  font-size: ${({ theme, active }) =>
    active ? theme.typo["body-3-b"] : theme.typo["body-3-r"]};
  cursor: pointer;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    gap: 10px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors["neutral"]["100"]};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const Recommend = styled.div<{ active: boolean }>`
  font-size: ${({ theme, active }) =>
    active ? theme.typo["body-3-r"] : theme.typo["body-3-b"]};
  cursor: pointer;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors["neutral"]["100"]};
    opacity: ${(props) => (props.active ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const HashTag = styled.div`
  width: 722px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 43px;
  gap: 21px;
`;

const HashTagTitle = styled.div`
  font-size: ${({ theme }) => theme.typo["title-2-b"]};
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 34px;
  gap: 24px;
  width: 722px;
  height: auto;
  > :nth-child(2) {
    margin-top: 122px;
  }
  > :nth-child(3) {
    margin-top: -122px;
  }
`;

const RecommendTitle = styled.div`
  width: 722px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.typo["title-2-b"]};
`;
