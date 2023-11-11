import { useState } from "react";
import { PiHeartFill } from "react-icons/pi";

import { Reaction, LikeButton } from "../style";

export default function ReviewAction() {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <Reaction>
      <LikeButton active={isLike} onClick={toggleLike}>
        <PiHeartFill size={16} />
        {"0"}
      </LikeButton>
    </Reaction>
  );
}
