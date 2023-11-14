import ReviewAction from "./Review/Action";
import ReviewContent from "./Review/Content";
import ReviewHeader from "./Review/Header";
import { ReviewComponent } from "./style";

export default function ReviewCard() {
  const info = {
    name: "김환경",
    text: "7 분전",
  };

  return (
    <ReviewComponent>
      <ReviewHeader info={info} />
      <ReviewContent />
      <ReviewAction />
    </ReviewComponent>
  );
}
