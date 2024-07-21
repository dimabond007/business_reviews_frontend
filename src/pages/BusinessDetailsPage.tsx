import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Buisness, Review } from "@/types/types";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BusinessDetailsPage() {
  const [business, setBuisness] = useState<Buisness | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { bsnssId } = useParams();
  const { loggedInUser } = useAuth();

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

  useEffect(() => {
    getBusiness();
    fetchReviews();
  }, []);
  if (!business) return <div>Loading...</div>;

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
      <div>
        {/* mapa */}
        <div></div>
        {/* reviews */}
        <div>
          <ul className="flex flex-col justify-between gap-5 p-4">
            <h1>Reviews</h1>
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
                      <div className="flex flex-col justify-between">
                        <p className="font-bold">{review.user.username}</p>
                        <p>{review.content}</p>
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
