import { Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Review } from "@/types/types";
import { User } from "@/context/AuthContext";
import { motion } from "framer-motion";

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
    <motion.li
      key={review._id}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center border-b transition-all hover:bg-gray-200 p-2 bg-white rounded-lg shadow">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={`/src/images/${review.user.imgUrl}`}
              className="w-8 h-8 rounded-full"
            />
            <AvatarFallback className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500 text-white">
              {review.user.username.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-bold text-gray-800">{review.user.username}</p>
            <div className="flex gap-2 items-center">
              {isUpdateReviewInput === review._id ? (
                <form
                  onSubmit={(ev) => handleUpdateReview(ev, review._id)}
                  className="flex gap-2"
                >
                  <Input
                    defaultValue={review.content}
                    name="reviewContent"
                    className="border border-gray-300 rounded p-2"
                  />
                  <Button type="submit">Apply</Button>
                </form>
              ) : (
                <>
                  <p className="text-gray-600">{review.content}</p>
                  {loggedInUser && loggedInUser._id === review.user._id && (
                    <div className="flex space-x-2">
                      <Pencil
                        className="cursor-pointer text-gray-500 hover:text-gray-700 w-5 "
                        onClick={() => setIsUpdateReviewInput(review._id)}
                      />
                      <Trash2
                        onClick={() => handleDeleteReview(review._id)}
                        className="text-red-500 cursor-pointer w-5 hover:text-red-700"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => loggedInUser && handleToggleLike(review._id)}
          className="flex items-center gap-2 cursor-pointer text-gray-600 font-medium hover:text-red-600 transition-colors duration-200"
        >
          {iconLike}
          <span>{review.likes}</span>
        </div>
      </div>
    </motion.li>
  );
}

export default ReviewItem;
