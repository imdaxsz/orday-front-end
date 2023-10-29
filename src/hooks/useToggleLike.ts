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
    console.log(target); // 임시

    // target에 따른 서버 요청
    try {
      if (target === "brand") await toggleLikeBrand(id);
      // TODO: 관심 상품 추가/삭제
      // if (target === "product")
      setLike((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return { like, handleClick };
}
