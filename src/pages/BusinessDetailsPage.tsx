import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Buisness, Like, Review } from "@/types/types";
import { Heart, Pencil, Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMapComponent from "@/components/MyMapComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// const API_KEY = "AIzaSyAcnV2yGM1jOC2mn7g9cJ5nwS5fqwlFaZg";

function BusinessDetailsPage() {
  const [business, setBuisness] = useState<Buisness | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const { bsnssId } = useParams();
  const { loggedInUser } = useAuth();
  const [isAddingInput, setIsAddInput] = useState(false);
  const [newReviewContent, setNewReviewContent] = useState("");
  const [isUpdateReviewInput, setIsUpdateReviewInput] = useState<null | string>(
    null
  );

  async function getBusiness() {
    try {
      const { data } = await api.get("/business/" + bsnssId);
      setBuisness(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchReviews() {
    try {
      const res = await api.get(`business/${bsnssId}/reviews`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLikes() {
    try {
      const res = await api.get("/business/likes");
      setLikes(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAdd() {
    if (!loggedInUser) {
      alert("You need to be logged in to add a review.");
      return;
    }
    const review = {
      content: newReviewContent,
      user: loggedInUser._id,
    };

    try {
      await api.post(`/business/${bsnssId}/reviews`, review);
      fetchReviews();
      setIsAddInput(false);
      setNewReviewContent("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBusiness();
    fetchReviews();
    getLikes();
  }, []);

  if (!business) return <div>Loading...</div>;
  const isAddingContent = (
    <div>
      <div>Create Review</div>
      <Input
        placeholder="Enter review"
        value={newReviewContent}
        onChange={(e) => setNewReviewContent(e.target.value)}
      />{" "}
      <Button onClick={handleAdd}>Add Review</Button>
      <Button onClick={() => setIsAddInput(false)}>Cancel</Button>
    </div>
  );

  async function handleUpdateReview(
    ev: React.FormEvent<HTMLFormElement>,
    reviewId: string
  ) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const reviewContent = formData.get("reviewContent");
    const data = { content: reviewContent };
    try {
      const res = await api.patch(`/business/review/${reviewId}`, data);
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? res.data : review
        )
      );
      setIsUpdateReviewInput(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteReview(reviewId: string) {
    try {
      await api.delete(`/business/${bsnssId}/reviews/${reviewId}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleToggleLike(reviewId: string) {
    try {
      const res = await api.get(`/business/review/${reviewId}/like`);
      setReviews((prev) =>
        prev.map((review) => (review._id === reviewId ? res.data : review))
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="relative">
        <div>
          <img
            src={`/src/images/${business.imageUrl}`}
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute top-0 left-0 content-center w-full h-full bg-black bg-opacity-50">
          <div className="flex flex-col text-center justify-center  text-accent-foreground ">
            <div className="text-5xl font-black">{business.name}</div>
            <div>{business.description}</div>
          </div>
        </div>
      </div>
      <div className="">
        {/* map */}
        <div>
          <MyMapComponent address={`${business.address},${business.city}`} />
        </div>
        {/* reviews */}
        <div>
          {isAddingInput ? isAddingContent : ""}
          <ul className="flex  flex-col justify-between gap-5 p-4">
            <div className="flex justify-between items-center">
              <h1>Reviews</h1>
              {loggedInUser && (
                <Button onClick={() => setIsAddInput(!isAddingInput)}>
                  {isAddingInput ? <Minus /> : <Plus />}
                </Button>
              )}
            </div>
            {reviews.map((review) => {
              const reviewLike = likes.find(
                (like) =>
                  review._id === like.review && like.user === loggedInUser?._id
              );
              // console.log(reviewLike);

              let iconLike;
              if (reviewLike) {
                iconLike = <Heart fill="#000"></Heart>;
              } else {
                iconLike = <Heart></Heart>;
              }

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
                              onSubmit={(ev) =>
                                handleUpdateReview(ev, review._id)
                              }
                              className="flex gap-2"
                            >
                              <Input
                                defaultValue={review.content}
                                name="reviewContent"
                              />
                              <Button type="submit">apply</Button>
                            </form>
                          ) : (
                            <>
                              <p>{review.content}</p>
                              {loggedInUser &&
                                loggedInUser._id === review.user._id && (
                                  <>
                                    <Pencil
                                      className="cursor-pointer size-5"
                                      onClick={() =>
                                        setIsUpdateReviewInput(review._id)
                                      }
                                    />
                                    <Trash2
                                      onClick={() =>
                                        handleDeleteReview(review._id)
                                      }
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
                      onClick={() =>
                        loggedInUser && handleToggleLike(review._id)
                      }
                      className="flex items-center gap-2"
                    >
                      {iconLike}
                      {review.likes}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetailsPage;
