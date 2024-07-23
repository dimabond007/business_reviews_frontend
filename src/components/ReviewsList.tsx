import { User } from "@/context/AuthContext";
import { Like, Review } from "@/types/types";
import ReviewItem from "./ReviewItem";

interface PropsType {
  loggedInUser: User | null | undefined;
  isAddingInput: boolean;
  setIsAddInput: React.Dispatch<React.SetStateAction<boolean>>;
  reviews: Review[];
  likes: Like[];
  isUpdateReviewInput: string | null;
  handleUpdateReview: (
    ev: React.FormEvent<HTMLFormElement>,
    reviewId: string
  ) => Promise<void>;
  setIsUpdateReviewInput: React.Dispatch<React.SetStateAction<string | null>>;
  handleDeleteReview: (reviewId: string) => Promise<void>;
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}

function ReviewsList({
  loggedInUser,
  reviews,
  likes,
  isUpdateReviewInput,
  handleUpdateReview,
  setIsUpdateReviewInput,
  handleDeleteReview,
  setReviews,
}: PropsType) {
  return (
    <ul className="flex  flex-col justify-between gap-5 p-2 overflow-y-scroll max-h-[200px]   ">
      {reviews.map((review) => {
        return (
          <ReviewItem
            key={review._id}
            review={review}
            isUpdateReviewInput={isUpdateReviewInput}
            handleUpdateReview={handleUpdateReview}
            loggedInUser={loggedInUser}
            setIsUpdateReviewInput={setIsUpdateReviewInput}
            handleDeleteReview={handleDeleteReview}
            setReviews={setReviews}
            likes={likes}
          />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
