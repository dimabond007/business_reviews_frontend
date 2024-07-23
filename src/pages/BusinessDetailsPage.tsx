import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Business, Like, Review } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMapComponent from "@/components/MyMapComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/HeroSection";
import ReviewsList from "@/components/ReviewsList";
import io from "socket.io-client";
import { motion } from "framer-motion";
import Loading from "@/components/Loading";

function BusinessDetailsPage() {
  const [business, setBusiness] = useState<Business | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const { bsnssId } = useParams();
  const { loggedInUser } = useAuth();
  const [isAddingInput, setIsAddInput] = useState(false);
  const [newReviewContent, setNewReviewContent] = useState("");
  const [isUpdateReviewInput, setIsUpdateReviewInput] = useState<null | string>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const businessData = await api.get(`/business/${bsnssId}`);
        setBusiness(businessData.data);

        const reviewsData = await api.get(`/business/${bsnssId}/reviews`);
        setReviews(reviewsData.data);

        const likesData = await api.get(`/business/likes`);
        setLikes(likesData.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [bsnssId]);

  useEffect(() => {
    const token = localStorage.getItem("jwt-taskify");
    const socket = io("http://localhost:3000", {
      auth: { token },
    });

    socket.on("newReview", (newReview: Review) => {
      setReviews((prev) => [...prev, newReview]);
    });

    socket.on("updateReview", (updatedReview: Review) => {
      setReviews((prev) =>
        prev.map((review) =>
          review._id === updatedReview._id ? updatedReview : review
        )
      );
    });

    socket.on("deleteReview", (reviewId: string) => {
      setReviews((prev) => prev.filter((review) => review._id !== reviewId));
    });

    return () => {
      socket.off("newReview");
      socket.off("updateReview");
      socket.off("deleteReview");
    };
  }, []);

  const handleAdd = async () => {
    if (!loggedInUser) {
      alert("You need to be logged in to add a review.");
      return;
    }

    try {
      await api.post(`/business/${bsnssId}/reviews`, { content: newReviewContent, user: loggedInUser._id });
      setNewReviewContent("");
      setIsAddInput(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateReview = async (ev: React.FormEvent<HTMLFormElement>, reviewId: string) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const reviewContent = formData.get("reviewContent");

    try {
      const res = await api.patch(`/business/review/${reviewId}`, { content: reviewContent });
      setReviews((prev) =>
        prev.map((review) =>
          review._id === reviewId ? res.data : review
        )
      );
      setIsUpdateReviewInput(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    try {
      await api.delete(`/business/${bsnssId}/reviews/${reviewId}`);
      setReviews((prev) =>
        prev.filter((review) => review._id !== reviewId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleLike = async (reviewId: string) => {
    try {
      const res = await api.get(`/business/review/${reviewId}/like`);
      setReviews((prev) =>
        prev.map((review) => (review._id === reviewId ? res.data : review))
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (!business) return <Loading />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans  bg-gray-100 min-h-screen"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <HeroSection business={business} />
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white p-8  rounded-lg shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="md:w-2/3 md:pr-8 "
            >
              {business.image && (
                <motion.img
                  src={business.image}
                  alt={business.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="w-full  h-60 object-cover rounded-lg shadow-lg mb-4"
                />
              )}
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-3xl text-primary font-bold mb-4"
              >
                {business.name}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="text-gray-600 mb-4"
              >
                {business.description}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="text-gray-800 mb-4"
              >
                {business.address}, {business.city}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
                className="text-gray-800 mb-4"
              >
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.8 }}
                className="mt-8"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 2 }}
                  className="bg-white p-6 rounded-lg shadow-lg "
                >
                  <div className="flex justify-between items-center mb-6">
                    <motion.h2
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl font-bold"
                    >
                      Reviews
                    </motion.h2>
                    <Button
                      onClick={() => setIsAddInput(!isAddingInput)}
                      className="bg-primary text-white hover:bg-primary-dark"
                    >
                      {isAddingInput ? "Cancel" : "Add Review"}
                    </Button>
                  </div>
                  {isAddingInput && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      className="bg-white p-6 rounded-lg shadow-lg mb-6"
                    >
                      <h3 className="text-lg font-semibold mb-2">Create Review</h3>
                      <Input
                        placeholder="Enter your review"
                        value={newReviewContent}
                        onChange={(e) => setNewReviewContent(e.target.value)}
                        className="mb-4"
                      />
                      <div className="flex  space-x-3">
                        <Button
                          onClick={handleAdd}
                          className="bg-primary text-white hover:bg-primary-dark"
                        >
                          Add Review
                        </Button>
                        <Button
                          onClick={() => setIsAddInput(false)}
                          className="bg-gray-300 hover:bg-gray-400"
                        >
                          Cancel
                        </Button>
                      </div>
                    </motion.div>
                  )}
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
                    handleToggleLike={handleToggleLike}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.6 }}
              className="md:w-1/3"
            >
              <MyMapComponent address={`${business.address}, ${business.city}`} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BusinessDetailsPage;
