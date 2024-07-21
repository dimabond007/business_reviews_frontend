// import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BUISNESS_URL = "http://localhost:3000/api/business";

function BusinessListPage() {
  const [buisnesses, setBuisnesses] = useState<Buisness[]>([]);
  // const { loggedInUser } = useAuth();

  useEffect(() => {
    async function fetchAllBuisnesses() {
      try {
        const { data: fetchedBusinesses } = await api.get(BUISNESS_URL);
        setBuisnesses(fetchedBusinesses);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBuisnesses();
  }, []);

  return (
    <>
      <h1>BusinessListPage</h1>
      <ul className="flex flex-wrap justify-between gap-4">
        {buisnesses.map((buisness) => {
          return (
            <li key={buisness._id}>
              <div className="w-52 border p-2 min-h-40">
                <img
                  src={`src/images/${buisness.imageUrl}`}
                  alt={buisness.name}
                />
                <p>{buisness.name}</p>
                <p>{buisness.description}</p>
                <Link to={`/bsnss/${buisness._id}`}>
                  <Button>Reviews</Button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export default BusinessListPage;
