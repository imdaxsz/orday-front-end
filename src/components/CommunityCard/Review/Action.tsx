import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";

import { CommentButton, Reaction, LikeButton, LikeIcon } from "../style";

export default function Action() {
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
      <CommentButton>
        <BiSolidComment />
        {2}
      </CommentButton>
    </Reaction>
  );
}
