import api from "@/services/api.service";
import { Buisness } from "@/types/types";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MyMapComponent from "@/components/MyMapComponent";

// const API_KEY = "AIzaSyAcnV2yGM1jOC2mn7g9cJ5nwS5fqwlFaZg";

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
        <div>
          <MyMapComponent address="keren kayemet le-Ysrael 12, holon" />
          {/* <MyMapComponent address="ha-atsmaut 80, kiryat ata" /> */}
        </div>
        {/* reviews */}
        <div></div>
      </div>
    </div>
  );
}

export default BusinessDetailsPage;
