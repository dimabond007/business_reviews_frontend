import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BusinessDetailsPage() {
  const [business, setBuisness] = useState<Buisness | null>(null);
  const { bsnssId } = useParams();

  useEffect(() => {
    async function getBusiness() {
      const { data } = await api("/business/" + bsnssId);

      console.log(data);

      setBuisness(data);
    }
    getBusiness();
  }, []);
  if (!business) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative">
        <img src={`/src/images/${business.imageUrl}`} alt="" />
        <div className="absolute top-0 left-0 content-center w-full h-full bg-black bg-opacity-30">
          <div className="flex  justify-center  text-white ">
            {business.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetailsPage;
