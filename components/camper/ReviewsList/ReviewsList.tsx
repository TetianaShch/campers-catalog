import styles from './ReviewsList.module.css';

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
    <div className={styles.wrapper}>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div
          key={review.id ?? `${review.reviewer_name}-${index}`}
          className={styles.card}
        >
          <div className={styles.header}>
            <div className={styles.avatar}>{review.reviewer_name[0]}</div>

            <div>
              <div className={styles.name}>{review.reviewer_name}</div>
              <div className={styles.rating}>
                {'⭐'.repeat(review.reviewer_rating)}
              </div>
            </div>
          </div>

          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
