import ReviewAction from "./Action";
import ReviewContent from "./Content";
import ReviewHeader from "./Header";
import { ReviewComponent } from "./style";

export default function ReviewCard({ i }: { i: number }) {
  const info = {
    name: "김환경",
    text: "7 분전",
  };

  return (
    <ReviewComponent>
      <ReviewHeader info={info} />
      <ReviewContent />
      <ReviewAction reviewId={1} likeCount={i} />
    </ReviewComponent>
  );
}
