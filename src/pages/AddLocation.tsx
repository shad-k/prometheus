import React from "react";
import MapComponent from "../components/addLocation/Map";

const AddLocation: React.FC = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-col">
      <MapComponent />
    </div>
  );
};

export default AddLocation;
