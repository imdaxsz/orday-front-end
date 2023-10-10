import CommunityHeader from "./Review/Header";
import ReviewContent from "./Review/ReviewContent";
import TipContent from "./Review/TipContent";
import { ReviewComponent } from "./style";

interface ReviewCardProps {
  isMainTitle: boolean;
  key: number;
}

export default function ReviewCard({ isMainTitle, key }: ReviewCardProps) {
  return (
    <ReviewComponent>
      <CommunityHeader isMainTitle={isMainTitle} key={key} />
      {isMainTitle ? <ReviewContent /> : <TipContent />}
    </ReviewComponent>
  );
}
