import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import api from "@/services/api.service";
import { Buisness } from "@/types/types"; // Fixed typo in the type definition
import { useEffect, useState } from "react";
import Loading from "../components/Loading"; // Import the Loading component
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BUISNESS_URL = "http://localhost:3000/api/business"; // Fixed typo in the URL constant

function BusinessListPage() {
  const [businesses, setBusinesses] = useState<Buisness[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchAllBusinesses() {
      setIsLoading(true);
      const options = {
        params: {
          name: searchParams.get("name"),
          category: searchParams.get("category"),
          district: searchParams.get("district"),
        },
      };

      try {
        const { data: fetchedBusinesses } = await api.get(
          BUISNESS_URL,
          options
        );
        setBusinesses(fetchedBusinesses);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchAllBusinesses();
  }, [searchParams]);

  function handleFilterChange(
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement> // Explicitly typed the event
  ) {
    const inputName = ev.target.name;
    const value = ev.target.value;
    searchParams.set(inputName, value);
    setSearchParams(searchParams);
  }

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
        className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-12 px-4 sm:px-8 shadow-md"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold">
          Discover Top Businesses
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-center max-w-2xl mx-auto">
          Explore and review the best local businesses in your area.
        </p>
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search businesses..."
            name="name"
            value={searchParams.get("name") || ""}
            onChange={handleFilterChange}
            className="p-2 rounded-lg w-full max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
          />
        </div>
        <div className="flex justify-center gap-5 mt-8">
          <div className="w-full max-w-xs">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Category:
            </label>
            <div className="relative">
              <select
                name="category"
                id="category"
                value={searchParams.get("category") || ""}
                onChange={handleFilterChange}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
              >
                <option value="">All</option>
                <option value="Technology">Technology</option>
                <option value="Food">Food</option>
                <option value="Repair">Repair</option>
                <option value="Gardening">Gardening</option>
                <option value="Fitness">Fitness</option>
                <option value="Cafe">Cafe</option>
                <option value="Bookstore">Bookstore</option>
                <option value="ArtGallery">Art Gallery</option>
                <option value="Fashion">Fashion</option>
                <option value="PetSupplies">Pet Supplies</option>
                <option value="Bakery">Bakery</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Health">Health</option>
                <option value="Florist">Florist</option>
                <option value="HomeDecor">Home Decor</option>
                <option value="Crafts">Crafts</option>
                <option value="Grocery">Grocery</option>
                <option value="Sports">Sports</option>
                <option value="Beauty">Beauty</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs">
            <label
              htmlFor="district"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              District:
            </label>
            <div className="relative">
              <select
                name="district"
                id="district"
                value={searchParams.get("district") || ""}
                onChange={handleFilterChange}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
              >
                <option value="">All</option>
                <option value="Center District">Center District</option>
                <option value="Jerusalem District">Jerusalem District</option>
                <option value="Haifa District">Haifa District</option>
                <option value="Southern District">Southern District</option>
                <option value="Tel Aviv District">Tel Aviv District</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="p-4 sm:p-8 bg-background">
        {isLoading ? (
          <Loading /> // Use the Loading component when isLoading is true
        ) : (
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              staggerChildren: 0.1,
              delayChildren: 0.5,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-full mx-auto"
          >
            {businesses.map((business) => (
              <motion.li
                key={business._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-40 sm:h-56 lg:h-64 overflow-hidden bg-black">
                  <img
                    src={
                      business.imageUrl
                        ? `/src/images/${business.imageUrl}`
                        : "https://placehold.co/600x400"
                    }
                    alt={business.name}
                    className="w-full h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                    <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">
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
