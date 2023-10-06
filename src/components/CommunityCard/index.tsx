import { useState, useRef } from "react";
import { BiSolidComment } from "react-icons/bi";

import {
  ReviewComponent,
  Header,
  Profile,
  Image,
  Info,
  InfoName,
  InfoUpdate,
  Following,
  BodyContainer,
  Ad,
  AdImage,
  Comment,
  CommentButton,
  Reaction,
  LikeButton,
  LikeIcon,
  AdText,
  KeyWord,
  Product,
  Price,
} from "./style";

export default function ReviewCard() {
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
    <ReviewComponent>
      <Header>
        <Profile>
          <Image />
          <Info>
            <InfoName type="body-3-m">김환경</InfoName>
            <InfoUpdate type="body-4-r">7분 전</InfoUpdate>
          </Info>
        </Profile>
        <Following type="body-3-r">팔로잉</Following>
      </Header>
      <BodyContainer></BodyContainer>
      <Ad>
        <AdImage />
        <AdText>
          <KeyWord type="body-4-b">
            [NEW!]
            <Product type="micro-m">
              프라이탁 HWAII FIVE-O 화이트 메신저백
            </Product>
          </KeyWord>
          <Price type="body-4-b">248,000원</Price>
        </AdText>
      </Ad>
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
    </ReviewComponent>
  );
}
