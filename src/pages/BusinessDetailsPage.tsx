import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Buisness, Review } from "@/types/types";
import { Heart, Pencil, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMapComponent from "@/components/MyMapComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// const API_KEY = "AIzaSyAcnV2yGM1jOC2mn7g9cJ5nwS5fqwlFaZg";

function BusinessDetailsPage() {
  const [business, setBuisness] = useState<Buisness | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { bsnssId } = useParams();
  const { loggedInUser } = useAuth();
  const [isAddingInput, setIsAddInput] = useState(false);
  const [newReviewContent, setNewReviewContent] = useState("");
  const [isUpdateReviewInput, setIsUpdateReviewInput] = useState<
    false | string
  >(false);

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
  async function handleUpdateReview(reviewId: string) {}

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
        {/* mapa */}
        <div>
          <MyMapComponent address="keren kayemet le-Ysrael 12, holon" />
          {/* <MyMapComponent address="ha-atsmaut 80, kiryat ata" /> */}
        </div>
        {/* reviews */}
        <div>
          {isAddingInput ? isAddingContent : ""}
          <ul className="flex  flex-col justify-between gap-5 p-4">
            <div className="flex justify-between items-center">
              <h1>Reviews</h1>
              <Button onClick={() => setIsAddInput(!isAddingInput)}>
                {isAddingInput ? <Minus /> : <Plus />}
              </Button>
            </div>
            {reviews.map((review) => {
              return (
                <li key={review._id}>
                  <div className="flex justify-between items-center border-b-2 transition-all hover:bg-accent p-2 rounded-lg">
                    <div className="flex items-center">
                      <Avatar className="">
                        <AvatarImage src="" className="size-8 rounded-full" />
                        <AvatarFallback className="size-8 rounded-full flex items-center justify-center bg-destructive">
                          {review.user.username.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-between items">
                        <p className="font-bold">{review.user.username}</p>
                        <div className="flex gap-2 items-center">
                          {isUpdateReviewInput === review._id ? (
                            <Input />
                          ) : (
                            <p>{review.content}</p>
                          )}
                          {loggedInUser &&
                            loggedInUser._id === review.user._id && (
                              <Pencil
                                className="cursor-pointer size-5"
                                onClick={() =>
                                  setIsUpdateReviewInput(review._id)
                                }
                              />
                            )}
                        </div>
                      </div>
                    </div>
                    <p className="flex items-center gap-2">
                      <Heart className="text-red-500" /> {review.likes}
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
