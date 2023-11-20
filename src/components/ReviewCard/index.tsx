import ReviewAction from "./Action";
import ReviewContent from "./Content";
import ReviewHeader from "./Header";
import { Container } from "./style";

export default function ReviewCard({ review }: { review: RecentReview }) {
  return (
    <Container>
      <ReviewHeader userName={review.userName} createdAt={review.createdAt} />
      <ReviewContent {...review} />
      <ReviewAction
        reviewId={review.reviewId}
        isLiked={review.liked}
        likeCount={review.reviewLikeCount}
      />
    </Container>
  );
}
