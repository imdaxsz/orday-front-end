import CommunityHeader from "./Review/Header";
import ReviewContent from "./Review/ReviewContent";
import TipContent from "./Review/TipContent";
import { ReviewComponent } from "./style";

interface ReviewCardProps {
  isMainTitle: boolean;
}

export default function ReviewCard({ isMainTitle }: ReviewCardProps) {
  const info = {
    name: isMainTitle ? "김환경" : "박나무",
    update: isMainTitle ? "7 분전" : "좋아요 1위!",
  };

  return (
    <ReviewComponent>
      <CommunityHeader info={info} />
      {isMainTitle ? <ReviewContent /> : <TipContent />}
    </ReviewComponent>
  );
}
