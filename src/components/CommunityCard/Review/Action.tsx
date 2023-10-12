import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";

import { CommentButton, Reaction, LikeButton, LikeIcon } from "../style";

interface ActionProps {
  commentRef: React.RefObject<HTMLTextAreaElement | null>;
  focusCommentInput: () => void;
}

export default function Action({ focusCommentInput }: ActionProps) {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <Reaction>
      <LikeButton active={isLike} onClick={toggleLike}>
        <LikeIcon active={isLike} />
        좋아요
      </LikeButton>
      <CommentButton onClick={focusCommentInput}>
        <BiSolidComment />
        댓글 쓰기
      </CommentButton>
    </Reaction>
  );
}
