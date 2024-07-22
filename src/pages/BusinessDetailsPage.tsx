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

function BusinessDetailsPage() {
  const [business, setBusiness] = useState<Buisness | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const { bsnssId } = useParams();
  const { loggedInUser } = useAuth();
  const [isAddingInput, setIsAddInput] = useState(false);
  const [newReviewContent, setNewReviewContent] = useState("");
  const [isUpdateReviewInput, setIsUpdateReviewInput] = useState<null | string>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: businessData } = await api.get(`/business/${bsnssId}`);
        setBusiness(businessData);

        const { data: reviewsData } = await api.get(`/business/${bsnssId}/reviews`);
        setReviews(reviewsData);

        const { data: likesData } = await api.get(`/business/${bsnssId}/likes`);
        setLikes(likesData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [bsnssId]);

  if (!business) return <div>Loading...</div>;

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
      setReviews((prev) => [...prev, review]);
      setIsAddInput(false);
      setNewReviewContent("");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateReview(
    ev: React.FormEvent<HTMLFormElement>,
    reviewId: string
  ) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const reviewContent = formData.get("reviewContent");
    const data = { content: reviewContent };

    try {
      const { data: updatedReview } = await api.patch(`/business/review/${reviewId}`, data);
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? updatedReview : review
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
      const { data: updatedReview } = await api.get(`/business/review/${reviewId}/like`);
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? updatedReview : review
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <img
          src={`/src/images/${business.imageUrl}`}
          alt={business.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
          <h1 className="text-4xl font-bold">{business.name}</h1>
          <p className="mt-2 text-lg">{business.description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {/* Map */}
        <div className="h-96"> {/* Ensure the map has a fixed height */}
          <MyMapComponent address="keren kayemet le-Ysrael 12, holon" />
        </div>
        {/* Reviews */}
        <div>
          {isAddingInput && (
            <div className="space-y-2 mb-4">
              <h2 className="text-lg font-semibold">Create Review</h2>
              <Input
                placeholder="Enter review"
                value={newReviewContent}
                onChange={(e) => setNewReviewContent(e.target.value)}
              />
              <Button onClick={handleAdd} className="bg-blue-500 text-white">
                Add Review
              </Button>
              <Button onClick={() => setIsAddInput(false)} className="bg-gray-500 text-white">
                Cancel
              </Button>
            </div>
          )}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Reviews</h2>
            {loggedInUser && (
              <Button onClick={() => setIsAddInput(!isAddingInput)} className="bg-green-500 text-white">
                {isAddingInput ? <Minus /> : <Plus />}
              </Button>
            )}
          </div>
          <ul className="space-y-4">
            {reviews.map((review) => {
              const userLiked = likes.some(like => like.user === loggedInUser?._id);

              return (
                <li key={review._id} className="border rounded-lg shadow-sm p-4 bg-white">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.user.avatarUrl} />
                      <AvatarFallback>
                        {review.user.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold">{review.user.username}</p>
                        {loggedInUser && loggedInUser._id === review.user._id && (
                          <div className="flex gap-2">
                            <Pencil
                              className="cursor-pointer text-blue-500"
                              onClick={() => setIsUpdateReviewInput(review._id)}
                            />
                            <Trash2
                              className="cursor-pointer text-red-500"
                              onClick={() => handleDeleteReview(review._id)}
                            />
                          </div>
                        )}
                      </div>
                      {isUpdateReviewInput === review._id ? (
                        <form
                          onSubmit={(ev) => handleUpdateReview(ev, review._id)}
                          className="flex gap-2"
                        >
                          <Input
                            defaultValue={review.content}
                            name="reviewContent"
                            className="flex-1"
                          />
                          <Button type="submit" className="bg-blue-500 text-white">
                            Apply
                          </Button>
                        </form>
                      ) : (
                        <p>{review.content}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleToggleLike(review._id)}>
                      <Heart className={`text-red-500 ${userLiked ? 'fill-red-500' : ''}`} />
                      <span>{review.likes}</span>
                    </div>
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
