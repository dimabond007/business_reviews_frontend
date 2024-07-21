import { Button } from "@/components/ui/button";
import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BUISNESS_URL = "http://localhost:3000/api/business";

function BusinessListPage() {
  const [buisnesses, setBuisnesses] = useState<Buisness[]>([]);

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
      <header className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-6 px-8 shadow-md">
        <h1 className="text-4xl  text-center font-extrabold">Discover Top Businesses</h1>
      </header>
      <main className="p-8 bg-background">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {buisnesses.map((buisness) => (
            <li
              key={buisness._id}
              className="relative bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 overflow-hidden bg-black">
                <img
                  src={`src/images/${buisness.imageUrl}`}
                  alt={buisness.name}
                  className="w-full  h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white text-secondary">{buisness.name}</h2>
                  <p className="text-sm mb-4 text-secondary dark:text-white">{buisness.description}</p>
                  <Link to={`/bsnss/${buisness._id}`}>
                    <Button className="bg-primary hover:bg-primary-foreground text-primary-foreground py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                      View Reviews
                    </Button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Outlet />
    </>
  );
}

export default BusinessListPage;
