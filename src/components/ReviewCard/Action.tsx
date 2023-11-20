import { PiHeartFill } from "react-icons/pi";

import useToggleLike from "@/hooks/useToggleLike";

import { ActionContainer, LikeButton } from "./style";

interface Props {
  reviewId: number;
  isLiked?: boolean;
  likeCount: number;
}

export default function ReviewAction({ reviewId, isLiked, likeCount }: Props) {
  const { like, handleClick, count } = useToggleLike(
    reviewId,
    "review",
    isLiked,
    likeCount,
  );

  return (
    <ActionContainer>
      <LikeButton $active={like || false} onClick={handleClick}>
        <PiHeartFill size={16} />
        {count}
      </LikeButton>
    </ActionContainer>
  );
}
