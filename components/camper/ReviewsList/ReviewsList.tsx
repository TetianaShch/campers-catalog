type Review = {
  id: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Props = {
  reviews: Review[];
};

export default function ReviewsList({ reviews }: Props) {
  if (!reviews?.length) return null;

  return (
    <div>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div key={review.id ?? `${review.reviewer_name}-${index}`}>
          <p>
            <strong>{review.reviewer_name}</strong> ⭐ {review.reviewer_rating}
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
