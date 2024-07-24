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
import { motion } from "framer-motion";
import Loading from "@/components/Loading";
import { toast } from "@/components/ui/use-toast";

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
  }, []);

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
  const handleAdd = async () => {
    if (!loggedInUser) {
      alert("You need to be logged in to add a review.");
      return;
    }

    try {
      await api.post(`/business/${bsnssId}/reviews`, {
        content: newReviewContent,
        user: loggedInUser._id,
      });
      setNewReviewContent("");
      setIsAddInput(false);
      toast({ title: "Review created successfuly" });
    } catch (error) {
      console.error(error);
    }
  };

  if (!business) return <div>Loading...</div>;

  async function handleUpdateReview(
    ev: React.FormEvent<HTMLFormElement>,
    reviewId: string
  ) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const reviewContent = formData.get("reviewContent");

    try {
      const res = await api.patch(`/business/review/${reviewId}`, {
        content: reviewContent,
      });
      setReviews((prev) =>
        prev.map((review) => (review._id === reviewId ? res.data : review))
      );
      setIsUpdateReviewInput(null);
      toast({ title: `Review updated successfuly!` });
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteReview = async (reviewId: string) => {
    try {
      await api.delete(`/business/${bsnssId}/reviews/${reviewId}`);
      setReviews((prev) => prev.filter((review) => review._id !== reviewId));
      toast({ title: `Review deleted successfuly` });
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
      className="font-sans bg-background min-h-screen"
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
          className="bg-secondary p-8  dark:text-white rounded-lg shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="md:w-2/3 md:pr-8 "
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-3xl text-primary dark:text-white font-bold mb-4"
              >
                {business.name}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="text-gray-600 dark:text-white mb-4 "
              >
                {business.description}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="text-gray-800 mb-4 dark:text-white"
              >
                {business.address}, {business.city}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
                className="text-gray-800 mb-4"
              ></motion.p>

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
                  className="bg-ring p-6 rounded-lg shadow-lg "
                >
                  <div className="flex justify-between items-center mb-6 ">
                    <motion.h2
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl font-bold text-secondary dark:text-white "
                    >
                      Reviews
                    </motion.h2>
                    <Button
                      onClick={() => setIsAddInput(!isAddingInput)}
                      className="dark:bg-gray-800 bg-blue-800 text-white hover:bg-primary-dark"
                    >
                      {isAddingInput ? "Cancel" : "Add Review"}
                    </Button>
                  </div>
                  {isAddingInput && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      className="bg-white p-6 rounded-lg shadow-lg mb-6 dark:bg-gray-400"
                    >
                      <h3 className="text-lg font-semibold mb-2 dark:text-black">
                        Create Review
                      </h3>
                      <Input
                        placeholder="Enter your review"
                        value={newReviewContent}
                        onChange={(e) => setNewReviewContent(e.target.value)}
                        className="mb-4 "
                      />
                      <div className="flex  space-x-3 ">
                        <Button
                          onClick={handleAdd}
                          className="bg-primary text-white  hover:bg-primary-dark"
                        >
                          Add Review
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
                    setReviews={setReviews}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.6 }}
              className="md:w-1/3 "
            >
              <MyMapComponent
                address={`${business.address}, ${business.city}`}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BusinessDetailsPage;
