// import { useAuth } from "@/context/AuthContext";
import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const BUISNESS_URL = "http://localhost:3000/api/business";

function BusinessListPage() {
  const [buisnesses, setBuisnesses] = useState<Buisness[]>([]);
  // const { loggedInUser } = useAuth();

  useEffect(() => {
    async function fetchAllBuisnesses() {
      try {
        const { data: fetchedBusinesses } = await api.get(BUISNESS_URL);
        setBuisnesses(fetchedBusinesses);
        console.log(buisnesses);
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
                <img src={buisness.image} alt="imageName" />
                <p>{buisness.name}</p>
                <p>{buisness.description}</p>
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
