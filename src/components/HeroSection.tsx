import { Buisness } from "@/types/types";
import { motion } from "framer-motion";

interface PropsTypes {
  business: Buisness | null;
}

function HeroSection({ business }: PropsTypes) {
  if (!business) return null;
  return (
    <div className="relative w-full h-80 overflow-hidden">
      <img
        src={`/src/images/${business.imageUrl}`}
        alt={business.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold"
          >
            {business.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg mt-4"
          >
            {business.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
