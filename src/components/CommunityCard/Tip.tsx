import { useState, useRef } from "react";
import { BiSolidComment } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

import {
  TipComponent,
  Header,
  Profile,
  Image,
  Info,
  InfoName,
  InfoUpdate,
  Following,
  TipWriting,
  TipTitle,
  TipDetail,
  BodyContainer,
  Comment,
  CommentButton,
  Reaction,
  LikeButton,
  LikeIcon,
} from "./Tip.style";

export default function Tip() {
  const [isLike, setIsLike] = useState(false);
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const toggleLike = () => {
    setIsLike(!isLike);
  };

  const focusCommentInput = () => {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  return (
    <TipComponent>
      <Header>
        <Profile>
          <Image />
          <Info>
            <InfoName type="body-3-m">박나무</InfoName>
            <InfoUpdate type="body-4-r">좋아요 1위!</InfoUpdate>
          </Info>
        </Profile>
        <Following type="body-1-b">
          <BsFillHeartFill />
        </Following>
      </Header>
      <TipWriting>
        <TipTitle type="body-3-m">업사이클링 체험</TipTitle>
        <TipDetail type="body-4-r">
          여러분 아직도 재활용만 열심히 하시나요?
        </TipDetail>
      </TipWriting>
      <BodyContainer></BodyContainer>
      <Comment
        ref={commentInputRef}
        type="body-4-r"
        placeholder="최소 100자 이상 작성하세요."
      />
      <Reaction type="body-4-r">
        <LikeButton active={isLike} onClick={toggleLike}>
          <LikeIcon active={isLike} />
          좋아요
        </LikeButton>
        <CommentButton onClick={focusCommentInput}>
          <BiSolidComment />
          댓글 쓰기
        </CommentButton>
      </Reaction>
    </TipComponent>
  );
}
