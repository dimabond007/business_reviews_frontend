import { Heart, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Like, Review } from "@/types/types";
import { User } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "@/services/api.service";

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
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  likes: Like[];
}

function ReviewItem({
  review,
  isUpdateReviewInput,
  handleUpdateReview,
  loggedInUser,
  setIsUpdateReviewInput,
  handleDeleteReview,
  setReviews,
  likes,
}: PropsType) {
  const [isLiked, setIsLike] = useState(false);
  const [iconLike, setIconLike] = useState(false);

  async function handleToggleLike(reviewId: string) {
    try {
      const res = await api.get(`/business/review/${reviewId}/like`);
      setReviews((prev) =>
        prev.map((review) => (review._id === reviewId ? res.data : review))
      );
      setIsLike(!isLiked);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("likes:", likes);

    const reviewLike = likes.find(
      (like) => review._id === like.review && like.user === loggedInUser?._id
    );
    console.log("reviewLike:", reviewLike);

    if (reviewLike) {
      setIsLike(true);
    } else setIsLike(false);
  }, [likes]);

  useEffect(() => {
    if (isLiked) {
      setIconLike(true);
    } else {
      setIconLike(false);
    }
  }, [isLiked]);

  return (
    <motion.li
      key={review._id}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex bg-accent  justify-between items-center border-b transition-all hover:bg-gray-200 p-2  dark:bg-gray-800 rounded-lg shadow">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={`/src/images/${review.user.imgUrl}`}
              className="w-8 h-8 rounded-full"
            />
            <AvatarFallback className="w-8 h-8 rounded-full text-white flex items-center justify-center bg-red-500 ">
              {review.user.username.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-bold dark:text-white">{review.user.username}</p>
            <div className="flex gap-2 ">
              {isUpdateReviewInput === review._id ? (
                <form
                  onSubmit={(ev) => handleUpdateReview(ev, review._id)}
                  className="flex gap-2 "
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
                  <p className="dark:text-white">{review.content}</p>
                  {loggedInUser && loggedInUser._id === review.user._id && (
                    <div className="flex space-x-2">
                      <Pencil
                        className="cursor-pointer dark:text-white hover:text-gray-700 w-5 "
                        onClick={() => setIsUpdateReviewInput(review._id)}
                      />
                      <Trash2
                        onClick={() => handleDeleteReview(review._id)}
                        className="text-red-500 cursor-pointer w-5 hover:text-red-700 "
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
          className="flex items-center gap-2 cursor-pointer text-gray-600 font-medium hover:text-red-600 dark:text-white transition-colors duration-200"
        >
          {iconLike ? <Heart fill="#FF0000" /> : <Heart />}
          <span>{review.likes}</span>
        </div>
      </div>
    </motion.li>
  );
}

export default ReviewItem;
