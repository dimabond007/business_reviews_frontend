import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";  // Import the Loading component

const BUISNESS_URL = "http://localhost:3000/api/business";

function BusinessListPage() {
  const [businesses, setBusinesses] = useState<Buisness[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the search query from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    async function fetchAllBusinesses() {
      try {
        const { data: fetchedBusinesses } = await api.get(BUISNESS_URL);
        setBusinesses(fetchedBusinesses);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllBusinesses();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    const params = new URLSearchParams(location.search);
    params.set("query", newQuery);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-12 px-8 shadow-md"
      >
        <h1 className="text-5xl text-center font-extrabold">
          Discover Top Businesses
        </h1>
        <p className="text-xl mt-4 text-center max-w-2xl mx-auto">
          Explore and review the best local businesses in your area.
        </p>
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search businesses..."
            value={query}
            onChange={handleSearch}
            className="p-2 rounded-lg w-full max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
          />
        </div>
      </motion.header>

      <main className="p-8 bg-background">
        {isLoading ? (
          <Loading />  // Use the Loading component when isLoading is true
        ) : (
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              staggerChildren: 0.1,
              delayChildren: 0.5,
            }}
            className="grid p-24 max-w-[1200px] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {filteredBusinesses.map((business) => (
              <motion.li
                key={business._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={`src/images/${business.imageUrl}`}
                    alt={business.name}
                    className="w-full h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {business.name}
                    </h2>
                    <p className="text-sm mb-4 text-gray-200 line-clamp-2">
                      {business.description}
                    </p>
                    <Link to={`/bsnss/${business._id}`}>
                      <Button className="w-full bg-primary hover:bg-primary-foreground text-primary-foreground hover:text-primary py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                        View Reviews
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </main>
      <Outlet />
    </motion.div>
  );
}

export default BusinessListPage;
