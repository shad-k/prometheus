import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LoadingIcon from "../common/LoadingIcon";

const LocateMeButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, 15);
      setIsLoading(false);
    },
  });

  const locateMe = (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.stopPropagation();
    map.locate();
  };

  return (
    <button
      onClick={locateMe}
      className="flex items-center justify-center absolute top-1 right-1 bg-primaryBlue h-10 min-w-[120px] px-2 py-1 text-base rounded-md backdrop-blur-3xl text-white hover:bg-white hover:text-primaryBlue z-[500]"
      disabled={isLoading}
      id="locate-me-btn"
    >
      {isLoading ? <LoadingIcon /> : "Locate Me"}
    </button>
  );
};

export default LocateMeButton;
