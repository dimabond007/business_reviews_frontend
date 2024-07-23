import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Buisness, Like, Review } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMapComponent from "@/components/MyMapComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/HeroSection";
import ReviewsList from "@/components/ReviewsList";
import io from "socket.io-client";

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

  useEffect(() => {
    const token = localStorage.getItem("jwt-taskify");

    const socket = io("http://localhost:3000", {
      auth: {
        token,
      },
    });
    socket.on("newReview", (newReview: Review) => {
      setReviews([...reviews, newReview]);
    });
    socket.on("updateReview", (updatedReview: Review) => {
      setReviews(
        reviews.map((review) =>
          review._id === updatedReview._id ? updatedReview : review
        )
      );
    });
    socket.on("deleteReview", (reviewId: string) => {
      setReviews(reviews.filter((review) => review._id !== reviewId));
    });

    socket.on("updateLike", ({ reviewId, likes }) => {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? { ...review, likes } : review
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [reviews]);

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

  return (
    <div>
      <HeroSection business={business} />
      <div>
        {/* mapa */}
        <div>
          <MyMapComponent address={`${business.address}, ${business.city}`} />
        </div>
        {/* reviews */}
        <div>
          {isAddingInput ? isAddingContent : ""}
          <ReviewsList
            loggedInUser={loggedInUser}
            isAddingInput={isAddingInput}
            setIsAddInput={setIsAddInput}
            reviews={reviews}
            likes={likes}
            isUpdateReviewInput={isUpdateReviewInput}
            handleUpdateReview={handleUpdateReview}
            setIsUpdateReviewInput={setIsUpdateReviewInput}
            handleDeleteReview={handleDeleteReview}
            setReviews={setReviews}
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessDetailsPage;
