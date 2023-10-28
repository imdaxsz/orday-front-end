import { useState } from "react";

import { toggleLikeBrand } from "@/api/BrandApi";

export default function useToggleLike(
  id: number,
  target: LikeTarget,
  isLiked?: boolean,
) {
  const [like, setLike] = useState(isLiked ?? false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike((prev) => !prev);
    console.log(target); // 임시
    // target에 따른 서버 요청
    if (target === "brand") await toggleLikeBrand(id);
    // TODO: 관심 상품 추가/삭제
  };

  return { like, handleClick };
}
