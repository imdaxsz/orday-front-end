import { useEffect, useState } from "react";

import { toggleLikeBrand } from "@/api/BrandApi";
import { toggleLikeProducts } from "@/api/ProductApi";
import { toggleLikeReview } from "@/api/ReviewApi";

export default function useToggleLike(
  id: number,
  target: LikeTarget,
  isLiked?: boolean,
  likeCount?: number,
) {
  const [like, setLike] = useState(isLiked ?? false);
  const [count, setCount] = useState(likeCount ?? 0);

  useEffect(() => {
    if (isLiked) setLike(isLiked);
  }, [isLiked]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetName =
      target === "brand" ? "브랜드" : target === "product" ? "상품" : "리뷰";
    if (!localStorage.getItem("token")) {
      const message =
        target === "review" ? "리뷰 좋아요는" : `관심 ${targetName} 등록은`;
      alert(`${message} 로그인 후 가능합니다.`);
      return;
    }
    // target에 따른 서버 요청
    try {
      if (target === "brand") await toggleLikeBrand(id);
      if (target === "product") await toggleLikeProducts(id);
      if (target === "review") {
        await toggleLikeReview(id);
        setCount((prev) => (isLiked ? prev - 1 : prev + 1));
      }
      setLike((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return { like, handleClick, count };
}
