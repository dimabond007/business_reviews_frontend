import { Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Review } from "@/types/types";
import { User } from "@/context/AuthContext";

interface PropsType {
  review: Review;
  isUpdateReviewInput: string | null;
  handleUpdateReview: (
    ev: React.FormEvent<HTMLFormElement>,
    reviewId: string
  ) => Promise<void>;
  loggedInUser: User | null | undefined;
  setIsUpdateReviewInput: React.Dispatch<React.SetStateAction<string | null>>;
  handleDeleteReview: (reviewId: string) => Promise<void>;
  handleToggleLike: (reviewId: string) => Promise<void>;
  iconLike: JSX.Element;
}

function ReviewItem({
  review,
  isUpdateReviewInput,
  handleUpdateReview,
  loggedInUser,
  setIsUpdateReviewInput,
  handleDeleteReview,
  handleToggleLike,
  iconLike,
}: PropsType) {
  return (
    <li key={review._id}>
      <div className="flex justify-between items-center border-b-2 transition-all hover:bg-accent p-2 rounded-lg">
        <div className="flex items-center">
          <Avatar className="">
            <AvatarImage
              src={`/src/images/${review.user.imgUrl}`}
              className="size-8 rounded-full"
            />
            <AvatarFallback className="size-8 rounded-full flex items-center justify-center bg-destructive">
              {review.user.username.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between items">
            <p className="font-bold">{review.user.username}</p>
            <div className="flex gap-2 items-center">
              {isUpdateReviewInput === review._id ? (
                <form
                  onSubmit={(ev) => handleUpdateReview(ev, review._id)}
                  className="flex gap-2"
                >
                  <Input defaultValue={review.content} name="reviewContent" />
                  <Button type="submit">apply</Button>
                </form>
              ) : (
                <>
                  <p>{review.content}</p>
                  {loggedInUser && loggedInUser._id === review.user._id && (
                    <>
                      <Pencil
                        className="cursor-pointer size-5"
                        onClick={() => setIsUpdateReviewInput(review._id)}
                      />
                      <Trash2
                        onClick={() => handleDeleteReview(review._id)}
                        className="text-red-600 cursor-pointer"
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <p
          onClick={() => loggedInUser && handleToggleLike(review._id)}
          className="flex items-center gap-2"
        >
          {iconLike}
          {review.likes}
        </p>
      </div>
    </li>
  );
}

export default ReviewItem;
