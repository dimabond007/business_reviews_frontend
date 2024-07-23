import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "450px",
};

const options = {
  zoom: 14,
};

interface MyMapComponentProps {
  address: string;
}

const MyMapComponent: React.FC<MyMapComponentProps> = ({ address }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAcnV2yGM1jOC2mn7g9cJ5nwS5fqwlFaZg",
  });

  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const geocodeAddress = (address: string) => {
      if (!window.google) {
        console.error("Google maps object is not available");
        return;
      }
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (!results) return;
        if (status === "OK" && results[0]) {
          const position = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          };
          setLocation(position);
          if (mapRef.current) {
            mapRef.current.panTo(position);
          }
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    };

    if (isLoaded && address) {
      geocodeAddress(address);
    }
  }, [address, isLoaded]);

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={options.zoom}
      center={location || { lat: 0, lng: 0 }}
      onLoad={onMapLoad}
    >
      {location && <Marker position={location} />}
    </GoogleMap>
  );
};

export default MyMapComponent;
